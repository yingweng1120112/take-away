import React, { useEffect, useState } from 'react'
import styles from '@/styles/user/login.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Link from 'next/link'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

export default function LoginRegister() {
  // 控制登入登出滑動特效
  useEffect(() => {
    // 添加事件監聽器
    const handleClick = () => {
      document
        .querySelector(`.${styles['cont']}`)
        .classList.toggle(styles['s--signup'])
    }

    const imgBtn = document.querySelector(`.${styles['img__btn']}`)
    imgBtn.addEventListener('click', handleClick)

    // 在組件卸載時移除事件監聽器
    return () => {
      imgBtn.removeEventListener('click', handleClick)
    }
  }, [styles])

  // 登入開始
  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    email: '',
    password: '',
    password2: '',
  })

  // 登入錯誤訊息
  const [loginErrors, setLoginErrors] = useState({
    email: '',
    password: '',
    password2: '',
  })

  // 註冊狀態
  const [registerUser, setRegisterUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  // 註冊錯誤訊息
  const [registerErrors, setRegisterErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: '',
  })

  // 顯示密碼
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    if (e.target.email in registerUser) {
      if (e.target.name === 'agree') {
        setRegisterUser({ ...registerUser, [e.target.email]: e.target.checked })
      } else {
        setRegisterUser({ ...registerUser, [e.target.email]: e.target.value })
      }
    } else {
      setUser({ ...user, [e.target.email]: e.target.value })
    }
  }

  // 登入表單送出事件處理函式
  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { email: '', password: '', password2: '' }

    if (!user.email) {
      newErrors.email = '帳號為必填'
    }

    if (user.password && user.password.length < 6) {
      newErrors.password = '密碼至少6個字元'
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
    }

    if (user.password2 === '') {
      newErrors.password2 = '確認密碼為必填'
    }

    setLoginErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((v) => v)

    if (hasErrors) {
      return
    }

    const res = await fetch('http://localhost:3005/api/users/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (data.status === 'success') {
      alert('登入成功')
      const returnUser = parseJwt(data.data.accessToken)
      console.log(returnUser)
    } else {
      alert(data.message)
    }
  }

  const handleLogout = async () => {
    const res = await fetch('http://localhost:3005/api/users/logout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    const data = await res.json()

    if (data.status === 'success') {
      alert('登出成功')
    } else {
      alert(data.message)
    }
  }

  const handleCheck = async () => {
    const res = await fetch('http://localhost:3005/api/users/check', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    if (data.status === 'success') {
      console.log(data.data)
    } else {
      alert(data.message)
    }
  }
  // 登入結束

  // 註冊表單送出事件處理函式
  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: '',
    }

    if (!registerUser.name) {
      newErrors.name = '姓名為必填'
    }
    if (!registerUser.email) {
      newErrors.email = 'email為必填'
    }

    if (registerUser.password !== registerUser.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }

    if (!registerUser.password) {
      newErrors.password = '密碼為必填'
    }

    if (!registerUser.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }

    if (!registerUser.agree) {
      newErrors.agree = '請先同意會員註冊條款'
    }

    setRegisterErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((v) => v)

    if (hasErrors) {
      return
    }

    const res = await fetch('http://localhost:3005/api/members/raw-sql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerUser),
    })

    const data = await res.json()

    console.log(data)

    alert('送到伺服器')
  }

  return (
    <>
      <section className={styles['section']}>
        <Header />
        <p className={styles['tip']}>點選圖片中的按鈕以切換登入、註冊</p>
        <div className={styles['cont']}>
          <form
            className={`${styles['form']} ${styles['sign-in']}`}
            onSubmit={handleLoginSubmit}
          >
            <h2 className={styles['h2']}>立即參觀！</h2>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                Email：{' '}
              </span>
              <input
                className={styles['input']}
                type="text"
                name="email"
                value={user.email}
                onChange={handleFieldChange}
              />
            </label>
            <div className="error">{loginErrors.email} </div>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                密碼：{' '}
              </span>
<<<<<<< HEAD:client/pages/user/login-register.js
              <input
                className={styles['input']}
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={user.password}
                onChange={handleFieldChange}
              />
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => {
                  setShowPassword(e.target.checked)
                }}
              />
              顯示密碼
            </label>
            <div className="error">{loginErrors.password}</div>
=======
              <div className='d-flex'>
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
            </label>
            <div className="error">{errors.password}</div>
>>>>>>> 71457f280f2948246f8c73cb625180cf99239551:client/pages/user/login-form.js
            <p className={styles['forgot-pass']}>忘記密碼？</p>
            <button
              type="submit"
              className={`${styles['button']} ${styles['submit']}`}
            >
              登入
            </button>
            <button
              type="button"
              onClick={() => {
                setUser({
                  email: 'Hyunwoo01@gmail.com',
                  password: 'Pa55w.rd01',
                })
              }}
            >
              一鍵填入
            </button>
            <button type="button" onClick={handleCheck}>
              檢查登入狀況
            </button>
            <button type="button" onClick={handleLogout}>
              登出
            </button>
            <button
              type="button"
              className={`${styles['button']} ${styles['fb-btn']}`}
            >
              Connect with{' '}
              <span className={`${styles['span']} ${styles['fb-btns']}`}>
                Google
              </span>
            </button>
          </form>
          <div className={styles['sub-cont']}>
            <div className={styles['img']}>
              <div className={`${styles['img__text']} ${styles['m--up']}`}>
                <h2 className={`${styles['h2']} ${styles['h2text']}`}>
                  老朋友
                </h2>
                <h6 className={styles['h6']}>
                  趕快回來~我們有新朋友想介紹給你
                </h6>
              </div>
              <div className={`${styles['img__text']} ${styles['m--in']}`}>
                <h2 className={`${styles['h2']} ${styles['h2text']}`}>
                  新成員？
                </h2>
                <h6 className={styles['h6']}>
                  快來了解各種毛孩
                  <br />
                  以及豐富的寵物用品吧！
                </h6>
              </div>
              <div className={styles['img__btn']}>
                <span
                  className={`${styles['span']} ${styles['spanbtn']} ${styles['m--up']}`}
                >
                  註冊
                </span>
                <span
                  className={`${styles['span']} ${styles['spanbtn']} ${styles['m--in']}`}
                >
                  登入
                </span>
              </div>
            </div>
            <form onSubmit={handleRegisterSubmit}>
              <div className={`${styles['form']} ${styles['sign-up']}`}>
                <h2 className={styles['h2']}>歡迎加入毛孩樂園</h2>
                <label className={styles['label']}>
                  <span className={`${styles['span']} ${styles['spanl']}`}>
                    姓名：{' '}
                  </span>
                  <input
                    className={styles['input']}
                    type="text"
                    name="name"
                    value={registerUser.name}
                    onChange={handleFieldChange}
                  />
                </label>
                <span className="error">{registerErrors.name}</span>
                <label className={styles['label']}>
                  <span className={`${styles['span']} ${styles['spanl']}`}>
                    Email：{' '}
                  </span>
                  <input
                    className={styles['input']}
                    type="text"
                    name="email"
                    value={registerUser.email}
                    onChange={handleFieldChange}
                  />
                </label>
                <span className="error">{registerErrors.email}</span>
                <label className={styles['label']}>
                  <span className={`${styles['span']} ${styles['spanl']}`}>
                    密碼：{' '}
                  </span>
                  <input
                    className={styles['input']}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={registerUser.password}
                    onChange={handleFieldChange}
                  />
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => {
                      setShowPassword(e.target.checked)
                    }}
                  />{' '}
                  顯示密碼
                </label>
                <span className="error">{registerErrors.password}</span>
                <label className={styles['label']}>
                  <span className={`${styles['span']} ${styles['spanl']}`}>
                    確認密碼：{' '}
                  </span>
                  <input
                    className={styles['input']}
                    type="password"
                    name="password2"
                    value={registerUser.password2}
                    onChange={handleFieldChange}
                  />
                  <input
                    type="checkbox"
                    checked={showConfirmPassword}
                    onChange={(e) => {
                      setShowConfirmPassword(e.target.checked)
                    }}
                  />{' '}
                  顯示密碼
                  <span className="error">
                    {registerErrors.confirmPassword}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setRegisterUser({
                      name: 'Cookie',
                      email: 'Cookie@gmail.com',
                      password: '123456',
                      password2: '123456',
                    })
                  }}
                >
                  一鍵填入
                </button>
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
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
