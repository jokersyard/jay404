import React, { useState } from 'react';

export const Accordion = ({ 
  items = [], 
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="border border-slate-700 rounded mb-2">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left font-medium text-white hover:bg-slate-800 transition-colors"
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 text-slate-300 border-t border-slate-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
