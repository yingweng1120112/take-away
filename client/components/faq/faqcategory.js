import React, { useState } from 'react'
import styles from '@/styles/faq/faqshopping.module.css'
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaBox,
  FaReceipt,
  FaBowlFood,
  FaHand,
  FaDog,
  FaCat,
  FaGear,
  FaPaw,
} from 'react-icons/fa6'

export default function Faqcategory({ onFilterChange, onSearchChange }) {
  const [searchKeyword, setSearchKeyword] = useState('')
  const handleButtonClick = (name, value) => {
    onFilterChange(name, value)
  }
  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchKeyword(value)
    onSearchChange(value)
  }
  return (
    <>
      <div className={styles['container_faq']}>
        <div className={styles['box_search']}>
          <input
            className={styles['searchBar']}
            type="text"
            name="searchBar"
            value={searchKeyword}
            onChange={handleSearchChange}
            placeholder="搜尋常見問題"
          />
          <a href="#" className={styles['faq_icons']}>
            <FaMagnifyingGlass className={styles['faq_icons']} />
          </a>
        </div>
      </div>
      <div className={styles['box_options']}>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '訂單相關')}
          >
            <FaCartShopping className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>訂單相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '退換貨相關')}
          >
            <FaBox className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>退換貨相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '發票相關')}
          >
            <FaReceipt className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>發票相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '商品相關')}
          >
            <FaBowlFood className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>商品相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '領養相關')}
          >
            <FaHand className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>領養相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '狗狗相關')}
          >
            <FaDog className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>狗狗相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '貓貓相關')}
          >
            <FaCat className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>貓貓相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a
            href="#"
            className={`${styles.faq_links} ${styles.faq_icons}`}
            onClick={() => handleButtonClick('main_question', '其他相關')}
          >
            <FaGear className={styles['faq_icons']} />
            <h4 className={styles['faq_text']}>其他相關</h4>
          </a>
        </div>
      </div>
    </>
  )
}
