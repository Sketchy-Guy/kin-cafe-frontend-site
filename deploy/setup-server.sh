#!/usr/bin/env bash
# One-time server setup for the KIN Cafe frontend. Run as root on the Hostinger VPS.
set -euo pipefail

DOMAIN="bykin.in"
APP_USER="kinfrontend"
IMAGE="ghcr.io/sketchy-guy/kin-cafe-demo:latest"
STACK_DIR="/home/${APP_USER}/stack"

[ "$(id -u)" -eq 0 ] || { echo "Run this as root."; exit 1; }
command -v apt-get >/dev/null || { echo "This script expects Ubuntu or Debian."; exit 1; }

echo "== Checking ports 80 and 443 are free"
if ss -ltn '( sport = :80 or sport = :443 )' | tail -n +2 | grep -q .; then
  echo "Something already listens on port 80 or 443:"
  ss -ltnp '( sport = :80 or sport = :443 )'
  echo "Stop that service first (for example: systemctl disable --now apache2 nginx), then run this script again."
  exit 1
fi

echo "== Installing base packages and Docker"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y ca-certificates curl ufw
if ! command -v docker >/dev/null; then
  curl -fsSL https://get.docker.com | sh
fi
systemctl enable --now docker
mkdir -p /etc/docker
if [ ! -f /etc/docker/daemon.json ]; then
  cat > /etc/docker/daemon.json <<'JSON'
{ "log-driver": "json-file", "log-opts": { "max-size": "10m", "max-file": "3" } }
JSON
  systemctl restart docker
fi

echo "== Creating user ${APP_USER}"
id "$APP_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos "" "$APP_USER"
usermod -aG docker "$APP_USER"
install -d -m 700 -o "$APP_USER" -g "$APP_USER" "/home/${APP_USER}/.ssh"

echo "== Creating the deploy key for GitHub Actions"
KEY=/root/kinfrontend_deploy_key
if [ ! -f "$KEY" ]; then
  ssh-keygen -t ed25519 -N "" -C "github-actions-deploy" -f "$KEY" >/dev/null
fi
AUTH="/home/${APP_USER}/.ssh/authorized_keys"
touch "$AUTH"
grep -qxF "$(cat ${KEY}.pub)" "$AUTH" || cat "${KEY}.pub" >> "$AUTH"
chown "$APP_USER:$APP_USER" "$AUTH"; chmod 600 "$AUTH"

echo "== Firewall"
SSH_PORT="$(sshd -T 2>/dev/null | awk '/^port /{print $2}' | head -n1 || true)"; SSH_PORT="${SSH_PORT:-22}"
ufw allow "${SSH_PORT}/tcp"
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 443/udp
ufw --force enable

echo "== Writing the app stack to ${STACK_DIR}"
install -d -o "$APP_USER" -g "$APP_USER" "$STACK_DIR"

cat > "${STACK_DIR}/docker-compose.yml" <<'YML'
services:
  caddy:
    image: caddy:2
    container_name: caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy_data:/data
      - caddy_config:/config
    networks: [web]

  frontend:
    image: ${FRONTEND_IMAGE}
    container_name: kin-frontend
    restart: unless-stopped
    networks: [web]

volumes:
  caddy_data:
  caddy_config:

networks:
  web:
    name: web
YML

cat > "${STACK_DIR}/Caddyfile" <<CADDY
www.${DOMAIN} {
	redir https://${DOMAIN}{uri} permanent
}

${DOMAIN} {
	encode zstd gzip
	# Later, route the backend here, for example:
	# handle /api/* {
	#	reverse_proxy backend:4000
	# }
	reverse_proxy frontend:80
}
CADDY

echo "FRONTEND_IMAGE=${IMAGE}" > "${STACK_DIR}/.env"
chown -R "$APP_USER:$APP_USER" "$STACK_DIR"

echo "== Starting Caddy (it requests the HTTPS certificate now)"
sudo -u "$APP_USER" -H bash -c "cd ${STACK_DIR} && docker compose up -d caddy"

cat <<DONE

==================== SETUP FINISHED ====================
1) Copy the PRIVATE key below into the GitHub secret SSH_PRIVATE_KEY
   (include the BEGIN and END lines):

$(cat "$KEY")

2) Then delete it from the server:   shred -u ${KEY} ${KEY}.pub
=========================================================
DONE
