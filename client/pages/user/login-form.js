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
  })

  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // 可以利用e.target觀察目前是在輸入或操作哪個欄位上
    console.log(e.target.name, e.target.type, e.target.value)
    // ES6: computed property names (計算得來的屬性名稱)
    // [e.target.name]: e.target.value }
    // ^^^^^^^^^^^^^^^ 這裡可以動態的代入變數值或表達式，計算出物件屬性名稱(字串)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單送出事件處理函式
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = { email: '', password: '' }

    // if (user.username === '') {
    // 上面寫法常見改為下面這樣，`if(user.username)` 代表有填寫，
    // 所以反相判斷 `if(!user.username)` 代表沒填寫
    if (!user.email) {
      newErrors.email = '帳號為必填'
    }

    if (user.password && user.password.length < 6) {
      newErrors.password = '密碼至少6個字元'
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
    }

    // if (user.password2 === '') {
    //   newErrors.password2 = '確認密碼為必填'
    // }

    // if (user.password !== user.password2) {
    //   newErrors.password = '密碼與確認密碼需要相同'
    //   newErrors.password2 = '密碼與確認密碼需要相同'
    // }

    // 檢查完設定到狀態中
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤發生，不送到伺服器去
    if (hasErrors) {
      return // 函式中作流程控制，會跳出函式不執行之後的程式碼
    }
    // 表單檢查--- END ---

    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/user/login', {
      credentials: 'include', // 設定cookie或是要存取隱私資料時帶cookie到伺服器一定要加
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
    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/logout', {
      credentials: 'include', // 設定cookie或是要存取隱私資料時帶cookie到伺服器一定要加
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
    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/check', {
      credentials: 'include', // 設定cookie或是要存取隱私資料時帶cookie到伺服器一定要加
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

  return (
    <>
      <section className={styles['section']}>
        <Header />
        <p className={styles['tip']}>點選圖片中的按鈕以切換登入、註冊</p>
        <div className={styles['cont']}>
          <form
            className={`${styles['form']} ${styles['sign-in']}`}
            onSubmit={handleSubmit}
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
            <div className="error">{errors.username} </div>
            <label className={styles['label']}>
              <span className={`${styles['span']} ${styles['spanl']}`}>
                密碼：{' '}
              </span>
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
              <di className={`${styles['img__text']} ${styles['m--up']}`}>
                <h2 className={`${styles['h2']} ${styles['h2text']}`}>
                  老朋友
                </h2>
                <h6 className={styles['h6']}>
                  趕快回來~我們有新朋友想介紹給你
                </h6>
              </di>
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
            <div className={`${styles['form']} ${styles['sign-up']}`}>
              <h2 className={styles['h2']}>歡迎加入毛孩樂園</h2>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  姓名：
                </span>
                <input className={styles['input']} type="text" />
              </label>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  Email：
                </span>
                <input className={styles['input']} type="email" />
              </label>
              <label className={styles['label']}>
                <span className={`${styles['span']} ${styles['spanl']}`}>
                  密碼：
                </span>
                <input className={styles['input']} type="password" />
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
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
