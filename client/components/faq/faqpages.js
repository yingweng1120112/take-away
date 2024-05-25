import React from 'react'
import styles from '@/styles/faq/faqpages.module.css'

export default function Faqpages({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1)
  return (
    <>
      <div className={styles['wp-pagenavi']} role="navigation">
        <a
          className={styles['first']}
          aria-label="First Page"
          href="#"
          onClick={() => onPageChange(1)}
        >
          «
        </a>
        <a
          className={styles['previouspostslink']}
          rel="prev"
          aria-label="前一頁"
          href="#"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        >
          &lt;
        </a>
        {pages.map((page) => (
          <a
            key={page}
            className={`${styles.page} ${
              page === currentPage ? styles.current : ''
            }`}
            href="#"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        ))}
        <a
          className={styles['nextpostslink']}
          rel="next"
          aria-label="後一頁"
          href="#"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        >
          &gt;
        </a>
        <a
          className={styles['last']}
          aria-label="Last Page"
          href="#"
          onClick={() => onPageChange(totalPages)}
        >
          »
        </a>
      </div>
      {/* <div className={styles.pagination}>
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ''
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div> */}
    </>
  )
}
