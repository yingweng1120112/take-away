import React, { useState } from 'react'
import styles from './member.module.css'
import Link from 'next/link'
import LineLogo from '@/components/icons/line-logo'
import GoogleLogo from '@/components/icons/google-logo'
import FacebookLogo from '@/components/icons/facebook-logo'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

export default function LoginForm() {
  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  })

  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    password2: '',
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
    const newErrors = { username: '', password: '', password2: '' }

    // if (user.username === '') {
    // 上面寫法常見改為下面這樣，`if(user.username)` 代表有填寫，
    // 所以反相判斷 `if(!user.username)` 代表沒填寫
    if (!user.username) {
      newErrors.username = '帳號為必填'
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

    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/login', {
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
  return (
    <main className={`form-member w-25 m-auto text-center`}>
      <h2 className="text-center mb-5">會員登入</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-12">
            <input
              className={`form-control w-100 ${styles['form-control']} `}
              type="email"
              placeholder="電子郵件地址"
              value={user.username}
              onChange={handleFieldChange}
            />
          </div>
          <div className={`${styles['error']} my-2 text-start`}>
            {errors.email}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 d-flex">
            <input
              type={showPassword ? 'text' : 'password'}
              className={`form-control w-100 ${styles['form-control']} ${styles['invalid']} `}
              placeholder="密碼"
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
            <span
              // className="ml-3"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className={`${styles['error']} my-2 text-start`}>
            請輸入密碼。
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6 text-start">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label
                className={`form-check-label  ${styles['notice']}`}
                htmlFor="gridCheck1"
              >
                保持登入狀態
              </label>
            </div>
          </div>
          <div className="col-sm-4 offset-sm-2 test-end">
            <Link
              href="/member/forget-password"
              className={`${styles['notice']}`}
            >
              忘記密碼？
            </Link>
          </div>
        </div>
        <div className="row mb-2">
          <p className={`${styles['notice']}`}>
            如登入，即代表同意本站
            <Link href="/about">隱私權政策</Link>和
            <Link href="/about">使用條款</Link>。
          </p>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          登入
        </button>

        <div className="row mt-2">
          <p className={`${styles['notice']}`}>
            還不是會員？
            <Link href="/member/register">加入我們</Link>。
          </p>
        </div>

        <div className={`mb-3 ${styles['hr-sect']}`}>快速登入</div>
        <div className="row mb-2">
          <div className="col-sm-12 text-start">
            <div className="d-flex justify-content-center">
              <LineLogo className="mx-3" />
              <GoogleLogo className="mx-3" />
              <FacebookLogo className="mx-3" />
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}
