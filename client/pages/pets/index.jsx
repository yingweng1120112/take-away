import { useState, useEffect } from 'react'
import { loadPetInfos } from '@/services/pets'
// import { useFavs } from '@/context/FavContext'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import banner from '@/styles/banner/banner.module.css'
import styles from '@/styles/pets/petList.module.css'
import { FaHeart } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PetList() {
  // 最後得到的資料
  const [pets, setPets] = useState([])
  const [pageCount, setPageCount] = useState(1)
  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(9)

  // 查詢條件用
  const [nameLike, setNameLike] = useState('')
  const [age, setAge] = useState([])
  const [weight, setWeight] = useState([])
  const [type, setType] = useState([])
  const [state, setState] = useState([])
  const [personality_type, setPersonality_type] = useState([])
  const [gender, setGender] = useState([])

  // 收藏用
  const [favs, setFavs] = useState([])
  const [favStatus, setFavStatus] = useState({})

  const addFav = (pet) => {
    const nextFavs = [pet, ...favs]
    setFavs(nextFavs)
    console.log('收藏的寵物', nextFavs)
    toast.success(`已成功加入收藏`, {
      position: 'top-center',
      autoClose: 600,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    })
  }

  const toggleFav = (pet) => {
    setFavStatus((prevStatus) => ({
      ...prevStatus,
      [pet.pet_id]: !prevStatus[pet.pet_id],
    }))
    if (!favStatus[pet.pet_id]) {
      addFav(pet)
    } else {
      setFavs((prevFavs) => prevFavs.filter((p) => p.pet_id !== pet.pet_id))
      toast.success(`已成功移除收藏`, {
        position: 'top-center',
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      })
    }
  }

  // 物種選項陣列
  const typeOptions = ['狗狗', '貓貓']
  // 狀態選項陣列
  const stateOptions = ['歡迎帶我回家', '先暫停認養哦']
  // 測驗類別選項陣列
  const personality_typeOptions = [
    '敏感型',
    '樂天型',
    '獨立型',
    '自信型',
    '適應型',
  ]
  // 性別選項陣列
  const genderOptions = ['男生', '女生']
  // 年齡選項陣列
  const ageOptions = [
    '幼年 0 ~ 1 歲',
    '青年 2 ~ 3 歲',
    '中年 4 ~ 7 歲',
    '老年 8 歲以上',
  ]
  // 年齡範圍
  const ageRangeMap = {
    '幼年 0 ~ 1 歲': [0, 1],
    '青年 2 ~ 3 歲': [2, 3],
    '中年 4 ~ 7 歲': [4, 7],
    '老年 8 歲以上': [8, 20], // 假設 20 歲是最大值
  }
  // 體重選項陣列
  const weightOptions = ['小型 8 kg 以下', '中型 8 ~ 20 kg', '大型 20 kg 以上']
  // 體重範圍
  const weightRangeMap = {
    '小型 8 kg 以下': [0, 7],
    '中型 8 ~ 20 kg': [8, 20],
    '大型 20 kg 以上': [21, 30], // 假設 30 歲是最大值
  }

  // 加入參詢條件params物件
  const getPet = async (params) => {
    // //開載入動畫函式
    // showLoader()

    setPets([]) // 清空之前的寵物資料

    const data = await loadPetInfos(params)
    console.log('從 loadPetInfos 獲取的資料:', data)
    // 確認資料結構是否與原始專案相符，並設置到狀態中
    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    if (data.pageCount && typeof data.pageCount === 'number') {
      setPageCount(data.pageCount)
    }

    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    // 因應要分頁和查詢，所以回應改為整個data，pet_info是data.pet_infos
    if (Array.isArray(data.pet_info)) {
      console.log('設pets 狀態: ', data.pet_info)
      setPets(data.pet_info)
    }
    console.log(data.pet_info)
  }

  // 物種複選時使用
  const handleTypeChecked = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在陣列中
    if (type.includes(tv)) {
      // 如果有===>移出陣列
      const nextType = type.filter((v) => v !== tv)
      setType(nextType)
    } else {
      // 否則===>加入陣列
      const nextType = [...type, tv]
      setType(nextType)
    }
  }

  // 狀態複選時使用
  const handleStateChecked = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在陣列中
    if (state.includes(tv)) {
      // 如果有===>移出陣列
      const nextState = state.filter((v) => v !== tv)
      setState(nextState)
    } else {
      // 否則===>加入陣列
      const nextState = [...state, tv]
      setState(nextState)
    }
  }

  // 測驗類別複選時使用
  const handlePersonality_typeChecked = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在陣列中
    if (personality_type.includes(tv)) {
      // 如果有===>移出陣列
      const nextPersonality_type = personality_type.filter((v) => v !== tv)
      setPersonality_type(nextPersonality_type)
    } else {
      // 否則===>加入陣列
      const nextPersonality_type = [...personality_type, tv]
      setPersonality_type(nextPersonality_type)
    }
  }

  // 性別複選時使用
  const handleGenderChecked = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    // 判斷是否有在陣列中
    if (gender.includes(tv)) {
      // 如果有===>移出陣列
      const nextGender = gender.filter((v) => v !== tv)
      setGender(nextGender)
    } else {
      // 否則===>加入陣列
      const nextGender = [...gender, tv]
      setGender(nextGender)
    }
  }

  // FIXME: 篩選範圍
  // 年齡複選時使用
  const handleAgeChecked = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setAge([...age, value])
    } else {
      setAge(age.filter((v) => v !== value))
    }
  }

  // 體重複選時使用
  const handleWeightChecked = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setWeight([...weight, value])
    } else {
      setWeight(weight.filter((v) => v !== value))
    }
  }

  // 處理搜尋
  const handleSearch = () => {
    // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
    setPage(1)

    // 年齡篩選
    const ageRanges = age.flatMap((v) => ageRangeMap[v])
    const age_gte = ageRanges.length ? Math.min(...ageRanges) : 0
    const age_lte = ageRanges.length ? Math.max(...ageRanges) : 20
    console.log('最小年齡 ', age_gte)
    console.log('最大年齡 ', age_lte)

    // 體重篩選
    const weightRanges = weight.flatMap((v) => weightRangeMap[v])
    const weight_gte = weightRanges.length ? Math.min(...weightRanges) : 0
    const weight_lte = weightRanges.length ? Math.max(...weightRanges) : 30
    console.log('最小體重 ', weight_gte)
    console.log('最大體重 ', weight_lte)

    const params = {
      page: 1, // 每次搜尋條件後，因為頁數和筆數可能不同，所以要導向第1頁
      perpage,
      age_gte,
      age_lte,
      weight_gte,
      weight_lte,
      type,
      state,
      personality_type,
      gender,
      name_like: nameLike,
    }
    getPet(params)
  }

  // 當篩選條件變化時，觸發搜尋
  useEffect(() => {
    handleSearch()
  }, [gender, age, weight, type, state, personality_type, nameLike])

  // 樣式3: didMount + didUpdate
  useEffect(() => {
    const params = {
      page,
      perpage,
    }

    getPet(params)
  }, [page, perpage])

  useEffect(() => {
    console.log('當前的 pets 狀態:', pets) // 確認 pets 狀態更新
    console.log('現在的頁數: ', page)
  }, [pets])

  const handlePageClick = (targetPage) => {
    if (targetPage >= 1 && targetPage <= pageCount) {
      setPage(targetPage)
      scrollTo(0, 0)
      console.log(`切換到第 ${targetPage} 頁`)
    }
  }

  return (
    <>
      <Header />

      {/* banner */}
      <div
        className={`${banner['banner']} ${banner['banner-life-1']} ${styles['banner-life-1']}`}
        style={{
          backgroundImage: 'url(../../img/pets/petlist-navbar.png)',
          width: '100%',
        }}
      ></div>
      <div className={banner['banner-select']}>
        <div
          className={`${banner['banner']} ${banner['banner-life-2']} ${styles['banner-life-2']}`}
        >
          <div className={banner['left']}>
            <p className={banner['menu-a']}>PETS</p>
            <p className={banner['menu-b']}>汪汪喵喵</p>
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
                <span className={banner['middle-page-title']}>收容資訊</span>
                <span>選擇寵物</span>
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
                  <div className={banner['select-item']}>
                    {ageOptions.map((v, i) => {
                      return (
                        <label key={i} className={banner['cl-checkbox']}>
                          <input
                            type="checkbox"
                            value={v}
                            checked={age.includes(v)}
                            onChange={(e) => {
                              handleAgeChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>寵物體型</p>
                  <div className={banner['select-item']}>
                    {weightOptions.map((v, i) => {
                      return (
                        <label key={i} className={banner['cl-checkbox']}>
                          <input
                            type="checkbox"
                            value={v}
                            checked={weight.includes(v)}
                            onChange={(e) => {
                              handleWeightChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>選擇物種</p>
                  <div className={banner['select-item']}>
                    {typeOptions.map((v, i) => {
                      return (
                        <label
                          className={banner['cl-checkbox']}
                          // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
                          key={i}
                        >
                          <input
                            type="checkbox"
                            value={v}
                            checked={type.includes(v)}
                            onChange={(e) => {
                              handleTypeChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}寶貝</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className={banner['select-right']}>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>領養狀態</p>
                  <div className={banner['select-item']}>
                    {stateOptions.map((v, i) => {
                      return (
                        <label className={banner['cl-checkbox']} key={i}>
                          <input
                            type="checkbox"
                            value={v}
                            checked={state.includes(v)}
                            onChange={(e) => {
                              handleStateChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
                <div className={banner['select-item-a']}>
                  <p className={banner['select-title']}>測驗類別</p>
                  <div className={banner['select-item']}>
                    {personality_typeOptions.map((v, i) => {
                      return (
                        <label
                          className={banner['cl-checkbox']}
                          // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
                          key={i}
                        >
                          <input
                            type="checkbox"
                            value={v}
                            checked={personality_type.includes(v)}
                            onChange={(e) => {
                              handlePersonality_typeChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
                <div className={banner['select-item-b']}>
                  <p className={banner['select-title']}>性別</p>
                  <div className={banner['select-item']}>
                    {genderOptions.map((v, i) => {
                      return (
                        <label key={i} className={banner['cl-checkbox']}>
                          <input
                            type="checkbox"
                            value={v}
                            checked={gender.includes(v)}
                            onChange={(e) => {
                              handleGenderChecked(e)
                              console.log('按一下')
                            }}
                          />
                          <span>{v}</span>
                        </label>
                      )
                    })}
                  </div>
                  <p className={banner['select-title']}> 毛孩搜尋 </p>
                  <div className={`mb-3 ${banner['shop-select-out']}`}>
                    <input
                      type="text"
                      className={`form-control ${banner['shop-select']}`}
                      id="exampleFormControlInput1"
                      value={nameLike}
                      onChange={(e) => setNameLike(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['commendbody']}>
        <section className={styles['title']}>
          <h1>
            不只是給他們一個家
            <br className={styles['br-block']} />
            或許可以陪伴他們一起長大
          </h1>
        </section>

        <section className={styles['pet-card']}>
          {pets.map((v, i) => {
            return (
              <div className={styles['card']}>
                <div className={styles['card-img']}>
                  <p className={styles['state']} key={v.pet_id}>
                    {v.state}
                  </p>
                  <Link href={`/pets/${v.pet_id}`} key={v.pet_id}>
                    <img
                      key={v.pet_id}
                      src={`/img/pet-info/${v.phone1}.jpg`}
                      alt=""
                    />
                  </Link>
                  <FaHeart
                    className={`${styles['favorite']} ${
                      favStatus[v.pet_id] ? styles['active'] : ''
                    }`}
                    onClick={() => toggleFav(v)}
                  />
                </div>
                <div className={styles['pet-name']}>
                  <span key={v.pet_id}>{v.tag}</span>
                  <p key={v.pet_id}>{v.name}</p>
                  <div className={styles['pet-desc']}>
                    <span key={v.pet_id}>今年約莫 {v.age}歲</span>
                    {v.gender === '男生' ? (
                      <img
                        src="/img/pets/icon_boy.png"
                        alt=""
                        draggable="false"
                      />
                    ) : (
                      <img
                        src="/img/pets/icon_girl.png"
                        alt=""
                        draggable="false"
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        <section className={styles['wp-pagenavi']}>
          <span>
            <a className={`${styles['page']} ${styles['previouspostslink']}`}>
              <IoIosArrowBack
                onClick={() => {
                  // 最小頁面是1(不能小於1)
                  const nextPage = page - 1 > 1 ? page - 1 : 1
                  setPage(nextPage)
                  scrollTo(0, 0)
                }}
              />
            </a>
          </span>
          {page - 1 >= 1 && (
            <span>
              <a
                className={styles['page']}
                onClick={() => {
                  handlePageClick(page - 1)
                }}
              >
                {page - 1}
              </a>
            </span>
          )}
          <span
            className={styles['current']}
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            {page}
          </span>

          {page + 1 <= pageCount && (
            <span>
              <a
                className={styles['page']}
                onClick={() => {
                  handlePageClick(page + 1)
                }}
              >
                {page + 1}
              </a>
            </span>
          )}
          <span>
            <a
              className={`${styles['page']} ${styles['nextpostslink']}`}
              onClick={() => {
                // 最大頁面不能大於總頁數pageCount
                const nextPage = page + 1 < pageCount ? page + 1 : pageCount
                setPage(nextPage)
                scrollTo(0, 0)
              }}
            >
              <IoIosArrowForward />
            </a>
          </span>
        </section>

        <section className={styles['ending']}>
          <h1>
            聽說好像很好玩
            <br />
            一起看看那些
            <br className={styles['br-none']} />
            回家的朋友們都在幹嘛
          </h1>
          <Link href={'/petDiary'}>
            <button className={styles.cta}>
              <span className={styles['hover-underline-animation']}>
                {' '}
                來去看看{' '}
              </span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </Link>
        </section>

        {/* FIXME: 稍微有點跳 */}
        <section className={styles['marquee_shop']}>
          <div
            className={`${styles.marquee} ${styles['marquee--hover-pause']} ${styles['enable-animation']}`}
          >
            <ul className={styles['marquee__content']}>
              <Link href={`/product/10001`}>
                <li>
                  <img src="/img/product/10001-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10091`}>
                <li>
                  <img src="/img/product/10091-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10081`}>
                <li>
                  <img src="/img/product/10081-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10044`}>
                <li>
                  <img src="/img/product/10044-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10023`}>
                <li>
                  <img src="/img/product/10023-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10068`}>
                <li>
                  <img src="/img/product/10068-1.webp" alt="" />
                </li>
              </Link>
            </ul>

            <ul aria-hidden="true" className={styles['marquee__content']}>
              <Link href={`/product/10094`}>
                <li>
                  <img src="/img/product/10094-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10083`}>
                <li>
                  <img src="/img/product/10083-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10077`}>
                <li>
                  <img src="/img/product/10077-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10003`}>
                <li>
                  <img src="/img/product/10003-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10054`}>
                <li>
                  <img src="/img/product/10054-1.webp" alt="" />
                </li>
              </Link>
              <Link href={`/product/10011`}>
                <li>
                  <img src="/img/product/10011-1.webp" alt="" />
                </li>
              </Link>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
