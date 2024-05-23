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
      <div    className={styles['inswipper']}>
      <Swiper />
    </div>

      {/* <div className="container col-xxl-10 px-1 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/images/heroes/bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
    <IndexService />


      <div className="commend">
        <h3 className="commendtitle">產品推薦</h3>
        <ProductCarousel />
      </div>

      <style global jsx>
        {`
          .container{
            height:800px
          }
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
