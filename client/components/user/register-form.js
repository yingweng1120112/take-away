import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/user/register.module.scss'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

export default function RegisterForm() {
  const router = useRouter()
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
      // alert('註冊成功！')
      toast.success('註冊成功！', {
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
      setUser({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      })
      router.push('./login')
    } else {
      // alert(`註冊失敗：${data.message}`)
      toast.success(`註冊失敗：${data.message}`, {
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
    }
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
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleFieldChange}
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
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
                  name: 'Joey',
                  phone: '0916921120',
                  email: 'joey123@gmail.com',
                  password: 'Pa55w.rd22',
                  confirmPassword: 'Pa55w.rd22',
                })
              }}
            >
              一鍵輸入
            </button>
            <button
              type="submit"
              className={`${styles['button']} ${styles['submit']}`}
            >
              註冊
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
