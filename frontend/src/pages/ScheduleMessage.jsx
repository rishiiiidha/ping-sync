import React, { useState } from 'react';
import axios from 'axios';

const ScheduleMessage = () => {
  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dateTime)
    await axios.post('http://localhost:5001/api/messages', {
      text,
      dateTime,
    });
    console.log("Message scheduled")
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Schedule a WhatsApp Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Message Text</label>
          <textarea className="w-full p-2 border" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date & Time</label>
          <input 
            type="datetime-local" 
            className="w-full p-2 border" 
            value={dateTime} 
            onChange={(e) => setDateTime(e.target.value)} 
          />
          {console.log(dateTime)}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Schedule</button>
      </form>
    </div>
  );
};

export default ScheduleMessage;
