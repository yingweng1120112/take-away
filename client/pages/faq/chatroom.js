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
  // const [adminname, setAdminname] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)
  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room')
      setShowChat(true)
    }
    // if ((username !== '' || adminname === '西薩狗班長') && room !== '') {
    //   socket.emit('join_room', { room, username: adminname || username })
    //   setShowChat(true)
    // }
  }

  return (
    <>
      <Header />
      <Chatbanner />
      <div className={styles['chat_index']}>
        {!showChat ? (
          <div className={styles['joinChatContainer']}>
            <div className={styles['chat_indh4']}>
              <h4>線上客服中心</h4>
            </div>
            {/* <div className={styles['chat_index_img']}>
              <img src="/img/faq/chat_dogbg_re.png" alt="" />
            </div> */}
            {/* <div className={styles['chat_index_img1']}>
              <img src="/img/faq/chat_dogbg_re.png" alt="" />
            </div> */}
            <input
              type="text"
              placeholder="請輸入您的名字..."
              onChange={(event) => {
                setUsername(event.target.value)
              }}
            />
            {/* <input
              type="radio"
              onClick={() => setAdminname('西薩狗班長')}
            />Admin */}
            {/* 下拉方式 */}
            <div>
              <select className={styles['chat_index_sle']}
                onChange={(event) => {
                  setRoom(event.target.value)
                }}
              >
                <option value="" ></option>
                <option value="room1">線上客服1</option>
                <option value="room2">線上客服2</option>
              </select>
            </div>
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
              <span
                class={styles['hover-underline-animation']}
                onClick={joinRoom}
              >
                開 始 聊 聊
              </span>
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
