import React from 'react';
import MessageForm from './MessageForm';

const ScheduleMessage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-50">Schedule a WhatsApp Message</h1>
      <MessageForm />
    </div>
  );
};

export default ScheduleMessage;
