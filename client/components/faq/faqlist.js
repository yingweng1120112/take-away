import React, { useState } from 'react'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'
import styles from '@/styles/faq/faqshopping.module.css'

export default function Faqlist({ data, currentPage, itemsPerPage }) {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = data.slice(startIndex, startIndex + itemsPerPage)

  return (
    <>
      <div className={styles['box_ans']}>
        <div className={styles['container_ans']}>
          <div className={styles['accordion']}>
            {currentData.map((item, i) => (
              <div className={styles['item']} key={startIndex + i}>
                <div className={styles['title']} onClick={() => toggle(startIndex + i)}>
                  <h4 className={styles['toggle']}>{item.small_question}</h4>
                  <div className={styles['faq_paws']}>
                    {selected === startIndex + i ? <IoPawOutline /> : <IoPawSharp />}
                  </div>
                </div>
                <div
                  className={`${styles.content_ans} ${
                    selected === startIndex + i ? styles.show : ''
                  }`}
                >
                  <img
                    className={styles['img_ans']}
                    src="../img/faq/ans_dog1.jpg"
                    alt=""
                  />
                  {item.faq_answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
