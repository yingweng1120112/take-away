import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import InformationBanner from './information_banner'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import swiper1 from '@/styles/product/menu_swiper.module.css'
import { Pagination, Navigation } from 'swiper/modules'
import Footer from '@/components/layout/footer'
import styles from '@/styles/product/information.module.css'
import pagination from '@/styles/product/pagination.module.css'
// 測試

import { loadProduct } from '@/services/product'
import { loadProducts } from '@/services/product'
import { useRouter } from 'next/router'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'
import { GoStarFill } from 'react-icons/go'
//測試
import { useCart } from '@/context/cartcontext' //購物車加的

import { jwtDecode } from 'jwt-decode'

export default function Information() {
  const router = useRouter()
  const { addToCart } = useCart() //購物車加的

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
  const [reviews, setReviews] = useState([])
  const [numberOfReviews, setNumberOfReviews] = useState(0) // 新增一個 state 來儲存評論數量

  //useState 钩子来保存用户信息
  const [userData, setuserData] = useState('')
  const [name, setName] = useState('')
  const [userid, setUserId] = useState('')

  const userId = localStorage.getItem('userKey') //抓取locasstorage裡面的userKey(值是token)
  const user = jwtDecode(userId) //解析token
  const userID = user.user_id //取得裡面的user_id
  console.log(userID)

  // 使用 useEffect 钩子在组件加载时获取用户信息
  useEffect(() => {
    // 定义一个异步函数
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3005/api/users/user-info/${userID}`
        )
        const result = await response.json()

        // console.log(result.userData);
        const userData = result.userData
        // console.log(123)
        // console.log(userData.name)
        setuserData({ ...userData })
        console.log(userData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // 调用异步函数
    fetchData()
  }, [])

  // 抓取user name的初始值
  useEffect(() => {
    if (userData.name) {
      setName(userData.name)
    }
  }, [userData.name])

  // 抓取user id的初始值
  useEffect(() => {
    if (userData.user_id) {
      setUserId(userData.user_id)
    }
  }, [userData.user_id])

  //單筆商品
  const getProduct = async (pid) => {
    const data = await loadProduct(pid)
    console.log(data)
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setProduct(data.product)
      setReviews(data.reviews)
      setNumberOfReviews(data.reviews.length) // 設置評論數量
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

  //多筆商品
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const data = await loadProducts()
    console.log(data.products)

    if (Array.isArray(data.products)) {
      console.log('設products 狀態: ', data.products)
      setProducts(data.products)
    } else {
      console.log('數據結構不符合預期:', data.products)
    }
    console.log(data.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const truncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + '...' : str
  }

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
  // 從產品對象提取屬性
  const images = []
  for (let i = 1; i <= 6; i++) {
    const pic = product[`pic${i}`]
    if (pic) {
      images.push(pic)
    }
  }

  // 再次过滤掉非图片的属性（虽然此步不必要）
  const filteredImages = images.filter(Boolean)

  //購物車加
  const handleCartClick = (product, quantity) => {
    if (product && quantity > 0) {
      addToCart({ ...product, quantity })
      console.log('Added to cart:', { ...product, quantity }) // 确认数据是否正确传递
    } else {
      console.log('Invalid product or quantity')
    }
  }

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
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={`/img/product/${img}`}
                    className="d-block w-100"
                    alt={`Product image ${index + 1}`}
                  />
                </div>
              ))}
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
              <button
                className={styles.cta}
                //購物車加的
                onClick={() => handleCartClick(product, quantity)}
              >
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
            <p>目前有 {numberOfReviews} 筆評論</p>
            <hr className={styles.hr} />
            {reviews.map((review) => (
              <div
                key={review.reviews_id}
                className={styles['product-reviews-info']}
              >
                <p className={styles['reviews-user']}>{review.user_name}說 :</p>
                <p className={styles['reviews-info']}>{review.content}</p>
                <p>
                  評分: {review.score} <GoStarFill />
                </p>
                <p className={styles['reviews-date']}>{review.time}</p>
              </div>
            ))}
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
                  <div className={`mb-3 w-100 ${styles['project']}`}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className={`fs-6 ${styles['label']}`}
                    >
                      使用者編號:
                    </label>
                    <input
                      type="text"
                      className="form-control border-bottom-1"
                      id="exampleFormControlInput1"
                      placeholder="user-name"
                      Value={userid}
                      readOnly={true}
                    />
                  </div>
                  <div className={`mb-3 w-100 ${styles['project']}`}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className={`fs-6 ${styles['label']}`}
                    >
                      評論商品編號:
                    </label>
                    <input
                      type="text"
                      className="form-control border-bottom-1"
                      id="exampleFormControlInput1"
                      placeholder="user-name"
                      Value={product.product_id}
                      readOnly={true}
                    />
                  </div>
                  <div className={`mb-3 w-100 ${styles['project']}`}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className={`fs-6 ${styles['label']}`}
                    >
                      使用者:
                    </label>
                    <input
                      type="text"
                      className="form-control border-bottom-1"
                      id="exampleFormControlInput1"
                      placeholder="user-name"
                      Value={name}
                      readOnly={true}
                    />
                  </div>
                  <div className={`mb-3 w-100 ${styles['project']}`}>
                    <label
                      htmlFor="exampleFormControlInput1"
                      className={`fs-6 ${styles['label']}`}
                    >
                      評分:
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>選擇分數</option>
                      <option value="1">1分</option>
                      <option value="2">2分</option>
                      <option value="3">3分</option>
                      <option value="4">4分</option>
                      <option value="5">5分</option>
                    </select>
                  </div>
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className={`fs-6 ${styles['label']}`}
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
      <section className={styles.recommend}>
        <div className={styles.frame}>
          <Swiper
            loop={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={100}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={swiper1['mySwiper2']}
          >
            {products.map((v, i) => (
              <SwiperSlide key={v.product_id}>
                <Link
                  href={`/product/${v.product_id}`}
                  className={styles['related-products-card']}
                >
                  <div className={styles['swiper-div']}>
                    <img
                      src={`/img/product/${v.pic1}`}
                      className={styles['swiper-img']}
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
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
