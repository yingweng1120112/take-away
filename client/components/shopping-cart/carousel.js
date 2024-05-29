import React, { useRef, useState, useEffect } from 'react'
import { loadProducts } from '@/services/testproduct'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useCart } from '@/context/cartcontext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '@/components/shopping-cart/styles.module.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default function App() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()
  const [randomProducts, setRandomProducts] = useState([])

  const getProducts = async () => {
    const data = await loadProducts()
    // 確認資料結構是否與原始專案相符，並設置到狀態中
    if (Array.isArray(data.product)) {
      setProducts(data.product)
      //隨機播放9種商品(每次刷新頁面)(加入購物車不刷新)
      const shuffledProducts = [...data.product].sort(() => 0.5 - Math.random()).slice(0, 9);
      setRandomProducts(shuffledProducts);
    } else {
      console.error('資料結構不符', data)
    }
    console.log(data)
  }
  useEffect(() => {
    getProducts()
  }, [])
  

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
  }

  

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className={styles['myswiper']}
      >
        {randomProducts.map((product, index) => (
          <SwiperSlide key={index} className={styles['item']}>
            <div className={styles['container']}>
              <img src={`/img/product/${product.pic1}`} alt={product.name} />
              <div className={styles['text']}>
              <p className={styles['desktop']}>{truncateText(product.name, 30)}</p>
              <p className={styles['mobile']}>{truncateText(product.name, 20)}</p>
                <p>${product.price}</p>
              </div>
              <div className={styles['icon']}>
                <Link href={`/product/${product.product_id}`} passHref>
                  <a className={styles['button']}>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className={styles['iconstyle']}
                    />
                    <div className={styles['hoverstyle1']}>商品資訊</div>
                  </a>
                </Link>
                <button
                  className={styles['button']}
                  onClick={() => {
                    addToCart(product)
                  }}
                >
                  <FontAwesomeIcon
                    className={styles['iconstyle']}
                    icon={faCartPlus}
                  />
                  <div className={styles['hoverstyle2']}>新增商品</div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
