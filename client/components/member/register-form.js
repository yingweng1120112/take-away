import React, { useEffect, useState } from 'react'
import styles from './member.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function RegisterForm() {
  // const [showDatepicker, setShowDatepicker] = useState(false)
  // const [date, setDate] = useState('')

  // 註冊開始
  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false, // checkbox 同意會員註冊條款
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
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
      password: '',
      confirmPassword: '',
    }

    if (!user.name) {
      // newErrors.name = '姓名為必填'
    }
    if (!user.email) {
      newErrors.email = 'email為必填'
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

    // if (!user.agree) {
    //   newErrors.agree = '請先同意會員註冊條款'
    // }

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
    const res = await fetch('http://localhost:3005/api/members/raw-sql', {
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
      {/* <Header /> */}
      <main className={` w-25 m-auto text-center form-member`}>
        <h2 className="text-center mb-3">加入會員</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="name"
                className={`form-control w-100 ${styles['form-control']} ${styles['invalid']} `}
                placeholder="姓名"
              />
              <div className={`${styles['error']} my-2 text-start`}>
                {errors.name}
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type="email"
                className={`form-control w-100 ${styles['form-control']} `}
                placeholder="電子郵件地址"
                name="email"
                value={user.email}
                onChange={handleFieldChange}
              />
              <div className={`${styles['error']} my-2 text-start`}>
                {errors.email}
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control w-100 ${styles['form-control']} ${styles['invalid']} `}
                placeholder="密碼"
                name="password"
                value={user.password}
                onChange={handleFieldChange}
              />
            </div>
            <div className={`${styles['error']} my-2 text-start`}>
              {errors.password}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control w-100 ${styles['form-control']} ${styles['invalid']} `}
                placeholder="確認密碼"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleFieldChange}
              />
            </div>
            <div className={`${styles['error']} my-2 text-start`}>
              {errors.confirmPassword}
            </div>
          </div>

          <div className="row mb-2">
            <p className={`${styles['notice']}`}>
              如建立帳號，即代表同意本站
              <Link href="/about">隱私權政策</Link>和
              <Link href="/about">使用條款</Link>。
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            註冊
          </button>
          <div className="row mt-2">
            <p className={`${styles['notice']}`}>
              已經是會員了嗎？ <Link href="/member/login">登入</Link>。
            </p>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
