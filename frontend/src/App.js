import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure path is correct
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import ScheduleForm from './pages/ScheduleForm';

function App() {
  return (
    <Router>
      <NavBar /> {/* NavBar will be shown on every page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/schedule/:id" element={<ScheduleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
