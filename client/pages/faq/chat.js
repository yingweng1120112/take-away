import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import styles from '@/styles/faq/chatroom.module.css'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
        // imageUrl: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg'
      }

      await socket.emit('send_message', messageData)
      setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket])

  return (
    <div className={styles['chat-window']}>
      <div className={styles['chat-header']}>
        <p>線上客服中心</p>
      </div>
      <div className={styles['chat-body']}>
        <ScrollToBottom className={styles['message-container']}>
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={styles['message']}
              id={
                username === messageContent.author
                  ? styles['you']
                  : styles['other']
              }
            >
              <div>
                <div className={styles['message-content']}>
                  <p>{messageContent.message}</p>
                </div>
                <div className={styles['message-meta']}>
                  <div>{messageContent.imageUrl}</div>
                  <p className={styles['time']}>{messageContent.time}</p>
                  <p className={styles['author']}>{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className={styles['chat-footer']}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage()
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
