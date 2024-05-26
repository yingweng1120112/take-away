import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/user/user-order-history.module.css'
import stylespet from '@/styles/pets/petList.module.css'
import banner from '@/styles/banner/banner.module.css'
import Link from 'next/link'
import Table from 'react-bootstrap/Table'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function UserEdit() {
  const [startDate, setStartDate] = useState(null)

  const date = (date) => {
    setStartDate(date)
  }

  return (
    <section>
      <Header />
      {/* banner start*/}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PROP</p>
            <p className={banner['menu-b']}>個人資料</p>
          </div>
          <div className={banner['middle']}>
            <div
              className={`accordion ${banner['accordion']}`}
              id="accordionExample"
            >
              <button
                className={`accordion-button ${banner['accordion-button']}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className={banner['middle-page-title']}>會員中心</span>
                <span>功能選單</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${banner['accordion-body']}`}>
            <div className={`banner['select']`}>
              <div className="w-100 d-flex flex-row align-items-start">
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-info">
                    <p className={`link ${banner['select-title']}`}>個人資料</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/shopping-cart/step1">
                    <p className={`link ${banner['select-title']}`}>購物車</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-order-history">
                    <p className={`link ${banner['select-title']}`}>訂單紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/">
                    <p className={`link ${banner['select-title']}`}>浪浪收藏</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-mypet">
                    <p className={`link ${banner['select-title']}`}>我的寵物</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-reserve">
                    <p className={`link ${banner['select-title']}`}>預約紀錄</p>
                  </Link>
                </div>
                <div className={`banner['select-item-a'] w-100`}>
                  <Link href="/user/user-adopt-history">
                    <p className={`link ${banner['select-title']}`}>
                      線上認養紀錄
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      <section
        className={`${styles.user} d-flex justify-content-center align-items-center`}
      >
        <img
          className={styles['bgfeet1']}
          src={`/img/user/loading.png`}
          alt=""
        />
        <img
          className={styles['bgfeet2']}
          src={`/img/user/loading.png`}
          alt=""
        />
        <div className={`${styles.container}`}>
          <div className={`${styles.book}`}>
            <div className={`${styles.bookContainer}`}>
              <img
                className={styles.feet}
                src={`/img/user/loadfeet.png`}
                alt=""
              />
              <div className={styles.rope}></div>
              <h2>線上認養紀錄</h2>
              <Table className={`${styles['table']}`} striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">預約編號</th>
                    <th scope="col">預約時間</th>
                    <th scope="col">浪浪名稱</th>
                    <th scope="col">取消預約</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#350711</th>
                    <td>2024-01-03 11:05</td>
                    <td>小飛機</td>
                    <td>
                      <button className={styles['td-btn']}>
                        <a href="">取消</a>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#350711</th>
                    <td>2024-01-03 11:05</td>
                    <td>小飛機</td>
                    <td>
                      <button className={styles['td-btn']}>
                        <a href="">取消</a>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#350711</th>
                    <td>2024-01-03 11:05</td>
                    <td>小飛機</td>
                    <td>
                      <button className={styles['td-btn']}>
                        <a href="">取消</a>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#350711</th>
                    <td>2024-01-03 11:05</td>
                    <td>小飛機</td>
                    <td>
                      <button className={styles['td-btn']}>
                        <a href="">取消</a>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">#350711</th>
                    <td>2024-01-03 11:05</td>
                    <td>小飛機</td>
                    <td>
                      <button className={styles['td-btn']}>
                        <a href="">取消</a>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>

              {/* 換頁 */}
              <section className={stylespet['wp-pagenavi']}>
                <span>
                  <a
                    className={`${stylespet['page']} ${stylespet['previouspostslink']}`}
                  >
                    <IoIosArrowBack
                    // onClick={() => {
                    //   // 最小頁面是1(不能小於1)
                    //   const nextPage = page - 1 > 1 ? page - 1 : 1
                    //   setPage(nextPage)
                    //   scrollTo(0, 0)
                    // }}
                    />
                  </a>
                </span>
                {/* {page - 1 >= 1 && ( */}
                <span>
                  <a
                    className={stylespet['page']}
                    // onClick={() => {
                    //   handlePageClick(page - 1)
                    // }}
                  >
                    {/* {page - 1} */}1
                  </a>
                </span>
                {/* )} */}
                <span
                  className={stylespet['current']}
                  // onClick={() => {
                  //   scrollTo(0, 0)
                  // }}
                >
                  {/* {page} */}2
                </span>
                {/* {page + 1 <= pageCount && ( */}
                <span>
                  <a
                    className={stylespet['page']}
                    // onClick={() => {
                    //   handlePageClick(page + 1)
                    // }}
                  >
                    {/* {page + 1} */}3
                  </a>
                </span>
                {/* )} */}
                <span>
                  <a
                    className={`${stylespet['page']} ${styles['nextpostslink']}`}
                    // onClick={() => {
                    //   // 最大頁面不能大於總頁數pageCount
                    //   const nextPage =
                    //     page + 1 < pageCount ? page + 1 : pageCount
                    //   setPage(nextPage)
                    //   scrollTo(0, 0)
                    // }}
                  >
                    <IoIosArrowForward />
                  </a>
                </span>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </section>
  )
}
