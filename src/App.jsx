// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [dailyPlans, setDailyPlans] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    activities: '',
    notes: '',
  });

  useEffect(() => {
    const savedPlans = localStorage.getItem('dailyPlans');
    if (savedPlans) {
      setDailyPlans(JSON.parse(savedPlans));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dailyPlans', JSON.stringify(dailyPlans));
  }, [dailyPlans]);

  const toggleForm = () => setFormVisible(prev => !prev);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDaySubmit = () => {
    if (!formData.title.trim()) {
      alert('Please enter a title.');
      return;
    }

    const newEntry = {
      id: crypto.randomUUID(),
      title: formData.title,
      activities: formData.activities.split(',').map(item => item.trim()),
      notes: formData.notes,
    };

    setDailyPlans(prev => [...prev, newEntry]);
    setFormData({ title: '', activities: '', notes: '' });
    setFormVisible(false);
  };

  const handleDelete = (id) => {
    setDailyPlans(prev => prev.filter(plan => plan.id !== id));
  };

  const handleEdit = (id) => {
    const current = dailyPlans.find(plan => plan.id === id);
    if (!current) return;

    const updatedTitle = prompt('Edit Title', current.title);
    const updatedActivities = prompt('Edit Activities (comma-separated)', current.activities.join(', '));
    const updatedNotes = prompt('Edit Notes', current.notes);

    const updatedEntry = {
      ...current,
      title: updatedTitle || current.title,
      activities: updatedActivities?.split(',').map(a => a.trim()) || current.activities,
      notes: updatedNotes || current.notes,
    };

    setDailyPlans(prev =>
      prev.map(plan => (plan.id === id ? updatedEntry : plan))
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            dailyPlans={dailyPlans}
            formVisible={formVisible}
            formData={formData}
            toggleForm={toggleForm}
            handleInputChange={handleInputChange}
            handleDaySubmit={handleDaySubmit}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
