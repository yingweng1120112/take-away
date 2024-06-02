import React, { useState } from 'react'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'
import styles from '@/styles/faq/faqshopping.module.css'

export default function Faqlist({ data }) {
  const [selected, setSelected] = useState(null)
  console.log(data)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <>
      <div className={styles['box_ans']}>
        <div className={styles['container_ans']}>
          <div className={styles['accordion']}>
            {data.map((item, i) => (
              <div className={styles['item']} key={i}>
                <div className={styles['title']} onClick={() => toggle(i)}>
                  <h4 className={styles['toggle']}>{item.small_question}</h4>
                  <div className={styles['faq_paws']}>
                    {selected === i ? <IoPawOutline /> : <IoPawSharp />}
                  </div>
                </div>
                <div
                  className={`${styles.content_ans} ${
                    selected === i ? styles.show : ''
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
