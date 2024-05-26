import React from 'react'
import banner from '@/styles/banner/banner.module.css'
// 請複製貼上出去
export default function Chatbanner() {
  return (
    //要修改banner圖片，請直接更改下面連結
    <div
      className={banner['banner']}
      style={{ backgroundImage: 'url(/img/faq/chatbannercut.jpg)' }}
    >
      <div className={banner['left']}>
        <p className={banner['menu-a']}>Chat</p>
        <p className={banner['menu-b']}>聊天室</p>
      </div>
      <div className={banner['middle']}>
        <div className={`${banner['accordion']}`}>
          <div className={`accordion-button ${banner['accordion-button']}`}>
            {/* span為pc版文字，p為phone版文字 */}
            <span className={banner['middle-page-title']}>客服中心</span>
            <span>Chatroom</span>
            <p className={banner['middle-page-title']}>Chat</p>
          </div>
        </div>
      </div>
    </div>
  )
}
