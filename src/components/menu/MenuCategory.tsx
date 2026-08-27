import React from 'react';
import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType } from '@/data/menu';
import { MenuItem } from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  items: MenuItemType[];
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category, items }) => {
  if (items.length === 0) return null;

  return (
    <div id={`category-${category.id}`} className="mb-12 scroll-mt-24">
      {/* Category Header */}
      <div className="mb-6 pb-3 border-b-2 border-kin-text flex flex-col md:flex-row md:items-end justify-between gap-2">
        <div>
          <span className="text-[10px] uppercase tracking-editorial text-kin-accent font-semibold block mb-1">
            {category.subtitle}
          </span>
          <h3 className="font-serif-editorial text-3xl md:text-4xl text-kin-text font-light">
            {category.title}
          </h3>
        </div>

        <p className="text-xs text-kin-muted max-w-xs font-light">
          {category.description}
        </p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
