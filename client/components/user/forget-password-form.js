import { useState } from 'react'
import styles from './forget-password.module.css'
import login from '@/styles/user/login.module.scss'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState('')
  const [verification_code, setverification_code] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleGetverification_code = async () => {
    // 請求後端發送驗證碼
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const result = await response.json()
      toast.success((result.message), {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      // setMessage(result.message)
    } catch (error) {
      // setMessage('發送驗證碼失敗')
      toast.success(('發送驗證碼失敗'), {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  }

  const handleResetPassword = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      // setMessage('密碼和確認密碼不一致')
      toast.success(('密碼和確認密碼不一致'), {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return
    }

    // 請求後端重設密碼
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, verification_code, password })
      })
      const result = await response.json()
      // setMessage(result.message)
      toast.success((result.message), {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } catch (error) {
      // setMessage('重設密碼失敗')
      toast.success(('重設密碼失敗'), {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  }

  return (
    <section className={styles['section']}>
      <Header />
      {/* <p className={`text-center mt-5 mb-3 ${styles['text-note']}`}>
        輸入你的會員電子郵件，按下"取得驗證碼"按鈕后，我們會將密碼重設指示寄送给你。
      </p> */}
      <div className={styles['cont']}>
        <form className={`${styles['form']}`} onSubmit={handleResetPassword}>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="email"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="電子郵件地址"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary mb-3"
            onClick={handleGetverification_code}
          >
            取得驗證碼
          </button>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="text"
                className={`form-control ${styles['form-control']}`}
                placeholder="電子郵件驗證碼"
                value={verification_code}
                onChange={(e) => setverification_code(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="password"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="password"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="確認密碼"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className={`${login['button']} ${login['submit']}`} >
            確定
          </button>
          {message && <p className="text-center mt-3">{message}</p>}
          <div className="row mt-2">
            <p className={`${styles['notice']}`}>
              還不是會員？
              <Link href="/user/login">加入我們</Link>。
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  )
}
