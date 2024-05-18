import React from 'react'
import styles from '@/styles/product/information.module.css'
import pagination from '@/styles/product/pagination.module.css'

export default function Reviews() {
  return (
    <>
      {/* 產品評論區 */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles['product-reviews-title']}>
            <img src="\img\information\product-reviews-title.svg" alt="" />
            <p>目前有 2 筆評論</p>
            <hr className={styles.hr} />
            <div className={styles['product-reviews-info']}>
              <p className={styles['reviews-user']}>小太陽說 :</p>
              <p className={styles['reviews-info']}>
                我們家很挑嘴的小土豆，原本只是抱著姑且一試的態度買看看，沒想到牠意外喜歡，會再回購。
              </p>
              <p className={styles['reviews-date']}>2024-04-10</p>
            </div>
            <div className={styles['product-reviews-info']}>
              <p className={styles['reviews-user']}>小太陽說 :</p>
              <p className={styles['reviews-info']}>
                我們家很挑嘴的小土豆，原本只是抱著姑且一試的態度買看看，沒想到牠意外喜歡，會再回購。
              </p>
              <p className={styles['reviews-date']}>2024-04-10</p>
            </div>
            {/* 分頁 */}
            <div
              className={`${pagination['wp-pagenavi']} ${styles['wp-pagenavi']}`}
              role="navigation"
            >
              <a className={pagination.first} aria-label="First Page" href="#">
                «{' '}
              </a>
              <a
                className={pagination.previouspostslink}
                rel="prev"
                aria-label="Following-page"
                href="#"
              >
                &lt;
              </a>
              <a className={pagination.page} href="#">
                1
              </a>
              <a className={pagination.page} href="#">
                2
              </a>
              <a className={pagination.page} href="#">
                3
              </a>
              {/* <span aria-current="page" class="current">5</span> */}
              <a className={pagination.page} href="#">
                4
              </a>
              <a className={pagination.page} href="#">
                5
              </a>
              <a
                className={pagination.nextpostslink}
                rel="next"
                aria-label="次のページ"
                href="#"
              >
                &gt;
              </a>
              <a className={pagination.last} aria-label="Last Page" href="#">
                {' '}
                »
              </a>
            </div>
            <hr className={styles.hr} />
          </div>
        </div>
        <img
          className={styles['dog-palm']}
          src="/img/menu/dog-palm.svg"
          alt=""
        />
        <img
          className={styles['dog-palm2']}
          src="/img/menu/dog-palm.svg"
          alt=""
        />
        <img
          className={styles['dog-palm3']}
          src="/img/menu/dog-palm.svg"
          alt=""
        />
        <img
          className={styles['dog-palm4']}
          src="/img/menu/dog-palm2.svg"
          alt=""
        />
        <img
          className={styles['dog-palm5']}
          src="/img/menu/dog-palm2.svg"
          alt=""
        />
        <img
          className={styles['dog-palm6']}
          src="/img/menu/dog-palm2.svg"
          alt=""
        />
        <img
          className={styles['dog-footprints']}
          src="/img/menu/dog-footprints.svg"
          alt=""
        />
      </section>
    </>
  )
}
