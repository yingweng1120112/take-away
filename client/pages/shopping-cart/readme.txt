商品資料頁出來後   quantity.js加

import React, { useState, useEffect } from 'react'
import styles from '@/styles/product/information.module.css'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'
// 商品增減
import { useCart } from '@/context/cartcontext' //購物車加的

export default function Quantity({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart() //購物車加的

  //購物車加的
  useEffect(() => {
    if (product) {
      setProducts([{ ...product, quantity }])
    }
  }, [product, quantity])

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <>
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
            defaultValue={quantity}
            id="quantityInput"
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
          onClick={() => {
            addToCart({ ...product, quantity }) //購物車加的
          }}
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
    </>
  )
}

商品列表頁更新後   menu.js加
import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Banner from './bannerShopSelect'
import pagination from '@/styles/product/pagination.module.css'
import styles from '@/styles/product/menu.module.css'
import MenuSwiper from '@/pages/product/menu_swiper'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import { loadProducts } from '@/services/product'
import { useCart } from '@/context/cartcontext' //購物車加的

const sample = [
  {
    product_id: 10001,
    name: 'HeroMama益生菌凍乾晶球糧（犬用）',
    brand_name: 'HeroMama',
    price: 980,
    pic1: '10001-1.webp',
    pic2: '10001-2.webp',
    pic3: '10001-3.webp',
    pic4: '10001-4.webp',
    pic5: '10001-5.webp',
    pic6: '',
    type: '寵物飼料',
    species: '狗',
    information:
      '澎湃獨創三種料，挑食狗狗也愛吃！\n▸ 添加荷蘭純淨羊奶，維持成幼犬抵抗力\n▸ 生鮮雞肉X絲蘭除臭，有效降低糞便異味\n☑ 81%蛋白質源自肉類，無穀、無香料\n☑ 台灣製造，HACCP、ISO22000安心雙認證',
  },
  {
    product_id: 10002,
    name: '【拌飯犬糧 750g】阿寶吃好魚',
    brand_name: 'Abao',
    price: 460,
    pic1: '10002-1.webp',
    pic2: '10002-2.webp',
    pic3: '10002-3.webp',
    pic4: '10002-4.webp',
    pic5: '',
    pic6: '',
    type: '寵物飼料',
    species: '狗',
    information:
      '使用天然食材，無穀低敏配方，挑嘴犬必備\n採用四種深海魚類，提供豐富DHA、EPA、Omega 3\n採用加成大火雞肉，提供均衝營養攝取\n不添加任何動物副產品，不含人工防腐劑與人工香料\n特別添加鱉蛋粉，幫助保護皮膚，使毛色健康亮麗，光澤毛質。\n特別添加蝦紅素、葉黃素，照顧毛小孩眼睛，保持眼睛明亮\n富含多種胺基酸螯合礦物質，提升毛小孩對養份的吸收\n富含多種益生菌，幫助維持消化道機能與腸胃健康，增進腸內菌叢平衡',
  },
  {
    product_id: 10003,
    name: '【拌飯犬糧 750g】阿寶肉多多',
    brand_name: 'Abao',
    price: 460,
    pic1: '10003-1.webp',
    pic2: '10003-2.webp',
    pic3: '10003-3.webp',
    pic4: '10003-4.webp',
    pic5: '',
    pic6: '',
    type: '寵物飼料',
    species: '狗',
    information:
      '天然食材，無穀低敏配方，挑嘴犬必備!!\n鴨肉、火雞肉、羊肉三種鮮肉，給毛小孩均衡營養\n不添加任何動物副產品，不含人工防腐劑，與人工香料\n加入葡萄糖胺、軟骨素，有助維持關節活動力與軟骨健康\n幫助維持強壯的骨骼結構，讓毛孩能承受體重的負擔\n特別添加益生菌、鳳梨酵素，維持腸道健康，幫助消化\n專利歐盟認證乳酸小球菌，強化腸道乳酸菌叢\n富含多種胺基酸螯合礦物質，提升毛小孩對養份的吸收',
  },
]

export default function Menu() {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart() //購物車加的
  const [showAlert, setShowAlert] = useState(false)//購物車加的
  const getProducts = async () => {
    const data = await loadProducts()
    console.log(data)

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
  //購物車加提示框
  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 1000) 
  }

  return (
    <>
      <Header />
      <Banner />
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
            {products.map((product) => (
              <li key={product.product_id}>
                <a
                  href={`/product/${product.product_id}.webp`}
                  className={styles['products-card']}
                >
                  <img
                    src={`/img/product/${product.pic1}`}
                    alt={product.name}
                  />
                  <p className="p">{truncate(product.name, 17)}</p>
                  <div>
                    <button
                      className={styles['cart-btn']}
                      onClick={() => {
                        addToCart(product) //購物車加的
                      }}
                    >
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={27}
                        viewBox="0 0 576 512"
                      >
