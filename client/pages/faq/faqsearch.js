import React, { useState } from 'react'
import JSONDATA from './Notice_Adoptinfo.json'
import styles from '@/styles/faq/faqsearch.module.css'
export default function Faqsearch() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <>
      <div className={styles['container']}>
        <h1>搜尋功能</h1>
        <input type="text" placeholder="Search..." onChange={event=>{setSearchTerm(event.target.value)}}/>
        {JSONDATA.filter((val)=>{
          if(searchTerm == ""){
            return val
          }else if(val.main_question.toLowerCase().includes(searchTerm.toLowerCase()))
        }).map((val, key) => {
          return (
            <div className={styles['user']} key={key}>
              <p className={styles['myp']}>{val.main_question}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
