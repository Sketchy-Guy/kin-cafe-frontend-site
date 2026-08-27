import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none">
      <div
        className="h-full bg-kin-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
