import React from 'react'
import styles from '@/styles/faq/faqpages.module.css'

export default function Faqpages({ currentPage, totalPages, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1)
  return (
    <>
      <div className={`${styles['wp-pagenavi']} ${styles['a_link_text']}`} role="navigation">
        <a
          className={`${styles['first']} ${styles['a_link_text']}`}
          aria-label="First Page"
          href="#"
          onClick={() => onPageChange(1)}
        >
          «
        </a>
        <a
          className={`${styles['previouspostslink']} ${styles['a_link_text']}`}
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
            } ${styles['a_link_text']}`}
            href="#"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        ))}
        <a
          className={`${styles['nextpostslink']} ${styles['a_link_text']}`}
          rel="next"
          aria-label="後一頁"
          href="#"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        >
          &gt;
        </a>
        <a
          className={`${styles['last']} ${styles['a_link_text']}`}
          aria-label="Last Page"
          href="#"
          onClick={() => onPageChange(totalPages)}
        >
          »
        </a>
      </div>
    </>
  )
}
