import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import InformationBanner from './information_banner'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import styles2 from '@/styles/product/info_swiper.module.css'
import Footer from '@/components/layout/footer'
import styles from '@/styles/product/information.module.css'
import pagination from '@/styles/product/pagination.module.css'
// 測試

import { loadProduct } from '@/services/product'
import { useRouter } from 'next/router'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'
//測試

export default function Information() {
  const router = useRouter()

  const [product, setProduct] = useState({
    product_id: 0,
    name: '',
    brand_name: '',
    price: 0,
    pic1: '',
    pic2: '',
    pic3: '',
    pic4: '',
    pic5: '',
    pic6: '',
    type: '',
    species: '',
    information: '',
    reviews_id: 0,
  })
  const getProduct = async (pid) => {
    const data = await loadProduct(pid)
    console.log(data)
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setProduct(data)
    } else {
      console.log('數據結構不符合預期:', data)
    }
  }
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pid } = router.query
      console.log('product_id:', pid)
      console.log('router.query:', router.query)
      getProduct(pid)
    } else {
      console.log('未找到 product_id')
    }
    // eslint-disable-next-line
  }, [router.isReady])

  //數量增減
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }
   // 从产品对象中提取图片属性
   const images = []
   for (let i = 1; i <= 6; i++) {
     const pic = product[`pic${i}`]
     if (pic) {
       images.push(pic)
     }
   }
 
   // 再次过滤掉非图片的属性（虽然此步不必要）
   const filteredImages = images.filter(Boolean)
   
  return (
    <>
      <Header />
      <InformationBanner />
      <section key={product.product_id} className={styles.section}>
        <div className={styles.content}>
          {/* 產品輪播 */}
          <div
            id="carouselExampleIndicators"
            className="productimg carousel slide"
            style={{ height: 'auto' }}
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
            {images.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={`/img/product/${img}`}
                className="d-block w-100"
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
              {/* <div className="carousel-item">
                <img
                  src={`/img/product/${product.pic2}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/img/product/${product.pic3}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/img/product/${product.pic4}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/img/product/${product.pic5}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/img/product/${product.pic}`}
                  className="d-block w-100"
                  alt="..."
                />
              </div> */}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- 輪播照片縮圖 --> */}
          <div className="preview">
          {images.map((img, index) => (
            <button
              key={index}
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : ''}
              aria-label={`Slide ${index + 1}`}
            >
              <img
                style={{ width: '100%' }}
                src={`/img/product/${img}`}
                alt={`Slide ${index + 1}`}
                aria-label={`Slide ${index + 1}`}
              />
            </button>
          ))}
            {/* <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              className="active"
              aria-current="true"
              aria-label="Slide 2"
            >
              <img
                style={{ width: '100%' }}
                src="\img\information\product-img2.webp"
                alt=""
                aria-label="Slide 2"
              />
            </button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              className="active"
              aria-current="true"
              aria-label="Slide 3"
            >
              <img
                style={{ width: '100%' }}
                src="\img\information\product-img3.webp"
                alt=""
                aria-label="Slide 3"
              />
            </button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              className="active"
              aria-current="true"
              aria-label="Slide 4"
            >
              <img
                style={{ width: '100%' }}
                src="\img\information\product-img4.webp"
                alt=""
                aria-label="Slide 4"
              />
            </button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              className="active"
              aria-current="true"
              aria-label="Slide 5"
            >
              <img
                style={{ width: '100%' }}
                src="\img\information\product-img5.webp"
                alt=""
                aria-label="Slide 5"
              />
            </button>
            <button
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              className="active"
              aria-current="true"
              aria-label="Slide 6"
            >
              <img
                style={{ width: '100%' }}
                src="\img\information\product-img6.webp"
                alt=""
                aria-label="Slide 6"
              />
            </button> */}
          </div>
          {/* 產品標題區 */}
          <div className={styles['product-info']}>
            <div className={styles['product-title']}>
              <h1>{product.name}</h1>
              <h2>售價 : ${product.price}</h2>
            </div>
            <div className={styles['product-quantity']}>
              <h2>數量:</h2>
              <div className={`input-group ${styles['input-group']}`}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="minusBtn"
                  onClick={decreaseQuantity}
                >
                  <GrFormSubtract />
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  id="quantityInput"
                  onChange={handleChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="plusBtn"
                  onClick={increaseQuantity}
                >
                  <GrFormAdd />
                </button>
              </div>
              <button className={styles.cta}>
                <span className={styles['hover-underline-animation']}>
                  {' '}
                  加入購物車{' '}
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={20}
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
            </div>
          </div>
          <div className={styles['footprint-banner']}>
            <img src="\img\information\footprint-banner.svg" alt="" />
          </div>
          {/* 產品內容區 */}
          <div className={styles['product-description-title']}>
            <img src="\img\information\product-description-title.svg" alt="" />
            <p className={styles.p}>{product.information}</p>
          </div>
        </div>
      </section>
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
      {/* 我的評論 */}
      <section className={`${styles.section} ${styles.comment}`}>
        <div className={styles.content}>
          <div className="accordion w-100" id="accordionExample">
            <div className={`accordion-item ${styles['product-my-comment']}`}>
              <div className="accordion-header w-100">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <img src="\img\information\my-comment.svg" alt="" />
                </button>
              </div>
              <hr className={styles.hr} />
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse w-100"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles['accordion-body']}`}>
                <div className={styles['my-comment-form']}>
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fs-6"
                    >
                      使用者:
                    </label>
                    <input
                      type="text"
                      className="form-control border-bottom-1"
                      id="exampleFormControlInput1"
                      placeholder="user-name"
                      Value={'小金黃'}
                      readOnly={true}
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label fs-6"
                    >
                      我的評論:
                    </label>
                    <textarea
                      className="form-control border-bottom-1"
                      style={{ resize: 'none' }}
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={
                        '我們家很挑嘴的小土豆，原本只是抱著姑且一試的態度買看看，沒想到牠意外喜歡，會再回購。'
                      }
                      readOnly={false}
                    />
                  </div>
                </div>
                <button className={styles.cta}>
                  <span className={styles['hover-underline-animation']}>
                    Release
                  </span>
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
            </div>
          </div>
        </div>
        <img
          className={styles['decorative-words-img']}
          src="/img/information/Productpage-decorative-words.png"
          alt=""
        />
      </section>
      {/* 裝飾字 */}
      <section className={styles['decorative-area']}>
        <div className={`${styles.content} ${styles['decorative-words-info']}`}>
          <p>Other Products</p>
          <p>其他你也許有可能會喜歡的商品再看一眼吧</p>
        </div>
      </section>
      {/* 產品輪播 */}
      <section className={styles2.recommend}>
        <div className={styles2.frame}>
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles2['mySwiper']}
          >
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles2.info}>
              <div className={styles2['info_swiper']}>
                <a href="#" className={styles2['products-card']}>
                  <img src="/img/menu/related-products.jpg" alt="" />
                  <p className={styles2.p}>
                    斑尼菲 無穀狗糧 鹿肉關節450克(狗飼料)
                  </p>
                  <div>
                    <button className={styles2['cart-btn']}>
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
                    <p className={styles2.p}>$207</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        /* 產品輪播 */
        .productimg {
          width: 100%;
        }

        /* 輪播照片縮圖 */
        .preview {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: space-between;
          margin-top: 0.625rem;
        }

        .preview button {
          width: 15%;
          height: auto;
          background: var(--white);
          border: none;
        }
        @media screen and (min-width: 1025px) {
          .productimg {
            width: 60%;
          }
          /* 輪播照片縮圖 */
          .preview {
            width: 35%;
            margin-left: 5%;
            margin-top: 0%;
          }
          .preview button {
            width: 46%;
            height: auto;
          }
        }
      `}</style>
    </>
  )
}
