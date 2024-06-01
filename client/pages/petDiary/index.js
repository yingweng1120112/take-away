import { useState, useEffect } from 'react'
import banner from '@/styles/banner/banner.module.css' //banner style
import styles from '@/styles/petDiary/petDiarySearch.module.css' //petdiary style
import Link from 'next/link' //Link
import { loadPetsInfo } from '@/services/petDiary' //讀取全部寵物資訊
import CarouselPc from '@/components/swiper/shopSwiperPc' //電腦版輪播
import CarouselPhone from '@/components/swiper/shopSwiperPhone' //手機版輪播
import Header from '@/components/layout/header' //header
import Footer from '@/components/layout/footer' //footer
import Pages from '@/components/petDiary/pages' //分頁
import { FaVenus, FaMars } from 'react-icons/fa6' //男,女icon

export default function DiarySearch() {
  // 注意1: 初始值至少要空白陣列。首次render會使用初始值，對應由伺服器得到的物件陣列模型。
  // 注意2: 在應用程式執行過程中，狀態一定都要保持陣列資料類型

  const [petsInfo, setPetsInfo] = useState([]) //寵物資訊

  const [age, setage] = useState({ age_gte: '0', age_lte: '30' }) //年齡

  const [weightType, setWeightType] = useState({
    //年齡類別
    small: false,
    medium: false,
    large: false,
  })

  const weightSelect = (weightType) => {
    //年齡類別複選判斷(不優秀的寫法)
    if (
      weightType.small == true &&
      weightType.medium == false &&
      weightType.large == false
    ) {
      setweight({
        weight_gte: 0,
        weight_lte: 8,
      })
    } else if (
      weightType.small == false &&
      weightType.medium == true &&
      weightType.large == false
    ) {
      setweight({
        weight_gte: 8,
        weight_lte: 20,
      })
    } else if (
      weightType.small == false &&
      weightType.medium == false &&
      weightType.large == true
    ) {
      setweight({
        weight_gte: 20,
        weight_lte: 50,
      })
    } else if (
      weightType.small == true &&
      weightType.medium == true &&
      weightType.large == false
    ) {
      setweight({
        weight_gte: 0,
        weight_lte: 20,
      })
    } else if (
      weightType.small == true &&
      weightType.medium == false &&
      weightType.large == true
    ) {
      setweight({
        weight_gte: 0,
        weight_lte: 50,
      })
    } else if (
      weightType.small == false &&
      weightType.medium == true &&
      weightType.large == true
    ) {
      setweight({
        weight_gte: 8,
        weight_lte: 50,
      })
    } else if (
      weightType.small == false &&
      weightType.medium == false &&
      weightType.large == false
    ) {
      setweight({
        weight_gte: 0,
        weight_lte: 50,
      })
    }
  }

  const [weight, setweight] = useState({ weight_gte: '0', weight_lte: '50' }) //體重
  const [type, settype] = useState({ type: '' }) //寵物類別(ex.貓,狗)
  const [gender, setgender] = useState({ gender: '' }) //寵物性別
  const [nameLike, setNameLike] = useState('') //打字搜尋
  // 分頁用

  const [total, setTotal] = useState(0) // 總共幾筆資料
  const [page, setPage] = useState(1) // 目前分頁
  const [perpage, setPerpage] = useState(12) // 每頁幾筆
  const [pageCount, setPageCount] = useState(0) // 目前總分頁數

  const handlePageChange = (page) => {
    //跨頁
    setPage(page)
  }

  const getPetsInfo = async (params) => {
    //獲取寵物資訊
    const data = await loadPetsInfo(params)
    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    if (data.pageCount && typeof data.pageCount === 'number') {
      setPageCount(data.pageCount) //設定目前總分頁數
    }

    if (data.total && typeof data.total === 'number') {
      setTotal(data.total) //設定共有幾筆資料
    }

    // console.log('getPetInfo:data:')
    // console.log(data)

    if (Array.isArray(data.pets_info)) {
      setPetsInfo(data.pets_info) //設定寵物全部資訊
    }
  }

  const handleSearch = () => {
    //打字搜尋
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    setPage(1)

    const params = {
      page: 1,
      perpage,
      age_gte: age.age_gte,
      age_lte: age.age_lte,
      weight_gte: weight.weight_gte,
      weight_lte: weight.weight_lte,
      type: type.type,
      gender: gender.gender,
      name_like: nameLike,
    }

    getPetsInfo(params)
  }

  useEffect(() => {
    // 元件初次渲染之後(after)執行一次，之後不會再執行
    const params = {
      page,
      perpage,
      age_gte: age.age_gte,
      age_lte: age.age_lte,
      weight_gte: weight.weight_gte,
      weight_lte: weight.weight_lte,
      type: type.type,
      gender: gender.gender,
      name_like: nameLike,
    }
    getPetsInfo(params)
  }, [page, age, weight, type, gender, nameLike])

  return (
    <>
      <Header />
      <div>
        <div className={styles['life-container']}>
          {/* banner start*/}
          <div
            className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
          ></div>
          <div className={banner['banner-select']}>
            <div
              className={`${banner['banner']} ${styles['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
            >
              <div className={banner['left']}>
                <p className={banner['menu-a']}>LIFE</p>
                <p className={banner['menu-b']}>生活紀錄</p>
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
                    <span className={banner['middle-page-title']}>
                      日誌列表
                    </span>
                    <span>選擇日誌分類</span>
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
                      <p className={banner['select-title']}>選擇年齡</p>
                      <div
                        className={banner['select-item']}
                        value={`${age.age_gte},${age.age_lte}`}
                        onChange={(e) => {
                          const selected = e.target.value
                          if (age.age_gte == 0 && age.age_lte == 30) {
                            setage({
                              age_gte: selected.split(',')[0],
                              age_lte: selected.split(',')[1],
                            })
                          } else if (age.age_lte <= selected.split(',')[0]) {
                            setage({
                              age_gte: age.age_gte,
                              age_lte: selected.split(',')[1],
                            })
                          } else if (age.age_gte >= selected.split(',')[0]) {
                            setage({
                              age_lte: age.age_lte,
                              age_gte: selected.split(',')[0],
                            })
                          }
                        }}
                      >
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="0,1" />
                          <span>幼年 0~1</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="2,3" />
                          <span>青年 2~3</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="4,7" />
                          <span>中年 4~7</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="8,30" />
                          <span>老年 8以上</span>
                        </label>
                      </div>
                    </div>
                    <div className={banner['select-item-a']}>
                      <p className={banner['select-title']}>寵物體型</p>
                      <div
                        className={banner['select-item']}
                        onChange={(e) => {
                          const selected = e.target.value
                          const checked = e.target.checked
                          setWeightType({ ...weightType, [selected]: checked })
                          const wT = { ...weightType, [selected]: checked }
                          weightSelect(wT)
                        }}
                      >
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="small" />
                          <span>小型 8kg以下</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="medium" />
                          <span>中型 8-20kg</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="large" />
                          <span>大型 20kg以上</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={banner['select-right']}>
                    <div className={banner['select-item-a']}>
                      <p className={banner['select-title']}>適用物種</p>
                      <div
                        className={banner['select-item']}
                        onChange={(e) => {
                          const selected = e.target.value
                          const checked = e.target.checked
                          if (checked == false) {
                            if (
                              type.type == '狗狗,貓貓' &&
                              selected == '貓貓'
                            ) {
                              settype({
                                type: ['狗狗'],
                              })
                            } else if (
                              type.type == '狗狗,貓貓' &&
                              selected == '狗狗'
                            ) {
                              settype({
                                type: ['貓貓'],
                              })
                            } else {
                              settype({
                                type: [''],
                              })
                            }
                          } else {
                            if (type.type == '狗狗' && selected == '貓貓') {
                              settype({
                                type: ['狗狗', '貓貓'],
                              })
                            } else if (
                              type.type == '貓貓' &&
                              selected == '狗狗'
                            ) {
                              settype({
                                type: ['狗狗', '貓貓'],
                              })
                            } else {
                              settype({
                                type: selected,
                              })
                            }
                          }
                        }}
                      >
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="狗狗" />
                          <span>狗寶貝</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="貓貓" />
                          <span>貓寶貝</span>
                        </label>
                      </div>
                    </div>
                    <div className={banner['select-item-c']}>
                      <p className={banner['select-title']}>性別</p>
                      <div
                        className={banner['select-item']}
                        onChange={(e) => {
                          const selected = e.target.value
                          if (gender.gender == '男生' && selected == '女生') {
                            setgender({
                              type: ['男生', selected],
                            })
                          } else if (
                            gender.gender == '女生' &&
                            selected == '男生'
                          ) {
                            setgender({
                              gender: [selected, '女生'],
                            })
                          } else {
                            setgender({
                              gender: selected,
                            })
                          }
                        }}
                      >
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="男生" />
                          <span>男生</span>
                        </label>
                        <label className={banner['cl-checkbox']}>
                          <input type="checkbox" value="女生" />
                          <span>女生</span>
                        </label>
                      </div>
                      <p className={banner['select-title']}> 毛孩搜尋 </p>
                      <div className={`mb-3 ${banner['shop-select-out']}`}>
                        <input
                          type="text"
                          className={`form-control ${banner['shop-select']}`}
                          value={nameLike}
                          onChange={(e) => {
                            setNameLike(e.target.value)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* banner end */}
          <div className={styles['hidden']}>
            <div className={styles['container-main-1']}>
              <img
                src="/img/diarySearch/blueLine.svg"
                className={styles['bg-1']}
              />
              <h1 className={styles['content-word']}>
                這裡是大家細心照料的孩子們<br />要來看看嗎 ?
              </h1>
              <h1 className={styles['content-word']}>
                搜尋到{total}本日誌
              </h1>
            </div>
            <div className={styles['container-a']}>
              <div className={styles['project-list']}>
                {petsInfo.map((v, i) => {
                  return (
                    <Link href={`/petDiary/${v.pet_id}`} key={v.pet_id}>
                      <div className={styles['item']}>
                        <img
                          src={`/img/diarySearch/${v.adopt1}`}
                          alt=""
                          className={styles['project-pic']}
                        />
                        <div className={styles['project-info']}>
                          <h3>{v.name}</h3>
                          <div className={styles['cat-info']}>
                            <p
                              className={styles['desc']}
                            >{`今年約 ${v.age} 歲`}</p>
                            {v.gender === '男生' ? <FaMars /> : <FaVenus />}
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['hidden']}>
          <Pages
            currentPage={page}
            totalPages={pageCount}
            onPageChange={handlePageChange}
          />

          <div className={styles['container-main-2']}>
            <img
              src="/img/diarySearch/blueLine.svg"
              className={styles['bg-2']}
            />
            <h1 className={styles['content-word']}>
              有了狗狗和貓貓
              <br />
              那是不是就可以買一些他們的東西呢
            </h1>
            <Link href={'/product/menu'}>
              <button className={`${styles['cta']} ${styles['btn-more']}`}>
                <span className={styles['hover-underline-animation']}>
                  來去看看
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
            </Link>
          </div>
        </div>
        <div className={styles['shop-Carousel-pc']}>
          <CarouselPc />
        </div>
        <div className={styles['shop-Carousel-phone']}>
          <CarouselPhone />
        </div>
      </div>
      <Footer />
    </>
  )
}
