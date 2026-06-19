'use client';

import { useState } from 'react';

export const Sidebar = ({ 
  items = [], 
  onItemClick = () => {},
  className = '',
}) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className={`space-y-2 ${className}`}>
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => {
            setActiveItem(idx);
            onItemClick(item);
          }}
          className={`w-full text-left px-4 py-2 rounded transition-colors ${
            activeItem === idx
              ? 'bg-indigo-600 text-white'
              : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};
