import React from 'react'
import styles from '@/styles/faq/faqreport1.module.css'
import { PiCatBold } from 'react-icons/pi'
import { FaX } from "react-icons/fa6";
export default function Reportform({ open, onClose }) {
  if (!open) {
    return null
  }
  return (
    <div onClick={onClose} className={styles['container_report']}>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={styles['report_form']}
      >
        <div className={styles['rf_imgbox']}>
          <img
            className={styles['rf_img']}
            src="../img/faq/tkbglogo-rb.png"
            alt=""
          />
          {/* <button onClick={onClose} className={styles['formCloseBtn']}>
            X
          </button> */}
          <FaX onClick={onClose} className={styles['formCloseBtn']}/>
        </div>
        <div className={styles['rf_form']}>
          <form method="">
            <h3 className={styles['rf_title']}>問題回報表單</h3>
            <label className={styles['rf_label']} htmlFor="email">
              您的信箱:
            </label>
            <br />
            <input className={styles['rf_input']} type="email" id="email" />
            <br />
            <label className={styles['rf_label']} htmlFor="issueType">
              您的問題類型:
            </label>
            <br />
            <select className={styles['rf_select']} id="issueType">
              <optgroup label="商城問題">
                <option value="order">訂單相關</option>
                <option value="return">退換貨相關</option>
                <option value="invoice">發票相關</option>
                <option value="product">商品相關</option>
              </optgroup>
              <optgroup label="毛孩問題">
                <option value="adoption">領養相關</option>
                <option value="dog">狗狗相關</option>
                <option value="cat">貓貓相關</option>
                <option value="other">其他相關</option>
              </optgroup>
            </select>
            <br />
            <label className={styles['rf_label']} htmlFor="problem">
              您的問題:
            </label>
            <br />
            <textarea
              className={styles['rf_textarea']}
              cols="30"
              rows="10"
              placeholder="從這裡開始輸入..."
            ></textarea>
            <br />
            {/* <button><i className="fa-solid fa-paw"></i>送出表單</button> */}
            <br />
            <div className={styles['rf_btn1']}>
              <input
                className={styles['rf_btn3']}
                type="submit"
                value="送出表單"
              />
              <PiCatBold className={styles['rf_icons']} />
              {/* <i className="fa-solid fa-paw"></i> */}
            </div>
            <br />
            <div className={styles['rf_btn2']}>
              <input
                className={styles['rf_btn4']}
                type="reset"
                value="清除表單"
              />
              <PiCatBold className={styles['rf_icons']} />
              {/* <i className="fa-solid fa-paw"></i> */}
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}
