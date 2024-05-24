import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CryptoList from './cryptolist'
import Pagi from './pagi'
import styles from '@/styles/faq/pach.module.css'

export default function Pach(totalPosts) {
  // 抓取所有資料
  const [coinData, setCoinData] = useState([])
  // 設定兩個狀態變數，一個是分頁狀態，另一個是單一分頁要顯示幾筆資料
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    setCoinData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = coinData.slice(firstPostIndex, lastPostIndex)

  return (
    <>
      <div className={styles['app']}>
        <h1 className={styles['myh1']}>Gallery</h1>
        <Pagi
          totalPosts={coinData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <CryptoList coinData={currentPosts} />
        {/*  */}
        {/* <div className={styles['crypto_list']}>
          {coinData.map((coin, index) => {
            return (
              <div className={styles['card']} key={index}>
                <div className={styles['card_image']}>
                  <img
                    className={styles['myimg']}
                    src={coin.image}
                    alt={coin.name}
                  />
                </div>
                <div className={styles['card_info']}>
                  <h2>{coin.name}</h2>
                  <h3>${coin.current_price.toLocaleString()}</h3>
                </div>
              </div>
            )
          })}
        </div> */}
        {/*  */}

        {/*  */}
        {/* <div className={styles['pagination']}>
          <button
            onClick={() =>
              setCurrentPage((prev) => {
                if (prev === 1) return prev
                return prev - 1
              })
            }
          >
            {'<'}
          </button>
          {pages.map((page, index) => {
            return (
              <button
                className={currentPage === page ? 'active' : ''}
                key={index}
                onClick={() => {
                  setCurrentPage(page)
                }}
              >
                {page}
              </button>
            )
          })}
          <button
            onClick={() =>
              setCurrentPage((prev) => {
                if (prev === pages.length) return prev
                return prev + 1
              })
            }
          >
            {'>'}
          </button>
        </div> */}
      </div>
    </>
  )
}
