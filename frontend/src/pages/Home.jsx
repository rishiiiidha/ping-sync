import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/messages');
        console.log(response)
        setMessages(response.data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setMessages([]);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
      <Link to="/schedule" className="bg-blue-500 text-white px-4 py-2 rounded">Schedule a Message</Link>
      <h2 className="text-2xl font-bold mt-4">Upcoming Messages</h2>
      <ul>
        {Array.isArray(messages) && messages.map((message) => (
          <li key={message._id} className="mb-2">
            <div>{message.text}</div>
            {console.log(message.dateTime)}
            <div>{new Date(message.dateTime).toLocaleString()}</div>
            <button className="bg-yellow-500 text-white px-2 mx-2 py-1 rounded">Edit</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
