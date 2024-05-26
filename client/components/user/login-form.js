import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/user/login.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { UserContext } from '@/context/UserContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

export default function LoginForm() {
  const router = useRouter()

  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const { setUsers } = useContext(UserContext);
  const [user, setUser] = useState({
    phone: '',
    password: '',
    password2: '',
  })

  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    phone: '',
    password: '',
    password2: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

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
    const newErrors = { phone: '', password: '', password2: '' }

    // if (user.phone === '') {
    // 上面寫法常見改為下面這樣，`if(user.phone)` 代表有填寫，
    // 所以反相判斷 `if(!user.phone)` 代表沒填寫
    if (!user.phone) {
      newErrors.phone = '帳號為必填'
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

    if (user.password !== user.password2) {
      newErrors.password = '密碼與確認密碼需要相同'
      newErrors.password2 = '密碼與確認密碼需要相同'
    }

    // 檢查完設定到狀態中
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤發生，不送到伺服器去
    if (hasErrors) {
      return // 函式中作流程控制，會跳出函式不執行之後的程式碼
    }
    // 表單檢查--- END ---
    try {
      // 檢查沒問題後再送到伺服器
      const res = await fetch('http://localhost:3005/api/users/login', {
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
        // 保存用户id到localStorage
        localStorage.setItem('user_id', returnUser.user_id)
        router.push('/user/user-info')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      alert('發生錯誤，請稍後再試')
    }
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:3005/api/users/logout', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      if (data.status === 'success') {
        alert('登出成功')
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      alert('發生錯誤，請稍後再試')
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
            <h2 className={styles['h2']}>立即參觀！</h2>
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
                />
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.phone}{' '}
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
                  type={showPassword2 ? 'text' : 'password'}
                  name="password2"
                  value={user.password2}
                  onChange={handleFieldChange}
                />
                <span
                  onClick={() => setShowPassword2(!showPassword2)}
                  style={{ cursor: 'pointer' }}
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <span
                className={`${styles['span']} ${styles['spanl']} ${styles['error']}`}
              >
                {errors.password2}
              </span>
            </label>
            <div className={`${styles['forgot-pass']}`}>
              <Link
                href="/user/forget-password"
                className={`${styles['notice']}`}
              >
                忘記密碼？
              </Link>
            </div>
            <button
              type="submit"
              className={`${styles['button']} ${styles['submit']}`}
            >
              登入
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
            <button
              className={`${styles['button']} ${styles['fb-btn']}`}
              type="button"
              onClick={() => {
                setUser({
                  phone: 'ron',
                  password: '123456',
                  password2: '123456',
                })
              }}
            >
              一鍵填入
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className={`${styles['button']} ${styles['fb-btn']}`}
            >
              登出
            </button>
          </form>
          <div className={styles['sub-cont']}>
            <div className={styles['img']}>
              <div className={`${styles['img__text']} ${styles['m--up']}`}>
                <h2 className={`${styles.h2} ${styles.h2text}`}>老朋友</h2>
                <h6 className={styles.h6}>趕快回來~我們有新朋友想介紹給你</h6>
              </div>
              <Link href="/user/register">
                <div className={styles['img__btn']}>
                  <div
                    className={`${styles.span} ${styles['spanbtn']} ${styles['m--up']}`}
                  >
                    註冊
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <style jsx>
          {`
            .error {
              color: red;
              font-size: 13px;
              height: 16px;
            }
          `}
        </style>
        <Footer />
      </section>
    </>
  )
}
