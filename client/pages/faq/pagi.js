import React from 'react'
import styles from '@/styles/faq/pach.module.css'

export default function Pagi({
  totalPosts,
  PostsPerPage,
  setCurrentPage,
  currentPage,
}) {
  // 計算頁數
  const pages = []
  for (let i = 1; i < Math.ceil(totalPosts / PostsPerPage); i++) {
    pages.push(i)
  }
  return (
    <>
      <div className={styles['pagination']}>
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
      </div>
    </>
  )
}
