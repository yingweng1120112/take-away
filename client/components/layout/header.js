import { useState, React } from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { RiMenuSearchLine, RiMenuSearchFill } from 'react-icons/ri'
import { CiHeart } from 'react-icons/ci'
<<<<<<< HEAD
import { BsPersonVcard } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
=======
import { GoPerson } from 'react-icons/go'
import { CiShoppingCart } from 'react-icons/ci'
import {
  faCartShopping,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useCart } from '@/context/cartcontext'

>>>>>>> a1d7c5b20c61380779cad58801bdb62558e43942
export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const {cartItems} = useCart()
  return (
    <>
      {/* 更改容器高度 */}
      <header className="header">
        <div style={{ position: 'relative' }}>
          <div
            className="header1"
            style={{ position: 'fixed', width: '100%', 'z-index': '101' }}
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
                      <a href="http://localhost:3000/location/location">關於我們</a>
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
                  <CiShoppingCart className="shop-icon" />
                  <span className="cart-items">{cartItems.length}</span>
                  購物車
                </div>
              </Link>
              <Link href="/user">
                <div className="shop-group">
                  <BsPersonVcard className="shop-icon" />
                  登入
                </div>
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="header2">
              <div className="phone-header">
                <div className="logo">
                  <img src={`/img/index/logo-removebg-preview.png`} />
                </div>
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
                            <a href="http://localhost:3000/location/location">關於我們</a>
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
                            <a href="#">心理測驗</a>
                          </li>

                          <li>
                            <a href="#">領養流程</a>
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
                            <a href="#">常見問題</a>
                          </li>
                          <li>
                            <a href="#">客服中心</a>
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
                            <a href="#">浪浪列表</a>
                          </li>
                          <li>
                            <a href="#">追蹤日誌</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          寵物商城 <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li>
                            <a href="#">寵物商城</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a style={{ color: 'var( --deep-blue)' }}>
                          會員中心 <IoIosArrowDown style={{ float: 'right' }} />
                        </a>
                        <ul>
                          <li>
                            <a href="#">會員中心</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </ul>
                  <div className="phone-li">
                    <a
                      href="#"
                      className="phone-title"
                      style={{ 'border-radius': '0px 0px 0px 16px' }}
                    >
                      <TiShoppingCart 
                        className="title-img"
                        style={{ color: 'var( --reddish-brown)' }}
                      />
                      <a href="#">購物車</a>
                      <span className="cart-items">{cartItems.length}</span>
                    </a>
                    <a href="#" className="phone-title">
                      <CiHeart
                        className="title-img"
                        style={{ color: 'var( --reddish-brown)' }}
                      />
                      <a href="#">收藏</a>
                    </a>
                    <a
                      href="https://www.google.com.tw/"
                      className="phone-title"
                      style={{ 'border-radius': '0px 0px 19px 0px' }}
                    >
                      <BsPersonVcard
                        className="title-img"
                        style={{ color: 'var( --reddish-brown)' }}
                      />
                      <a href="#">登入</a>
                    </a>
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
