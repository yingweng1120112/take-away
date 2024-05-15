import React, { useEffect } from 'react'
import pagination from '@/styles/product/pagination.module.css'
import styles from '@/styles/product/menu.module.css'
import MenuSwiper from '@/pages/product/menu_swiper'

export default function Menu() {
  return (
    <>
      {/* 搜尋數 */}
      <section className={`${styles.section} ${styles.search}`}>
        <div className={styles.content}>
          <div className={styles['search-results']}>
            <h5>找到 10 筆商品</h5>
            <img src="/img/menu/footprint-banner.svg" alt="" />
          </div>
          <img
            className={styles['dog-silhouette']}
            src="/img/menu/dog-silhouette.svg"
            alt=""
          />
        </div>
      </section>
      {/* 商品選單 */}
      <section className={`${styles.section} ${styles.products}`}>
        <div className={styles.content}>
          <ol className={styles['products-menu']}>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className={styles['products-card']}>
                <img src="/img/menu/related-products.jpg" alt="" />
                <p className="p">斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)</p>
                <div>
                  <button className={styles['cart-btn']}>
                    <svg
                      id="arrow-horizontal"
                      xmlns="http://www.w3.org/2000/svg"
                      width={47}
                      height={27}
                      viewBox="0 0 576 512"
                    >
                      <path
                        id="Path_10"
                        data-name="Path 10"
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        transform="translate(30)"
                      />
                    </svg>
                  </button>
                  <p className={styles.p}>$207</p>
                </div>
              </a>
            </li>
          </ol>
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
      {/* 裝飾字 */}
      <section className={styles.section}>
        {/* <img class="decorative-words-img2" src="../images/Productpage-decorative-words2.svg" alt=""> */}
        <div className={styles['decorative-words-info']}>
          <p className={styles.p}>
            商品<span className={styles.emphasize}>Take Away</span>之前
          </p>
          <p className={styles.p}>也可以順路去看看我們令人喜愛的浪浪們</p>
          <button className={styles.cta}>
            <span className={styles['hover-underline-animation']}> Go to </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={10}
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              />
            </svg>
          </button>
        </div>
      </section>
      {/* 推薦浪浪 */}
      <MenuSwiper />
    </>
  )
}
