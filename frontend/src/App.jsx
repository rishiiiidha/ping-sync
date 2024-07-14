import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ScheduleMessage from './pages/ScheduleMessage.jsx';
import './App.css';
function App() {
  return (
    <div className=" p-4 relative">
    <div className="background"></div>
    <div className="overlay"></div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<ScheduleMessage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
