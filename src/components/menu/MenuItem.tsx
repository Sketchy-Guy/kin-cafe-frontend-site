import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menu';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="group py-4 border-b border-kin-border/50 hover:bg-kin-surface/40 px-3 transition-colors duration-200 rounded-sm">
      <div className="flex items-baseline justify-between gap-4 mb-1">
        <div className="flex items-center gap-2">
          <h4 className="font-serif-editorial text-xl md:text-2xl font-normal text-kin-text group-hover:text-kin-accent transition-colors">
            {item.name}
          </h4>
          {item.isSignature && (
            <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-kin-accent/15 text-kin-accent font-semibold rounded-sm">
              KIN SPECIAL
            </span>
          )}
        </div>

        {item.price && (
          <span className="font-mono text-sm font-semibold text-kin-text shrink-0">
            {item.price}
          </span>
        )}
      </div>

      <p className="text-xs md:text-sm text-kin-muted leading-relaxed font-light">
        {item.description}
      </p>

      {item.tags && item.tags.length > 0 && (
        <div className="flex items-center gap-1.5 mt-2">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] text-kin-muted/80 uppercase tracking-wider">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
