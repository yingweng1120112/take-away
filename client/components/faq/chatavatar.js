import React, { useState } from 'react'
import styles from '@/styles/faq/chatavatar.module.css'

export default function Chatavatar({ avatars, onSelectAvatar }) {
  const [selectedAvatarId, setSelectedAvatarId] = useState(null)

  const handleSelectAvatar = (avatar) => {
    setSelectedAvatarId(avatar.id) // 更新状态为当前选中的头像 ID
    onSelectAvatar(avatar) // 调用传入的 onSelectAvatar 方法
  }
  return (
    <>
      <div className={styles['avatarSelector']}>
        {avatars.map((avatar, index) => (
          <img
            className={`${styles['avatarImage']} ${
              selectedAvatarId === avatar.id ? styles['selected'] : ''
            }`}
            key={index}
            src={avatar.url}
            alt={`Avatar ${index}`}
            onClick={() => handleSelectAvatar(avatar)}
          />
        ))}
      </div>
    </>
  )
}
