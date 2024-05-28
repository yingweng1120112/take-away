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

export default function Chatleft() {
  return (
    <>
      {/* 聊天室左側功能列 */}
      <div className={styles['chatA']}>
        <a href="#">
          <FaBars className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaBookOpen className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaMusic className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaSquarePollVertical className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaPencil className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaTicket className={styles['cr_icons']} />
        </a>
        <a href="#">
          <FaGear className={styles['cr_icons']} />
        </a>
      </div>
    </>
  )
}
