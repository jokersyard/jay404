import React from 'react';

export const Table = ({ 
  columns = [], 
  data = [],
  className = '',
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-sm text-left text-slate-300">
        <thead className="text-xs uppercase bg-slate-800 text-slate-400">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-slate-700 hover:bg-slate-800">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-6 py-4">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
