import React from 'react';

export const SidebarLayout = ({ 
  sidebar, 
  children,
  className = '',
}) => {
  return (
    <div className={`flex min-h-screen gap-4 ${className}`}>
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">
        {sidebar}
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};
