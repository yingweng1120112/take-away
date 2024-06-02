import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenuSearchLine, RiMenuSearchFill } from 'react-icons/ri'
import { CiHeart } from 'react-icons/ci'
import { BsPersonVcard } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { TiShoppingCart } from 'react-icons/ti'
import { GoPerson } from 'react-icons/go'
import {
  faCartShopping,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import { useCart } from '@/context/cartcontext'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from "react-scroll-to-top"

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const { cartItemCount } = useCart()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()
  useEffect(() => {
    // 检查localStorage中的userKey，设置初始状态
    const userKey = localStorage.getItem('userKey')
    if (userKey) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    // 清除 localStorage 的 userKey
    localStorage.removeItem('userKey')
    setIsLoggedIn(false)
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

    // 跳轉到登陸頁面或首頁
    // window.location.href = '/'
    router.push('./')
  }

  return (
    <>
      {/* 更改容器高度 */}
      <ScrollToTop smooth className='scrollToTop' color="white" />
      <header className="header">
        <div style={{ position: 'relative' }}>
          <div
            className="header1"
            style={{ position: 'fixed', width: '100%', zIndex: '101' }}
          >
            <a href="http://localhost:3000/" className="logo">
              <img src={`/img/index/logo-removebg-preview.png`} />
            </a>
            <nav className="navbar2">
              <ul>
                <li>
                  <a>關於我們</a>
                  <ul>
                    <li>
                      <a href="http://localhost:3000/location/location">
                        關於我們
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>領養資訊</a>
                  <ul>
                    <li className="bor0">
                      <Link href="/pets/psycological-test/page1">心理測驗</Link>
                    </li>
                    <li
                      style={{ 'border-top': '2px solid var(--reddish-brown)' }}
                    >
                      <Link href="/pets/notice">領養流程</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>相關問題</a>
                  <ul>
                    <li className="bor0">
                      <Link href="/faq/faqshopping">常見問題</Link>
                    </li>
                    <li
                      style={{ 'border-top': '2px solid var(--reddish-brown)' }}
                    >
                      <Link href="/faq/chatroom">客服中心</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>領養專區</a>
                  <ul>
                    <li className="bor0">
                      <Link href="/pets">浪浪列表</Link>
                    </li>
                    <li
                      style={{ 'border-top': '2px solid var(--reddish-brown)' }}
                    >
                      <Link href="/petDiary">追蹤日誌</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>寵物商城</a>
                  <ul>
                    <li>
                      <Link href="/product/menu">寵物商城</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>會員中心</a>
                  <ul>
                    <li>
                      <Link href="/user/user-info">會員中心</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="nav-shop-group">
              <Link href="/user/shopping-cart/step1" className="shop">
                <div className="shop-group">
                  <TiShoppingCart className="shop-icon" />
                  <span className="cart-items">
                    {isLoggedIn ? cartItemCount : 0}
                  </span>
                  購物車
                </div>
              </Link>
              {isLoggedIn ? (
                <Link href="/">
                  <div className="shop-group" onClick={handleLogout}>
                    <MdLogout className="shop-icon" />
                    <span>登出</span>
                  </div>
                </Link>
              ) : (
                <Link href="/user/login">
                  <div className="shop-group">
                    <BsPersonVcard className="shop-icon" />
                    <span>登入</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="header2">
              <div className="phone-header">
                <a className="logo" href="http://localhost:3000/">
                  <img src={`/img/index/logo-removebg-preview.png`} />
                </a>
                <div onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
                  {isVisible ? (
                    <RiMenuSearchFill className="shop" />
                  ) : (
                    <RiMenuSearchLine className="shop" />
                  )}
                </div>
              </div>
              {isVisible && (
                <nav className="navbar3">
                  <ul>
                    <ul>
                      <li style={{ 'border-top': '0px' }}>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          關於我們
                          <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li>
                            <Link href="http://localhost:3000/location/location">
                              關於我們
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          領養資訊
                          <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li style={{ 'border-bottom': '2px solid #fdf7e4' }}>
                            <Link href="/pets/psycological-test/page1">
                              心理測驗
                            </Link>
                          </li>

                          <li>
                            <Link href="/pets/notice">領養流程</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          相關問題
                          <IoIosArrowDown style={{ float: 'right' }} />
                        </a>

                        <ul>
                          <li
                            style={{
                              'border-bottom': '1px solid var(--creamy-yellow)',
                            }}
                          >
                            <Link href="/faq/faqshopping">常見問題</Link>
                          </li>
                          <li>
                            <Link href="/faq/chatroom">客服中心</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          領養專區
                          <IoIosArrowDown style={{ float: 'right' }} />{' '}
                        </a>

                        <ul>
                          <li
                            style={{
                              'border-bottom': '1px solid var(--creamy-yellow)',
                            }}
                          >
                            <Link href="/pets">浪浪列表</Link>
                          </li>
                          <li>
                            <Link href="/petDiary">追蹤日誌</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          寵物商城 <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li>
                            <Link href="/product/menu">寵物商城</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          會員中心 <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li>
                            <Link href="/user/user-info">會員中心</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                  <div className="phone-li">
                    <a
                      href="/user/shopping-cart/step1"
                      className="phone-title"
                      style={{ 'border-radius': '0px 0px 0px 16px' }}
                    >
                      <div className="cart-items">
                        {isLoggedIn ? cartItemCount : 0}
                      </div>
                      <TiShoppingCart
                        className="title-img"
                        style={{
                          color: 'var( --reddish-brown)',
                          'margin-top': '20px',
                          width: '60px',
                          height: '60px',
                          position: 'relative',
                          bottom: '20px',
                        }}
                      />
                      <div
                        style={{
                          color: 'var( --reddish-brown)',
                          position: 'relative',
                          bottom: '21px',
                          fontWeight: 600,
                        }}
                      >
                        購物車
                      </div>
                    </a>
                    {/* <a href="#" className="phone-title">
                      <div className="phone-title-content">
                        <CiHeart
                          className="title-img"
                          style={{ color: 'var(--reddish-brown)' }}
                        />
                        <span>收藏</span>
                      </div>
                    </a> */}
                    {isLoggedIn ? (
                      <a href="/"
                        className="phone-title"
                        style={{ borderRadius: '0px 0px 19px 0px' }}
                        onClick={handleLogout}
                      >
                        <BsPersonVcard
                          className="title-img"
                          style={{
                            color: 'var( --reddish-brown)',
                            marginTop: '22px',
                          }}
                        />
                        <a href="/user" style={{ marginBottom: '15px' }}>
                          登出
                        </a>
                      </a>
                    ) : (
                      <a href="/user/login"
                        className="phone-title"
                        style={{ borderRadius: '0px 0px 19px 0px' }}
                      >
                        <BsPersonVcard
                          className="title-img"
                          style={{
                            color: 'var( --reddish-brown)',
                            marginTop: '22px',
                          }}
                        />
                        <a href="/user" style={{ marginBottom: '15px' }}>
                          登入
                        </a>
                      </a>
                    )}
                  </div>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
