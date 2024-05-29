// client/src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('message', (payload) => {
      setChat([...chat, payload]);
    });
  }, [chat]);

  return (
    <div>
      <h1>Chat App</h1>
      {chat.map((payload, index) => (
        <p key={index}>{payload}</p>
      ))}
      <form onSubmit={sendChat}>
        <input type="text" name="message" placeholder="Send a message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
