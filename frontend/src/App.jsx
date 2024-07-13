
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ScheduleMessage from './pages/ScheduleMessage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<ScheduleMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
