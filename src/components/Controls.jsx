import React from 'react'

export const Controls = ({ onAdd, onExport }) => (
  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
    <button onClick={onAdd} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
      ➕ Add New Day
    </button>
   
  </div>
);