import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
const MessageForm = () => {
  const [messageType, setMessageType] = useState('follow-up');
  const [text, setText] = useState('');
  const [delay, setDelay] = useState('');
  const [condition, setCondition] = useState('');
  const [triggerAction, setTriggerAction] = useState('');
  const [personalization, setPersonalization] = useState('');
  const [dateTime, setDateTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ messageType, text, delay, condition, triggerAction, personalization, dateTime });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-50 p-4 rounded shadow card">
      <div className="mb-4">
        <label className="block text-gray-50">Message Type</label>
        <select
          value={messageType}
          onChange={(e) => setMessageType(e.target.value)}
          className="w-full p-2 border rounded card"
        >
          <option value="follow-up">Follow-up Message</option>
          <option value="immediate">Immediate Message</option>
          <option value="custom">Custom Scheduled Message</option>
        </select>
      </div>

      {messageType === 'follow-up' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-50">Message Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded card"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-50">Delay</label>
            <select
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              className="w-full p-2 border rounded card"
              required
            >
              <option value="1 day">1 day</option>
              <option value="3 days">3 days</option>
              <option value="7 days">7 days</option>
              <option value="14 days">14 days</option>
              <option value="30 days">30 days</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-50">Condition</label>
            <input
              type="checkbox"
              value={condition}
              onChange={(e) => setCondition(e.target.checked ? 'If customer has not purchased' : '')}
              className="mr-2"
            />
            If customer has not purchased
          </div>
        </>
      )}

      {messageType === 'immediate' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Message Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Trigger Action</label>
            <select
              value={triggerAction}
              onChange={(e) => setTriggerAction(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="After every order">After every order</option>
              <option value="After cart abandonment">After cart abandonment</option>
              <option value="After account creation">After account creation</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Personalization</label>
            <input
              type="checkbox"
              value={personalization}
              onChange={(e) => setPersonalization(e.target.checked ? 'Include customer-specific details' : '')}
              className="mr-2"
            />
            Include customer-specific details (e.g., Name, Order details)
          </div>
        </>
      )}

      {messageType === 'custom' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Message Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </>
      )}

      <button type="submit" className=" text-white px-4 py-2 rounded card-button-edit">Schedule Message</button>
    </form>
  );
};

export default MessageForm;
