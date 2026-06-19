import React, { useState } from 'react';

export const SearchFilter = ({ 
  items = [], 
  searchKey = 'title',
  onFilterChange = () => {},
  placeholder = 'Search...',
  className = '',
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = items.filter(item =>
    item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchTerm(value);
    onFilterChange(filtered);
  };

  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-white focus:outline-none focus:border-indigo-500"
      />
      <p className="text-sm text-slate-400 mt-2">{filtered.length} results</p>
    </div>
  );
};
