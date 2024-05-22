// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderText from '@/components/common/placeholder-text'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ProductCarousel from '@/components/shopping-cart/carousel'

export default function Home() {
  return (
    <>
      <Header />

      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">
          其他部分
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div className="container px-5">
            <Image
              src="/images/heroes/bootstrap-docs.png"
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
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
