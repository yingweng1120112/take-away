import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/user/register.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    }

    if (!user.name) newErrors.name = '姓名為必填'
    if (!user.email) newErrors.email = 'Email為必填'
    if (!user.phone) newErrors.phone = '帳號為必填'
    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }
    if (!user.password) newErrors.password = '密碼為必填'
    if (!user.confirmPassword) newErrors.confirmPassword = '確認密碼為必填'

    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some((v) => v)

    if (hasErrors) return

    const res = await fetch('http://localhost:3005/api/users/register-form', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (res.ok) {
      alert('註冊成功！')
      setUser({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      })
    } else {
      alert(`註冊失敗：${data.message}`)
    }
  }

  return (
    <>
      <section className={styles['section']}>
        <Header />
        <p className={styles['tip']}>點選圖片中的按鈕以切換登入、註冊</p>
        <div className={styles['cont']}>
          <form
            className={`${styles['form']} ${styles['sign-up']}`}
            onSubmit={handleSubmit}
          >
            <h2 className={styles['h2']}>歡迎加入毛孩樂園！</h2>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                姓名：{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleFieldChange}
                />
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.name}
              </span>
            </label>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                帳號:{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleFieldChange}
                  // required
                />
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.phone}
              </span>
            </label>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                Email：{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleFieldChange}
                />
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.email}
              </span>
            </label>

            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                密碼:{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={user.password}
                  onChange={handleFieldChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.password}
              </span>
            </label>

            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                確認密碼:{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleFieldChange}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.confirmPassword}
              </span>
            </label>
            <button
              type="submit"
              className={`${styles['button']} ${styles['submit']}`}
            >
              註冊
            </button>

            <button
              type="button"
              className={`${styles['button']} ${styles['fb-btn']}`}
            >
              Join with{' '}
              <span className={`${styles['span']} ${styles['fb-btns']}`}>
                Google
              </span>
            </button>
            <button
              className={`${styles['button']} ${styles['fb-btn']}`}
              type="button"
              onClick={() => {
                // 重置需要自行設定回初始化值
                setUser({
                  name: '',
                  email: '',
                  phone: '',
                  password: '',
                  confirmPassword: '',
                  agree: false,
                })
              }}
            >
              重置
            </button>
            {/* <button
              className={`${styles['button']} ${styles['fb-btn']}`}
              type="button"
              onClick={() => {
                // 重置需要自行設定回初始化值
                setUser({
                  name: '榮恩',
                  email: 'ron@test.com',
                  phone: 'ron',
                  password: '123456',
                  confirmPassword: '123456',
                  agree: true,
                })
              }}
            >
              一鍵填入
            </button> */}
          </form>
          <div className={styles['sub-cont']}>
            <div className={styles.img}>
              <div className={`${styles['img__text']} ${styles['m--in']}`}>
                <h2 className={`${styles.h2} ${styles.h2text}`}>新成員？</h2>
                <h6 className={styles.h6}>
                  快來了解各種毛孩
                  <br />
                  以及豐富的寵物用品吧！
                </h6>
              </div>
              <Link href="/user/login">
                <div className={styles['img__btn']}>
                  <span
                    className={`${styles.span} ${styles['spanbtn']} ${styles['m--up']}`}
                  >
                    登入
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
