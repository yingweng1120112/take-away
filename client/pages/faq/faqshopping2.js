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
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'
import Reportform from './faqreport1'
import Faqlist from './faqlist'

export default function Faqshopping() {
  const [openModal, setopenModal] = useState(false)
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className={styles['onlyforbgc']}>
        <div className={styles['container_faq']}>
          <div className={styles['box_search']}>
            <input
              className={styles['searchBar']}
              type="text"
              name="searchBar"
              placeholder="搜尋常見問題"
            />
            <a href="#" className={styles['faq_icons']}>
              <FaMagnifyingGlass className={styles['faq_icons']} />
            </a>
            {/* <i
            className={`${styles['faq_icons']} fa-solid fa-magnifying-glass`}
          ></i> */}
          </div>
        </div>
        <div className={styles['box_options']}>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaCartShopping className={styles['faq_icons']} />
              {/* <i className={`${styles['faq_icons']} fa-solid fa-cart-shopping`}></i> */}
              <h4 className={styles['faq_text']}>訂單相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaBox className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-box"></i> */}
              <h4 className={styles['faq_text']}>退換貨相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaReceipt className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-receipt"></i> */}
              <h4 className={styles['faq_text']}>發票相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaBowlFood className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-bowl-food"></i> */}
              <h4 className={styles['faq_text']}>商品相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaHand className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-hand"></i> */}
              <h4 className={styles['faq_text']}>領養相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaDog className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-dog"></i> */}
              <h4 className={styles['faq_text']}>狗狗相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaCat className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-cat"></i> */}
              <h4 className={styles['faq_text']}>貓貓相關</h4>
            </a>
          </div>
          <div className={styles['faq_options']}>
            <a href="#" className={styles[('faq_links', 'faq_icons')]}>
              <FaGear className={styles['faq_icons']} />
              {/* <i className="faq_icons fa-solid fa-gear"></i> */}
              <h4 className={styles['faq_text']}>其他相關</h4>
            </a>
          </div>
        </div>
        <div>
          <div className={styles['box_ans']}>
            <div className={styles['container_ans']}>
              <Faqlist />
            </div>
          </div>
          <div className={styles['faq_pagebox']}>
            <div className={styles['faq_pagination']}>
              <a href="#">&laquo;</a>
              <a className={styles['active']} href="#">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
          <div className={styles['faq_res']}>
            <a onClick={() => setopenModal(true)}>
              <img
                className={styles['img_res']}
                src="../img/faq/faq_res.jpg"
                alt=""
              />
            </a>
            <Reportform open={openModal} onClose={() => setopenModal(false)} />
            <div>
              <img
                className={styles['img_res2']}
                src="../img/faq/faq_catpaw1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
