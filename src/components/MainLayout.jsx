// components/MainLayout.jsx
import React from 'react';
import { Header } from './Header';
import { Controls } from './Controls';
import { Footer } from './Footer';
import { DayCard } from './DayCard';
import { Reorder } from 'framer-motion';

const MainLayout = ({
  dailyPlans,
  formVisible,
  formData,
  toggleForm,
  handleInputChange,
  handleDaySubmit,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <Header />
      <Controls onAdd={toggleForm} onExport={() => console.log('Export clicked')} />

      {formVisible && (
        <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto mt-6 space-y-4">
          <h3 className="text-xl font-semibold">Add a New Day</h3>
          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter title"
          />
          <input
            name="activities"
            value={formData.activities}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Activities (comma separated)"
          />
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Additional notes"
          />
          <div className="flex justify-between">
            <button
              onClick={handleDaySubmit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={toggleForm}
              className="text-red-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <Reorder.Group
        axis="y"
        values={dailyPlans}
        onReorder={() => {}}
        className="space-y-4 mt-6 px-4 max-w-3xl mx-auto mt-[65vh]"
      >
        {dailyPlans.map((day) => (
          <DayCard
            key={day.id}
            day={day}
            onDelete={() => handleDelete(day.id)}
            onEdit={() => handleEdit(day.id)}
          />
        ))}
      </Reorder.Group>

      <Footer />
    </>
  );
};

export default MainLayout;
