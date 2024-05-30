import { useState } from 'react'
import styles from './forget-password.module.css'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState('')
  const [verification_code, setverification_code] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleGetverification_code = async () => {
    // 请求后端发送验证码
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      const result = await response.json()
      setMessage(result.message)
    } catch (error) {
      setMessage('发送验证码失败')
    }
  }

  const handleResetPassword = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setMessage('密码和确认密码不一致')
      return
    }

    // 请求后端重设密码
    try {
      const response = await fetch('http://localhost:3005/api/forgot-password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, verification_code, password })
      })
      const result = await response.json()
      setMessage(result.message)
    } catch (error) {
      setMessage('重设密码失败')
    }
  }

  return (
    <section className={styles['section']}>
      <Header />
      <p className={`text-center mt-5 mb-3 ${styles['text-note']}`}>
        輸入你的會員電子郵件，按下"取得驗證碼"按鈕后，我们会將密碼重設指示寄送给你。
      </p>
      <div className={styles['cont']}>
        <form className={`${styles['form']}`} onSubmit={handleResetPassword}>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="email"
                className={`form-control w-100 ${styles['form-control']}`}
                placeholder="电子邮件地址"
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
            取得验证码
          </button>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="text"
                className={`form-control ${styles['form-control']}`}
                placeholder="电子邮件验证码"
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
                placeholder="密码"
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
                placeholder="确认密码"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            确定
          </button>
          {message && <p className="text-center mt-3">{message}</p>}
          <div className="row mt-2">
            <p className={`${styles['notice']}`}>
              还不是会员？
              <Link href="/member/register">加入我们</Link>。
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  )
}
