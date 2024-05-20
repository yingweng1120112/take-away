import React, { useState } from 'react'
import styles from '@/styles/reserve/reserve.module.css'
import { IoRemoveOutline } from 'react-icons/io5'
import Header from '@/components/layout/header'
import banner from '@/styles/reserve/banner.module.css'
import Footer from '@/components/layout/footer'

export default function Reserve() {
  const [reserve, setReserve] = useState({
    pet: '',
    name: '',
    reserveTime: '',
  })
  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    pet: '',
    name: '',
    reserveTime: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setReserve({ ...reserve, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { pet: '', name: '', reserveTime: '' }

    // 基本的表單驗證
    if (!reserve.pet || reserve.pet.length < 2)
      newErrors.pet = '浪浪名稱必須大於2個字'
    if (!reserve.name || reserve.name.length < 2)
      newErrors.name = '預約人必須大於2個字'
    if (!reserve.reserveTime) newErrors.reserveTime = '預約時間必填'

    if (newErrors.pet || newErrors.name || newErrors.reserveTime) {
      setErrors(newErrors)
      return
    }

    setErrors(newErrors)
    console.log('Form submitted:', reserve)

    try {
      const res = await fetch('http://localhost:3005/api/reserve_system', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserve),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log(data)
      alert(
        `請確定預約細項為\n預約的寵物是${reserve.pet}\n預約人是${reserve.name}\n預約時間為${reserve.reserveTime}`
      )

      // 清空表單輸入字段
      setReserve({ pet: '', name: '', reserveTime: '' })
    } catch (error) {
      console.error('Error:', error)
      alert('預約失敗，請稍後再試')
    }
  }

  return (
    <>
      <Header />
      <div
        className={banner['banner']}
        style={{ backgroundImage: 'url(/img/banner-blog.jpg)' }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>Odds Us</p>
          <p className={banner['menu-b']}>可不可以</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              {/* span為pc版文字，p為phone版文字 */}
              <span className={banner['middle-page-title']}>預約賞寵</span>
              <span>Reserve visit</span>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['reserve']}>
        <div className={styles['container']}>
          <img src={`/img/print.png`} alt="" className={styles['foot']} />
          <img src={`/img/print.png`} className={styles['print']} />
          <div className={styles['reserve-title']}>
            <h1 className={styles['reserve-title-h1']}>緣分</h1>
            <p className={styles['lap-top']}>
              _____________________________________________
            </p>
            <p className={styles['phone']}>
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
            </p>
          </div>
          <h5 className={styles['reserve-inner']}>
            這些孩子在等待著一些機會，
            <br />
            屬於牠們的機會可能比您想像中的少，
            <br />
            所以也期待您撥空來現場看看他們!
          </h5>
          <div className={styles['reserve-img']}>
            <img src={`/img/pet-info/10008/10008-5.jpg`} alt="" />
            <div className={styles['img-title']}>
              <h1 className={styles['img-h1']}>期待與您相見♡</h1>
              <p className={styles['img-p']}>
                _______________________________________
              </p>
            </div>
          </div>
          <div className={styles['reserve-form']}>
            <form
              className={styles['input-group']}
              id="email"
              placeholder="浪浪名稱"
              onSubmit={handleSubmit}
            >
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>浪浪名稱</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      type="text"
                      name="pet"
                      className={styles['input']}
                      placeholder="浪浪名稱"
                      value={reserve.pet}
                      onChange={handleChange}
                      // required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.pet}</div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約人</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      className={styles['input']}
                      placeholder="預約人"
                      type="text"
                      name="name"
                      value={reserve.name}
                      onChange={handleChange}
                      required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.name}</div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約時間</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      className={styles['input']}
                      placeholder=""
                      type="date"
                      name="reserveTime"
                      value={reserve.reserveTime}
                      onChange={handleChange}
                      required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.reserveTime}</div>
              </div>
              <button className={styles['button']} type="submit">
                送出
              </button>
            </form>
          </div>
          <div className={styles['play']}>
            <h5 className={styles['play-title']}>
              他們也一定很期待能和你一同交流、認識與玩耍
            </h5>
          </div>
        </div>
      </section>
           <Footer />
    </>
  )
}
