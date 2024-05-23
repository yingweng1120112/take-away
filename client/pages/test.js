<<<<<<< HEAD
import React from 'react'
export default function Test() {
  return (
    <>
=======
import { useState } from 'react'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

export default function AuthForm() {
  // 登入狀態
  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: '',
  })

  // 登入錯誤訊息
  const [loginErrors, setLoginErrors] = useState({
    username: '',
    password: '',
    password2: '',
  })

  // 註冊狀態
  const [registerUser, setRegisterUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  // 註冊錯誤訊息
  const [registerErrors, setRegisterErrors] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    agree: '',
  })

  // 顯示密碼的核取方塊用
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    if (e.target.name in registerUser) {
      if (e.target.name === 'agree') {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.checked })
      } else {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
      }
    } else {
      setUser({ ...user, [e.target.name]: e.target.value })
    }
  }

  // 登入表單送出事件處理函式
  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { username: '', password: '', password2: '' }

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

    setLoginErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((v) => v)

    if (hasErrors) {
      return
    }

    const res = await fetch('http://localhost:3005/api/members/login', {
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
    const res = await fetch('http://localhost:3005/api/members/logout', {
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
    const res = await fetch('http://localhost:3005/api/members/check', {
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

  // 註冊表單送出事件處理函式
  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {
      name: '',
      email: '',
      username: '',
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
    if (!registerUser.username) {
      newErrors.username = '帳號為必填'
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
      <h1>會員登入表單</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{loginErrors.username} </div>
        <div>
          <label>
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{loginErrors.password}</div>
        <div>
          <label>
            確認密碼:{' '}
            <input
              type="password"
              name="password2"
              value={user.password2}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{loginErrors.password2}</div>
        <div>
          <button type="submit">登入</button>
          <button
            type="button"
            onClick={() => {
              setUser({
                username: 'ron',
                password: '123456',
                password2: '123456',
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
        </div>
      </form>
      <h1>註冊表單</h1>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label>
            姓名:{' '}
            <input
              type="text"
              name="name"
              value={registerUser.name}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{registerErrors.name}</div>
        <div>
          <label>
            Email:{' '}
            <input
              type="text"
              name="email"
              value={registerUser.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{registerErrors.email}</div>
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={registerUser.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{registerErrors.username}</div>
        <div>
          <label>
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={registerUser.password}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{registerErrors.password}</div>
        <div>
          <label>
            確認密碼:{' '}
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={registerUser.confirmPassword}
              onChange={handleFieldChange}
            />
          </label>
          <input
            type="checkbox"
            checked={showConfirmPassword}
            onChange={(e) => {
              setShowConfirmPassword(e.target.checked)
            }}
          />
          顯示密碼
        </div>
        <div className="error">{registerErrors.confirmPassword}</div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={registerUser.agree}
              onChange={handleFieldChange}
            />
            我同意網站會員註冊條款
          </label>
        </div>
        <div className="error">{registerErrors.agree}</div>
        <div>
          <button type="submit">註冊</button>
          <button
            type="button"
            onClick={() => {
              setRegisterUser({
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
              setRegisterUser({
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
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 13px;
            height: 16px;
          }
        `}
      </style>
>>>>>>> 3a688093e85610a719e424fb07bd6beb24f42c5e
    </>
  )
}
