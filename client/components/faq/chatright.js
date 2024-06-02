import React, { useEffect, useState } from 'react'
import styles from '@/styles/faq/chatright.module.css'
import {
  FaBars,
  FaBookOpen,
  FaMusic,
  FaSquarePollVertical,
  FaPencil,
  FaTicket,
  FaGear,
  FaFilter,
  FaMagnifyingGlass,
  FaUserPlus,
  FaStar,
  FaCircleInfo,
  FaEllipsisVertical,
  FaPaperPlane,
} from 'react-icons/fa6'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Chatright({ socket, username, room, avatar }) {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([])
  // const [selectedAvatar, setSelectedAvatar] = useState(null)

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        avatarUrl: avatar
      }
      console.log(messageData)

      await socket.emit('send_message', messageData)
      setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }
  }

  useEffect(() => {
    const receiveMessage = (data) => {
      setMessageList((list) => [...list, data])
    }

    socket.on('receive_message', receiveMessage)
    return () => socket.off('receive_message', receiveMessage)
  }, [socket])

  return (
    <>
      {/* 聊天室右側訊息列 */}
      <div className={styles['chatC']}>
        {/* 分隔 */}
        <div className={styles['chat_message_title']}>
          <div className={styles['cmt_top']}>
            <h3>線上客服中心</h3>
          </div>
          <div className={styles['cmt_mid']}>
            <div className={styles['cmt_mid2']}>
              {/* <div className={styles['cmt_avatar2']}></div> */}
              {/* <span>Online</span> */}
            </div>
            <div className={styles['cmt_mid2']}>
              <div>
                {' '}
                <img
                  src={avatar ? avatar : 'cr_avatar.jpg'}
                  alt="Avatar"
                  style={{ width: 70, height: 70 ,borderRadius: '50%'}}
                />
              </div>
              <h5>{username}</h5>
              {/* <h5>{room}</h5> */}
            </div>
          </div>
        </div>
        <div className={styles['cmt_bottom']}>
          <ScrollToBottom className={styles['message-container']}>
            {messageList.map((messageContent, index) => (
              <div
                className={styles['cmt_view']}
                key={index}
                id={
                  username === messageContent.author
                    ? styles['you']
                    : styles['other']
                }
              >
                <div>
                  <div className={styles['message-meta']}>
                    <img
                      src={messageContent.avatarUrl || 'cr_avatar.jpg'}
                      alt="Avatar"
                      style={{ width: 40, height: 40 ,borderRadius: '50%'}}
                    />
                    <p className={styles['author']}>{messageContent.author}</p>
                  </div>
                  <div className={styles['message-content']}>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className={styles['message-meta']}>
                    <p className={styles['time']}>{messageContent.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollToBottom>
        </div>
        <div className={styles['chat_message']}>
          <div className={styles['message_box']}>
            <input
              className={styles['message_input']}
              type="text"
              value={currentMessage}
              placeholder="請輸入訊息..."
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                event.key === 'Enter' && sendMessage()
              }}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane className={styles['cr_icons_msg']} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
