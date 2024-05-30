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

export default function Chatmiddle() {
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
          <img src="../img/faq/chat_user1-removebg-preview.png" alt="" />
          <img src="../img/faq/chat_user2-removebg-preview.png" alt="" />
          <img src="../img/faq/chat_user3-removebg-preview.png" alt="" />
          {/* <img src="../img/faq/chat_user4-removebg-preview.png" alt="" />
          <img src="../img/faq/chat_user4-removebg-preview.png" alt="" /> */}
        </div>
      </div>
    </>
  )
}
