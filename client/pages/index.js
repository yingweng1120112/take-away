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
    </>
  )
}
