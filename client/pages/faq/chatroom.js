import styles from '@/styles/faq/app.module.css'
import io from 'socket.io-client'
import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Chatbanner from '@/components/faq/chatbanner'
import Chatright from '../../components/faq/chatright'
import Chat from './chat'

const socket = io.connect('http://localhost:3005')

export default function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
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
      <div className={styles['chat_index']}>
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
              type="button"
              value="客服值日生"
              onChange={(event) => {
                setUsername(event.target.value=1)
              }}
            /> */}
            {/* <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value)
              }}
            /> */}
            {/* <button onClick={joinRoom}>開始聊聊</button> */}
            <button className={styles['cta']}>
              <span class={styles['hover-underline-animation']} onClick={joinRoom}>開 始 聊 聊</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>
        ) : (
          <Chatright socket={socket} username={username} />
        )}
      </div>
      <Footer />
    </>
  )
}
