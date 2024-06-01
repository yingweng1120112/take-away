import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Swiper from '@/components/swiper/indexSwiper'
import styles from '@/styles/swiper/indexSwipper.module.css'
import ProductCarousel from '@/components/shopping-cart/carousel'
import IndexService from '@/components/index-service/indexservice'
import MarqueePets from '@/components/marquee-pets/marquee-pets'
import pawsStyles from '@/styles/index/paws.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles['inswipper']}><Swiper /></div>
      <div
        className="container m-0 d-flex justify-content-center"
        id="custom-cards"
      >
        <IndexService />
      </div>
      <MarqueePets />
      <div className="commend">
        <h3 className="commendtitle">產品推薦</h3>
        <ProductCarousel />
      </div>

      <img
        src="/img/pets/paws.png"
        className={pawsStyles['paws1']}
        alt=""
        draggable="false"
      />
      <img
        src="/img/pets/paws.png"
        className={pawsStyles['paws2']}
        alt=""
        draggable="false"
      />

      <style global jsx>
        {`
          .container {
            height: 50%;
            width: 100%;
          }
          .commend {
            background-image: url(/shopping-cart/commendbg.png);
            background-size: contain;
            margin: 0;
            margin-top: 100px;
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
          }
        `}
      </style>
      <Footer />
    </>
  )
}
