import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '@/components/layout/header'
import banner from '@/styles/banner/banner.module.css'
import Footer from '@/components/layout/footer'
import { loadPetInfo } from '@/services/pets'
import { loadPetAction } from '@/services/pet-action'
import styles from '@/styles/pets/petInfo.module.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { BsExclamationTriangle } from 'react-icons/bs'

export default function PetInfo() {
  // 第1步. 宣告能得到動態路由pet_id的路由器
  // router.query(物件)，其中包含了pet_id屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pet_id
  const router = useRouter()

  // 預設資料欄位
  const [pet, setPet] = useState({
    pet_id: 10000,
    name: '',
    tag: '',
    age: 0,
    type: '',
    weight: 0,
    gender: '',
    breeds: '',
    color: '',
    adopted: 0,
    state: '',
    fixed: 0,
    microchip: 0,
    vaccine: 0,
    deworm: 0,
    personality_type: '',
    sign: '',
    blue: 0,
    favorite: 0,
    pee: 0,
    skin: 0,
    disability: 0,
    blind: 0,
    adopt1: '',
    adopt2: '',
    adopt3: '',
    adopt4: '',
    phone1: '',
    phone2: '',
    phone3: '',
    phone4: '',
    reserve1: '',
    story: '',
    habbit: '',
  })
  const [action, setAction] = useState({
    action_id: 10000,
    pet_id: 10000,
    sit: 0,
    down: 0,
    hand: 0,
    stay: 0,
    toilet: 0,
    bark: 0,
    respond: 0,
    follow: 0,
    mobility: 0,
    adaptability: 0,
    lively: 0,
    affectionate: 0,
  })

  // 點擊圖片
  let [imgSrc, setImgSrc] = useState(`/img/pet-info/${pet.adopt1}.jpg`)
  const [selectedImg, setSelectedImg] = useState('img1')
  const handleImageClick = (src, id) => {
    setImgSrc(src)
    setSelectedImg(id)
  }
  console.log('imgSrc', imgSrc)

  // 宣告一個指示是不是正在載入資料的狀態
  // 因為一開始一定是要載入資料，所以預設值為true
  const [isLoading, setIsLoading] = useState(true)

  // TODO: 載入動畫
  // // 自訂控制開關載入動畫
  // // 要手動控制關閉，Context要給參數close={0} `<LoaderProvider close={0}>`
  // // showLoader是開載入動畫函式，hideLoader為關動畫函式(手動控制關閉才有用)
  // const { showLoader, hideLoader, loading, delay } = useLoader()

  // 寵物資料 pet_info
  const getPet = async (pet_id) => {
    // // 開載入動畫函式
    // showLoader()

    const data = await loadPetInfo(pet_id)
    console.log('info', data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setPet(data)
      // 關掉載入動畫，1.5s後
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  // 寵物資料 pet_action
  const getAction = async (pet_id) => {
    // // 開載入動畫函式
    // showLoader()

    const data = await loadPetAction(pet_id)
    console.log('action', data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setAction(data)
      // // 關掉載入動畫，1.5s後
      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 1500)
    }
  }

  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pet_id，之後向伺服器要資料
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pet_id } = router.query
      console.log(pet_id)
      getPet(pet_id)
      getAction(pet_id)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  // 點擊圖片
  useEffect(() => {
    if (pet.adopt1) {
      setImgSrc(`/img/pet-info/${pet.adopt1}.jpg`)
    }
  }, [pet])

  return (
    <>
      <Header />
      {/* 要修改banner圖片，請直接更改下面連結 */}
      <div
        className={banner['banner']}
        style={{
          backgroundImage: 'url(../../img/pets/petinfo-navbar.png)',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>CUTE</p>
          <p className={banner['menu-b']}>有小可愛</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              {/* span為pc版文字，p為phone版文字 */}
              <span className={banner['middle-page-title']}>寵物資訊</span>
              <span>pet information</span>
              <p className={banner['middle-page-title']}>DINO</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['commendbody']}>
        <section className={styles['pet-desc']}>
          <div className={styles['pet-img']}>
            <div className={styles['img-big']}>
              <img src={imgSrc} id="img-view" alt="" draggable="false" />
            </div>
            <div className={styles['img-small']}>
              <img
                src={`/img/pet-info/${pet.adopt1}.jpg`}
                id="img1"
                alt=""
                draggable="false"
                onClick={() =>
                  handleImageClick(`/img/pet-info/${pet.adopt1}.jpg`, 'img1')
                }
                className={selectedImg === 'img1' ? styles['img-click'] : ''}
              />
              <img
                src={`/img/pet-info/${pet.adopt2}.jpg`}
                id="img2"
                alt=""
                draggable="false"
                onClick={() =>
                  handleImageClick(`/img/pet-info/${pet.adopt2}.jpg`, 'img2')
                }
                className={selectedImg === 'img2' ? styles['img-click'] : ''}
              />
              <img
                src={`/img/pet-info/${pet.adopt3}.jpg`}
                id="img3"
                alt=""
                draggable="false"
                onClick={() =>
                  handleImageClick(`/img/pet-info/${pet.adopt3}.jpg`, 'img3')
                }
                className={selectedImg === 'img3' ? styles['img-click'] : ''}
              />
              <img
                src={`/img/pet-info/${pet.adopt4}.jpg`}
                id="img4"
                alt=""
                draggable="false"
                onClick={() =>
                  handleImageClick(`/img/pet-info/${pet.adopt4}.jpg`, 'img4')
                }
                className={selectedImg === 'img4' ? styles['img-click'] : ''}
              />
            </div>
          </div>
          <div className={styles['pet-info']}>
            <p className={styles['pet-hashtag']}># {pet.tag}</p>
            <div className={styles['pet-name']}>
              <p>{pet.name}</p>
              {pet.gender === '男生' ? (
                <img src="/img/pets/icon_boy.png" alt="" draggable="false" />
              ) : (
                <img src="/img/pets/icon_girl.png" alt="" draggable="false" />
              )}
            </div>
            <ul>
              <li>{pet.gender}</li>
              <li>{pet.weight} 公斤</li>
              <li>約 {pet.age} 歲</li>
              <li>{pet.sign}</li>
              <li>{pet.color}</li>
              <li>{pet.breeds}</li>
            </ul>
            {pet.state === '歡迎帶我回家' ? (
              // 可以被領養的
              <div className={styles['pet-btn']}>
                <Link href={`/reserve/${pet.pet_id}`}>
                  <button className={styles['cta']}>
                    <span className={styles['hover-underline-animation']}>
                      預約賞寵
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
                <Link href={`/adopt/${pet.pet_id}`}>
                  <button className={styles['cta']}>
                    <span className={styles['hover-underline-animation']}>
                      線上認養
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
            ) : (
              // 暫停認養
              <div className={styles['pet-btn']}>
                <p className={styles['pet-btn-stop']}>
                  <BsExclamationTriangle className={styles['stop-icon']} />
                  我先暫停領養哦
                </p>
              </div>
            )}
          </div>
        </section>

        <section className={styles['pet-story']}>
          <div className={styles['story-desc']}>
            <h1>我的故事</h1>
            <p>{pet.story}</p>
          </div>
          <img
            className={styles['story-img']}
            src={`/img/pet-info/${pet.phone3}.jpg`}
            alt=""
            draggable="false"
          />
        </section>

        <section className={styles['pet-health']}>
          <h1>
            <img src="/img/pets/icon_pet-pill.png" alt="" draggable="false" />
            健康狀態
          </h1>
          <ul>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.fixed} type="checkbox" />
                <span>結紮</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.microchip} type="checkbox" />
                <span>晶片</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.vaccine} type="checkbox" />
                <span>疫苗</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.deworm} type="checkbox" />
                <span>定期驅蟲</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.disability} type="checkbox" />
                <span>殘疾</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.skin} type="checkbox" />
                <span>癌症</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.pee} type="checkbox" />
                <span>尿失禁</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.blue} type="checkbox" />
                <span>憂鬱</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.skin} type="checkbox" />
                <span>皮膚病</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input checked={pet.blind} type="checkbox" />
                <span>失明</span>
              </label>
            </li>
          </ul>
          <div className={styles['health-underline']} />
        </section>

        <section className={styles['pet-habit']}>
          <div>
            <h1>MY HABIT</h1>
            <h2>
              可能我也非常適合
              <br className={styles['br-mobile']} />
              你的生活習慣 <br className={styles['br-mobile']} />
              要不要考慮看看
            </h2>
            <p>{pet.habbit}</p>
          </div>
        </section>

        <section className={styles['pet-skill']}>
          <img
            src={`/img/pet-info/${pet.phone4}.jpg`}
            alt=""
            draggable="false"
          />
          <table>
            <tbody>
              <tr>
                <th colSpan={5}>
                  <h1>我的技能</h1>
                </th>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.respond} type="checkbox" />
                    <span>呼叫</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.down} type="checkbox" />
                    <span>趴下</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.stay} type="checkbox" />
                    <span>等等</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.follow} type="checkbox" />
                    <span>隨行</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.sit} type="checkbox" />
                    <span>坐下</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.hand} type="checkbox" />
                    <span>握手</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.toilet} type="checkbox" />
                    <span>定點尿尿</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input checked={action.bark} type="checkbox" />
                    <span>不亂吠叫</span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* TODO: 進度條 動畫 */}
        <section className={styles['pet-score']}>
          <h1>綜合評分</h1>
          <ul>
            <li>
              <span className={styles['score-name']}>活動力</span>
              <span className={styles['score-bar']}>
                <ProgressBar
                  completed={action.mobility}
                  maxCompleted={100}
                  bgColor="#d3ad9a"
                  labelColor="#000000"
                />
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>適應力</span>
              <span className={styles['score-bar']}>
                <ProgressBar
                  completed={action.adaptability}
                  maxCompleted={100}
                  bgColor="#d3ad9a"
                  labelColor="#000000"
                />
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>活潑度</span>
              <span className={styles['score-bar']}>
                <ProgressBar
                  completed={action.lively}
                  maxCompleted={100}
                  bgColor="#d3ad9a"
                  labelColor="#000000"
                />
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>親人度</span>
              <span className={styles['score-bar']}>
                <ProgressBar
                  completed={action.affectionate}
                  maxCompleted={100}
                  bgColor="#d3ad9a"
                  labelColor="#000000"
                />
              </span>
            </li>
          </ul>

          {pet.state === '歡迎帶我回家' ? (
            // 可以被領養的
            <div className={styles['score-btn']}>
              <Link href={`/reserve/${pet.pet_id}`}>
                <button className={styles['cta']}>
                  <span className={styles['hover-underline-animation']}>
                    預約賞寵
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
              <Link href={`/adopt/${pet.pet_id}`}>
                <button className={styles['cta']}>
                  <span className={styles['hover-underline-animation']}>
                    線上認養
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
              <Link href={`/pets/notice`}>
                <button className={styles['cta']}>
                  <span className={styles['hover-underline-animation']}>
                    <FaRegCircleQuestion className={styles['question-icon']} />
                    {'  '}領養流程
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
          ) : (
            // 暫停認養
            <div className={styles['score-btn']}>
              <p className={styles['score-btn-stop']}>
                <BsExclamationTriangle className={styles['stop-icon']} />
                我先暫停領養哦
              </p>
            <Link href={`/pets/notice`}>
              <button className={`${styles['cta']} ${styles['score-btn-adopt']}`}>
                <span className={styles['hover-underline-animation']}>
                  <FaRegCircleQuestion className={styles['question-icon']} />
                  {'  '}領養流程
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
          )}
        </section>

        <img
          src="/img/pets/paws.png"
          className={styles['paws1']}
          alt=""
          draggable="false"
        />
        <img
          src="/img/pets/paws.png"
          className={styles['paws2']}
          alt=""
          draggable="false"
        />
        <img
          src="/img/pets/paws.png"
          className={styles['paws3']}
          alt=""
          draggable="false"
        />
        <img
          src="/img/pets/background-paws.png"
          className={styles['background-paws1']}
          alt=""
          draggable="false"
        />
        <img
          src="/img/pets/background-paws.png"
          className={styles['background-paws2']}
          alt=""
          draggable="false"
        />
      </div>
      <Footer />
    </>
  )
}
