import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io({
  path: '/chatroom/socket.io',
})

function Chatsocket() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })

    return () => {
      socket.off('chat message')
    }
  }, [])

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('chat message', input)
      setInput('')
    }
  }

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            sendMessage()
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Chatsocket
