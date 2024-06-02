import styles from '@/styles/faq/chatroom.module.css'
import io from 'socket.io-client'
import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Chatbanner from '@/components/faq/chatbanner'
import Chatright from '../../components/faq/chatright'
import Chatavatar from '@/components/faq/chatavatar'
import avatars from '@/components/faq/avatars'

const socket = io.connect('http://localhost:3005')

export default function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]) // 預設大頭照
  const joinRoom = () => {
    if (username == '' || room == '') {
      alert('請輸入您的名字和選擇一個客服房間。')
      return
    }else{
      socket.emit('join_room',{username , room})
      setShowChat(true)
    }
  }
  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(avatar)
  }

  return (
    <>
      <Header />
      <Chatbanner />
      <div className={styles['crcat']}>
        <img
          className={styles['crcat1']}
          src="/img/faq/chatroom-cat1.png"
          alt=""
        />
        <img
          className={styles['crcat2']}
          src="/img/faq/chatroom-cat2.png"
          alt=""
        />
        <img
          className={styles['crcat3']}
          src="/img/faq/chatroom-cat3.png"
          alt=""
        />
        <img
          className={styles['crcat4']}
          src="/img/faq/chatroom-cat3.png"
          alt=""
        />
      </div>
      <div className={styles['chat_index']}>
        {!showChat ? (
          <div>
            <div className={styles['joinChatContainer']}>
              <div className={styles['chat_indh4']}>
                <h4>線上客服中心</h4>
              </div>
              <Chatavatar
                avatars={avatars}
                onSelectAvatar={handleSelectAvatar}
              />
              <input
                type="text"
                placeholder="請輸入您的名字..."
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              {/* 下拉方式 */}
              <div>
                <select
                  className={styles['chat_index_sle']}
                  onChange={(event) => {
                    setRoom(event.target.value)
                  }}
                >
                  <option value="">選擇客服</option>
                  <option value="room1">線上客服1</option>
                  <option value="room2">線上客服2</option>
                </select>
              </div>
              <button className={styles['cta']}>
                <span
                  className={styles['hover-underline-animation']}
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
          </div>
        ) : (
          <Chatright
            socket={socket}
            username={username}
            room={room}
            avatar={selectedAvatar.url}
          />
        )}
      </div>
      <Footer />
    </>
  )
}
