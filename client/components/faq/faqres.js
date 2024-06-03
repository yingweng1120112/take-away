import React, { useState } from 'react'
import styles from '@/styles/faq/faqshopping.module.css'
import Faqreport from '@/components/faq/faqreport'

export default function Faqres() {
  const [openModal, setopenModal] = useState(false)
  return (
    <>
      <div className={styles['faq_res']}>
        <a onClick={() => setopenModal(true)}>
          <img
            className={styles['img_res']}
            src="../img/faq/faq_res.jpg"
            alt=""
          />
        </a>
        <Faqreport open={openModal} onClose={() => setopenModal(false)} />
        <div>
          <img
            className={styles['img_res2']}
            src="../img/faq/faq_catpaw1.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
