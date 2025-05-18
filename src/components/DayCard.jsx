import React from 'react';
import { Reorder } from 'framer-motion';

export const DayCard = ({ day, onDelete, onEdit }) => (
  <Reorder.Item
    value={day}
    id={day.id}
    className="bg-white p-6 rounded-2xl shadow-md w-full cursor-grab"
    whileDrag={{ scale: 1.03 }}
  >
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
      <h2 className="text-2xl font-semibold text-gray-800">{day.title}</h2>
      <div className="space-x-3 mt-2 sm:mt-0">
        <button onClick={onDelete} className="text-red-500 text-sm hover:underline">🗑️ </button>
        <button onClick={onEdit} className="text-blue-500 text-sm hover:underline">📝 </button>
      </div>
    </div>
    <ul className="list-disc pl-6 text-gray-700 space-y-1">
      {day.activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
    <div className="mt-4">
      <p className="font-medium text-gray-800">📝 Notes:</p>
      <textarea
        className="w-full mt-2 p-3 border rounded-lg text-gray-700"
        rows="2"
        defaultValue={day.notes}
        readOnly
      />
    </div>
  </Reorder.Item>
);