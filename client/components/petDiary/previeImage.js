import React from 'react'
import styles from '@/styles/petDiary/petDiary.module.css'

export default function PrevieImage(value) {
  return (
    <>
      {value.value.map((v, i) => {
        if (v.length > 0) {
          return (
            <img
              key={i}
              src={v}
              className={styles['show-img']}
              style={{ height: '100px' }}
            />
          )
        }
      })}
    </>
  )
}
