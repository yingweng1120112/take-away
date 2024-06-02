import React, { useState } from 'react'
import styles from '@/styles/faq/faqreport.module.css'
import { PiCatBold } from 'react-icons/pi'
import { FaX } from 'react-icons/fa6'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Faqreport({ open, onClose }) {
  // 表單送出互動
  const [formData, setFormData] = useState({
    email: '',
    fr_option: '',
    question: '',
  })
  const handleReset = () => {
    setFormData({
      email: '',
      fr_option: '',
      question: '',
    })
  }
  if (!open) {
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3005/api/faq-report', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      console.log('Response from server:', result)
      if (response.status === 201) {
        console.log('表單已成功送出', result)
        toast.success('表單已成功送出', { position: 'top-center' })
        onClose()
      } else {
        console.log('表單送出失敗', result.message)
        alert(`表單送出失敗: ${result.message}`)
      }
    } catch (error) {
      console.error('表單送出錯誤:', error)
      alert(`表單送出錯誤: ${error.message}`)
    }
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
          <FaX onClick={onClose} className={styles['formCloseBtn']} />
        </div>
        <div className={styles['rf_form']}>
          <form onSubmit={handleSubmit}>
            <h3 className={styles['rf_title']}>問題回報表單</h3>
            <label className={styles['rf_label']} htmlFor="email">
              您的信箱:
            </label>
            <br />
            <input
              className={styles['rf_input']}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            <label className={styles['rf_label']} htmlFor="fr_option">
              您的問題類型:
            </label>
            <br />
            <select
              className={styles['rf_select']}
              id="fr_option"
              name="fr_option"
              value={formData.fr_option}
              onChange={handleChange}
              required
            >
              <optgroup label="商城問題">
                <option value="訂單相關">訂單相關</option>
                <option value="退換貨相關">退換貨相關</option>
                <option value="發票相關">發票相關</option>
                <option value="商品相關">商品相關</option>
              </optgroup>
              <optgroup label="毛孩問題">
                <option value="領養相關">領養相關</option>
                <option value="狗狗相關">狗狗相關</option>
                <option value="貓貓相關">貓貓相關</option>
                <option value="其他相關">其他相關</option>
              </optgroup>
            </select>
            <br />
            <label className={styles['rf_label']} htmlFor="question">
              您的問題:
            </label>
            <br />
            <textarea
              className={styles['rf_textarea']}
              cols="30"
              rows="10"
              placeholder="從這裡開始輸入..."
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            {/* <button><i className="fa-solid fa-paw"></i>送出表單</button> */}
            <br />
            <div className={styles['rf_btn1']}>
              <button className={styles['rf_btn3']} type="submit">
                送出表單
              </button>
              {/* <input
                className={styles['rf_btn3']}
                type="submit"
                value="送出表單"
              /> */}
              <PiCatBold className={styles['rf_icons']} />
              {/* <i className="fa-solid fa-paw"></i> */}
            </div>
            <br />
            <div className={styles['rf_btn2']}>
              <button
                className={styles['rf_btn4']}
                type="reset"
                onClick={handleReset}
              >
                清除表單
              </button>
              {/* <input
                className={styles['rf_btn4']}
                type="reset"
                value="清除表單"
              /> */}
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
