import React from 'react'
import styles from '@/styles/petDiary/petDiary.module.css'

export default function PrevieImage(value) {
  return (
    <>
      {value.value.map((v, i) => {
        if (v) {
          return (
            <img
              key={i}
              src={`/img/petDiary/${v}`}
              className={styles['show-img']}
              style={{ height: '100px' }}
            />
          )
        }
        
      })}
      
    </>
  )
}
