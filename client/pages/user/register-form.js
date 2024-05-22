import React, { useEffect, useState } from 'react'
import styles from '@/styles/user/register.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function RegisterForm() {
  // 註冊開始
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: '', // 呈現錯誤訊息用字串
  })

  // checkbox 呈現密碼用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.type)

    if (e.target.name === 'agree') {
      setUser({ ...user, [e.target.name]: e.target.checked })
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }

    // ES6特性: 計算得來的屬性名稱(computed property names)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這樣可以動態的設定物件的屬性名稱
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
  }

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查 --- START
    // 建立一個新的錯誤物件
    const newErrors = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }

    if (!user.name) {
      newErrors.name = '姓名為必填'
    }
    if (!user.email) {
      newErrors.email = 'email為必填'
    }
    if (!user.username) {
      newErrors.username = '帳號為必填'
    }

    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要一致'
      newErrors.confirmPassword = '密碼與確認密碼需要一致'
    }

    if (!user.password) {
      newErrors.password = '密碼為必填'
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }

    if (!user.agree) {
      newErrors.agree = '請先同意會員註冊條款'
    }

    // 呈現錯誤訊息
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤，不送到伺服器，跳出submit函式
    if (hasErrors) {
      return
    }
    // 表單檢查 --- END

    // 最後檢查完全沒問題才送到伺服器(ajax/fetch)
    const res = await fetch('http://localhost:3005/api/users/raw-sql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
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
            className={`${styles['form']} ${styles['sign-up']}`}
            onSubmit={handleSubmit}
          >
            <h2 className={styles['h2']}>歡迎加入毛孩樂園</h2>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                姓名：
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleFieldChange}
                />
                <span className="error">{errors.name}</span>
              </div>
            </label>
            <br />
            <br />
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
                <span className="error">{errors.email}</span>
              </div>
            </label>
            <br />
            <br />
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                帳號:{' '}
              </span>
              <div className="d-flex">
                <input
                  className={styles['input']}
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleFieldChange}
                  // required
                />
                <span className="error">{errors.username}</span>
              </div>
            </label>
            <br />
            <br />
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
                <span className="error">{errors.password}</span>
              </div>
            </label>
            <br />
            <br />
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
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <span className="error">{errors.confirmPassword}</span>
              </div>
            </label>
            <br />
            <br />
            <label>
              <input
                type="checkbox"
                name="agree"
                checked={user.agree}
                onChange={handleFieldChange}
              />{' '}
              我同意網站會員註冊條款
            </label>
            <br />
            <span className="error">{errors.agree}</span>
            <br />
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
              type="button"
              onClick={() => {
                // 重置需要自行設定回初始化值
                setUser({
                  name: '',
                  email: '',
                  username: '',
                  password: '',
                  confirmPassword: '',
                  agree: false,
                })
              }}
            >
              重置
            </button>
            <button
              type="button"
              onClick={() => {
                // 重置需要自行設定回初始化值
                setUser({
                  name: '榮恩',
                  email: 'ron@test.com',
                  username: 'ron',
                  password: '123456',
                  confirmPassword: '123456',
                  agree: true,
                })
              }}
            >
              一鍵填入
            </button>
          </form>
        </div>
        {/* <style jsx>
          {`
            .error {
              color: red;
              font-size: 12px;
            }
          `}
        </style> */}
        <Footer />
      </section>
    </>
  )
}
