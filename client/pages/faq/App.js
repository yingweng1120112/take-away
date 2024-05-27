import styles from '@/styles/faq/App.module.css'
import io from 'socket.io-client'
import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Chatbanner from '@/components/faq/chatbanner'
import Chatright from '../../components/faq/chatright'
import Chat from './chat'


const socket = io.connect('http://localhost:3001')

export default function App() {
  const [username, setUsername] = useState('')
  // const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== '') {
      socket.emit('join_room')
      setShowChat(true)
    }
  }

  return (
    <>
      <Header />
      <Chatbanner />
      <div className={styles['App']}>
        {!showChat ? (
          <div className={styles['joinChatContainer']}>
            <h3>客服中心</h3>
            <input
              type="text"
              placeholder="請輸入您的名字..."
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            />
            {/* <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value)
              }}
            /> */}
            <button onClick={joinRoom}>開始聊聊</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} />
        )}
      </div>
      <Footer />
    </>
  )
}
