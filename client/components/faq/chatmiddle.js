import React from 'react'
import styles from '@/styles/faq/chatroom.module.css'
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
import { useHistory } from 'react-router-dom'

export default function Chatmiddle() {
  const history = useHistory()
  const handleUserClick = (userId) => {
    // 根據您的路由設定更改下面的路徑
    history.push(`/chat/${userId}`); // 使用 React Router 跳轉到聊天界面
    // 或者可以在這裡設置狀態來控制顯示聊天界面的組件
  };
  return (
    <>
      {/* 聊天室中間用戶列 */}
      <div className={styles['chatB']}>
        <div className={styles['chat_title']}>
          <h2>客服聊天室</h2>
          <div>
            <FaFilter className={styles['cr_icons']} />
            <span>最新</span>
          </div>
        </div>
        <div className={styles['chat_search']}>
          <div>
            <FaMagnifyingGlass className={styles['cr_icons']} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className={styles['chat_user']}>
        <img
            src="../img/faq/chat_user1-removebg-preview.png"
            alt="User 1"
            onClick={() => handleUserClick(1)}
          />
          <img
            src="../img/faq/chat_user2-removebg-preview.png"
            alt="User 2"
            onClick={() => handleUserClick(2)}
          />
          <img
            src="../img/faq/chat_user3-removebg-preview.png"
            alt="User 3"
            onClick={() => handleUserClick(3)}
          />
        </div>
      </div>
    </>
  )
}
