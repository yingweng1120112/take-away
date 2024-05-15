import React from 'react'
import styles from '@/styles/chatroom.module.css'

export default function Chatroom() {
  return (
    <>
      <div className={styles['container_chatroom']}>
        {/* 聊天室左側功能列 */}
        <div className={styles['chatA']}>
          <a href="#">
            <i className={`cr_icons fa-solid fa-bars`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-book-open`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-music`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-square-poll-vertical`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-pencil`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-ticket`}></i>
          </a>
          <a href="#">
            <i className={`cr_icons fa-solid fa-gear`}></i>
          </a>
        </div>

        {/* 聊天室中間用戶列 */}
        <div className={styles['chatB']}>
          <div className={styles['chat_title']}>
            <h2>Chat</h2>
            <div>
              <i className={`cr_icons fa-solid fa-filter`}></i>
              <span>Newest</span>
            </div>
          </div>
          <div className={styles['chat_search']}>
            <div>
              <i className={`cr_icons fa-solid fa-magnifying-glass`}></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className={styles['chat_user']}>
            <img src="../img/chat_user1-removebg-preview.png" alt="" />
            <img src="../img/chat_user2-removebg-preview.png" alt="" />
            <img src="../img/chat_user3-removebg-preview.png" alt="" />
            <img src="../img/chat_user4-removebg-preview.png" alt="" />
            <img src="../img/chat_user4-removebg-preview.png" alt="" />
          </div>
        </div>

        {/* 聊天室右側訊息列 */}
        <div className={styles['chatC']}>
          <div className={styles['chat_message_title']}>
            <div className={styles['cmt_top']}>
              <div className={styles['cmt_avatar']}></div>
              <h5>訪客0001</h5>
            </div>
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
                  <i className={`cr_icons fa-solid fa-user-plus`}></i>
                </a>
                <a href="#">
                  <i className={`cr_icons fa-regular fa-star`}></i>
                </a>
                <a href="#">
                  <i className={`cr_icons fa-solid fa-circle-info`}></i>
                </a>
                <a href="#">
                  <i className={`cr_icons fa-solid fa-sliders`}></i>
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
                <i className={`cr_icons fa-regular fa-paper-plane`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
