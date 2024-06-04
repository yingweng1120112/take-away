import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/user/login.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { UserContext } from '@/context/UserContext'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { jwtDecode } from 'jwt-decode'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

// 登入
export default function LoginForm() {
  const [userInfo, setUserInfo] = useState(null)
  const [userData, setUserData] = useState('')
  const [name, setName] = useState('')
  const [userid, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [addressDetail, setAddressDetail] = useState('')

  const router = useRouter()
  const { setUsers } = useContext(UserContext)
  const [user, setUser] = useState({
    phone: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({
    phone: '',
    password: '',
    password2: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [message, setMessage] = useState('')

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單送出事件處理函式
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { phone: '', password: '', password2: '' }
    if (!user.phone) newErrors.phone = '帳號為必填'
    if (user.password.length < 6) newErrors.password = '密碼至少6個字元'
    if (!user.password) newErrors.password = '密碼為必填'
    if (!user.password2) newErrors.password2 = '確認密碼為必填'
    if (user.password !== user.password2) {
      newErrors.password = '密碼與確認密碼需要相同'
      newErrors.password2 = '密碼與確認密碼需要相同'
    }

    setErrors(newErrors)
    if (Object.values(newErrors).some((v) => v)) return

    try {
      const response = await fetch('http://localhost:3005/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: user.phone, password: user.password }),
      })

      if (response.ok) {
        const result = await response.json()
        const token = result.token
        // const user = parseJwt(token)
        localStorage.setItem('userKey', token)
        // const user = jwtDecode(token)
        // console.log(user.user_id)
        console.log('回傳成功')
        // setUsers(user)

        // 成功登入並回復初始會員狀態
        toast.success('已成功登入', {
          position: 'top-center',
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        })
        router.push('./user-info')
      } else {
        const data = await response.json()
        setMessage(data.message)
      }
    } catch (error) {
      console.log('An error occurred', error)
    }
  }

  // 處理登出
  const handleLogout = async () => {
    // 清除 localStorage 的 userKey
    localStorage.removeItem('userKey')

    // 成功登出並回復初始會員狀態
    toast.success('已成功登出', {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      transition: Slide,
    })

    // 其他狀態更新邏輯
    setUserData('')
    setName('')
    setUserId('')
    setEmail('')
    setPhone('')
    setAddressDetail('')

    // 跳轉到登陸頁面或首頁
    // window.location.href = '/'
    router.push('./login')
  }

  // google第三方登入
  const handleGoogleSuccess = async (response) => {
    const { credential } = response
    const decodedToken = jwt_decode(credential)

    try {
      const res = await fetch('http://localhost:3005/api/users/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credential }),
      })

      if (res.ok) {
        const result = await res.json()
        const token = result.token
        localStorage.setItem('userKey', token)
        toast.success('已成功登入', {
          position: 'top-center',
          autoClose: 600,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        })
        router.push('./user-info')
      } else {
        const data = await res.json()
        setMessage(data.message)
      }
    } catch (error) {
      console.log('An error occurred', error)
    }
  }

  const handleGoogleFailure = (response) => {
    console.log('Google Login Failed', response)
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
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
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
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
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
            <div className={`${styles['google']}`}>
              <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              >
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onFailure={handleGoogleFailure}
                  buttonText="Connect with Google"
                  render={(renderProps) => (
                    <button
                      type="button"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className={`${styles['googlebtn']} ${styles['button']} ${styles['submit']}`}
                    ></button>
                  )}
                />
              </GoogleOAuthProvider>
            </div>
            <button
              type="button"
              className={`${styles['button']} ${styles['fb-btn']}`}
              onClick={() => {
                // 測試帳號 白賢祐
                setUser({
                  phone: '0912345678',
                  password: 'Pa55w.rd02',
                  password2: 'Pa55w.rd02',
                })
              }}
            >
              一鍵輸入
            </button>
            <button
              type="submit"
              className={`${styles['button']} ${styles['submit']}`}
            >
              登入
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
