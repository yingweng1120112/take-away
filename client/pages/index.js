// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Swiper from '@/components/swiper/indexSwiper'
import styles from '@/styles/swiper/indexSwipper.module.css'
import ProductCarousel from '@/components/shopping-cart/carousel'
import IndexService from '@/components/index-service/indexservice'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles['inswipper']}>
        <Swiper />
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
        <IndexService />
      </div>
      <div className="commend">
        <h3 className="commendtitle">產品推薦</h3>
        <ProductCarousel />
      </div>

      <style global jsx>
        {`
          .commend {
            background-image: url(/shopping-cart/commendbg.png);
            background-size: contain;
            margin: 0;
            height: 37rem;
          }
          .commendtitle {
            
            padding-top: 35px;
            text-align: center;
            letter-spacing: 10px;
            color: var(--deep-gray);
            font-weight: 600;
          }
          @media screen and (max-width: 414px) {
            .commend {
            height: 25rem;
          }
        `}
      </style>
      <Footer />
    </>
  )
}
