import React, { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import styles2 from '@/styles/product/menu_banner2.module.css'
import banner from '@/styles/product/menu_banner.module.css'
import pagination from '@/styles/product/pagination.module.css'
import styles from '@/styles/product/menu.module.css'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import { loadProducts } from '@/services/product'
import { useCart } from '@/context/cartcontext' //購物車加的
import { loadPetInfos } from '@/services/pets'
import Slider from '@material-ui/core/Slider'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import swiper1 from '@/styles/product/menu_swiper.module.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'

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
  //最後得到的資料
  const [total, setTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [products, setProducts] = useState([])
  const { addToCart } = useCart() //購物車加的

  //分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(12)

  const getProducts = async () => {
    const data = await loadProducts()
    console.log(data)

    //因應要分頁和查詢，所以回應改為整個data的products是data.products
    if(data.pageCount && typeof data.pageCount === 'number') {
      setPageCount(data.pageCount)
    }
    if(data.total && typeof data.total === 'number') {
      setTotal(data.total)
    }
    
    if (Array.isArray(data.products)) {
      console.log('設products 狀態: ', data.products)
      setProducts(data.products)
    } else {
      console.log('數據結構不符合預期:', data.products)
    }
    console.log(data.products)
  }

  const truncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + '...' : str
  }
  //寵物資料串連
  const [pets, setPets] = useState([])

  const getPet = async () => {
    const data = await loadPetInfos()
    console.log('從 loadPetInfos 獲取的數據:', data)
    // 確認資料結構是否與原始專案相符，並設置到狀態中

    if (Array.isArray(data)) {
      console.log('設pets 狀態: ', data)
      setPets(data)
    } else {
      console.log('數據結構不符合預期:', data)
    }
    console.log(data)
  }

  useEffect(() => {
    getProducts()
    getPet()
  }, [])

  console.log([pets])
  //上下限
  const [value, setValue] = React.useState([0, 5000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // 阻止事件冒泡以防止触发 Link 的跳转
  const handleCartClick = (event) => {
    event.stopPropagation();
    // 在这里添加购物车的处理逻辑
    console.log('Added to cart');
  };

  return (
    <>
      <Header />
      {/* Banner */}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles2['banner-life-1']}`}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles2['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>MENU</p>
            <p className={banner['menu-b']}>商品一覽</p>
          </div>
          <div className={banner['middle']}>
            <div
              className={`accordion ${banner['accordion']}`}
              id="accordionExample"
            >
              <button
                className={`accordion-button ${banner['accordion-button']}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span className={banner['middle-page-title']}>寵物商品</span>
                <span>選擇商品</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className={`accordion-body ${banner['accordion-body']}`}>
            <div className={banner['select']}>
              <div className={banner['select-left']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>商品總類</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物飼料</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物罐頭</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物用品</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物保健</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>寵物零食</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>適用物種</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>狗寶貝</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>貓寶貝</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={banner['select-right']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>排列方法</p>
                  <div className={banner['select-item']}>
                    <label className={banner['cl-checkbox']}>
                      <input
                        type="radio"
                        name="options"
                        defaultChecked={true}
                      />
                      <span>價格由低至高</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="radio" name="options" />
                      <span>價格由高至低</span>
                    </label>
                    <label className={banner['cl-checkbox']}>
                      <input type="checkbox" />
                      <span>評價最高</span>
                    </label>
                  </div>
                </div>
                <div className={banner['select-item-b']}>
                  <p className={banner['select-title']}>價格區間</p>
                  {/* 滾輪區 */}
                  <div className={banner['price-input-container']}>
                    <div className={`price-input ${banner['price-input']}`}>
                      <div className={banner['price-field']}>
                        <span>從</span>
                        <input type="number" value={value[0]} />
                        <span>~</span>
                        <input type="number" value={value[1]} />
                        <span>元</span>
                      </div>
                    </div>
                    {/* slider */}
                    <Slider
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      min={0}
                      max={5000}
                    />
                  </div>
                  <p className={banner['select-title']}> 商品搜尋 </p>
                  <div className={`mb-3 ${banner['shop-select-out']}`}>
                    <input
                      type="text"
                      className={`form-control ${banner['shop-select']}`}
                      id="exampleFormControlInput1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 搜尋數 */}
      <section className={`${styles.section} ${styles.search}`}>
        <div className={styles.content}>
          <div className={styles['search-results']}>
            <h5>找到 {total} 筆商品</h5>
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
              <Link href={`/product/${product.product_id}`}>
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
                      <button className={styles['cart-btn']} onClick={handleCartClick}>
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
                      <p className={styles.p}>{product.price}</p>
                    </div>
                  </a>
                </li>
              </Link>
            ))}
          </ol>
          <div
            className={`${pagination['wp-pagenavi']} ${styles['wp-pagenavi']}`}
            role="navigation"
          >
            <a className={pagination.first} aria-label="First Page" href="#" onClick={()=>{
              //最小頁面是1(不能小於1)
              const nextPage = page - 1 > 1 ? page - 1 : 1
              setPage(nextPage)
            }}>
              «
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
            <a className={pagination.last} aria-label="Last Page" href="#" onClick={()=>{
              //最大頁面不能大於總頁數
              const nextPage = page + 1 > 1 ? page - 1 : 1
              setPage(nextPage)
            }}>
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
      <section className={styles.recommend}>
        <div className={styles.frame}>
          <Swiper
            loop={true}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={swiper1['mySwiper2']}
          >
            {pets.map((v, i) => (
              <SwiperSlide key={v.pet_id}>
                <Link
                  href={`/pets/${v.pet_id}`}
                  className={styles['related-products-card']}
                >
                  <img
                    src={`/img/pet-info/${v.adopt1}.jpg`}
                    className={styles['swiper-img']}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  )
}
