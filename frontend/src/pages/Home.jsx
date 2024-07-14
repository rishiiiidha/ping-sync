import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const upcomingMessages = [
    {
      _id: '1',
      text: 'Follow up after 7 days',
      dateTime: '2024-07-21T12:00:00',
      condition: '7 days after no purchase',
    },
    {
      _id: '2',
      text: 'Thank you for your order!',
      dateTime: '2024-07-13T14:30:00',
      condition: 'Immediately after order',
    },
  ];

  const sentMessages = [
    {
      _id: '1',
      text: 'Your order is on the way!',
      sentTime: '2024-07-13T12:00:00',
      recipient: '+1234567890',
      status: 'Delivered',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-50 mb-4">Seller Dashboard</h1>
      <Link to="/schedule" className="card-button-edit text-white px-4 py-2 rounded">
        Schedule a Message
      </Link>

      <h2 className="text-2xl text-gray-50 font-bold my-4">Upcoming Messages</h2>
      <ul>
        {upcomingMessages.map((message) => (
          <li key={message._id} className="mb-2 p-4 text-gray-400 rounded shadow card">
            <div><strong>Message:</strong> {message.text}</div>
            <div><strong>Scheduled Time:</strong> {new Date(message.dateTime).toLocaleString()}</div>
            <div><strong>Condition:</strong> {message.condition}</div>
            <div className="flex space-x-2 mt-2">
              <button className="card-button-edit text-white px-2 py-1 rounded">Edit</button>
              <button className="card-button-delete text-white px-2 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold my-4 text-gray-50">Sent Messages</h2>
      <ul>
        {sentMessages.map((message) => (
          <li key={message._id} className="mb-2 p-4 card text-gray-400  rounded shadow ">
            <div><strong>Message:</strong> {message.text}</div>
            <div><strong>Sent Time:</strong> {new Date(message.sentTime).toLocaleString()}</div>
            <div><strong>Recipient:</strong> {message.recipient}</div>
            <div><strong>Status:</strong> {message.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
