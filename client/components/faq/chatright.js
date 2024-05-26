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

export default function Chatright() {
  return (
    <>
      {/* 聊天室右側訊息列 */}
      <div className={styles['chatC']}>
        <div className={styles['chat_message_title']}>
          {/* <div className={styles['cmt_top']}>
            <div className={styles['cmt_avatar']}></div>
            <h5>訪客0001</h5>
          </div> */}
          <div className={styles['cmt_mid']}>
            <div className={styles['cmt_mid2']}>
              <div className={styles['cmt_avatar2']}></div>
              <div>
                <h5>線上客服</h5>
                <span>Online</span>
              </div>
            </div>
            <div className={styles['cmt_tools']}>
              <a href="#">
                <FaUserPlus className={styles['cr_icons']} />
              </a>
              <a href="#">
                <FaStar className={styles['cr_icons']} />
              </a>
              <a href="#">
                <FaCircleInfo className={styles['cr_icons']} />
              </a>
              <a href="#">
                <FaEllipsisVertical className={styles['cr_icons']} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles['cmt_bottom']}>
          <div className={styles['cmt_view']}></div>
        </div>
        <div className={styles['chat_message']}>
          <div className={styles['message_box']}>
            <input className={styles['message_input']} type="text" />
            <button>
              <FaPaperPlane className={styles['cr_icons']} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
