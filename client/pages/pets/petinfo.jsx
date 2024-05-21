import { useState, useEffect } from 'react'
import styles from '@/styles/pets/petInfo.module.css'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import DefaultLayout from '@/components/layout/default-layout'

const sample = [
  {
    pet_id: '10001',
    name: '露露',
    tag: '太陽小精靈',
    age: '2',
    type: '狗狗',
    weight: '5',
    gender: '男生',
    breeds: '混種犬',
    color: '棕色',
    adopted: '0',
    state: '歡迎帶我回家',
    fixed: '0',
    microchip: '0',
    vaccine: '0',
    deworm: '0',
    personality_type: '自信型',
    sign: '雙子座',
    blue: '0',
    favorite: '0',
    pee: '0',
    skin: '0',
    disability: '0',
    blind: '0',
    adopt1: '10001-1',
    adopt2: '10001-2',
    adopt3: '10001-3',
    adopt4: '10001-4',
    phone1: '10001-1p',
    phone2: '10001-2p',
    phone3: '10001-3p',
    phone4: '10001-4p',
    reserve1: '10001-5',
    story:
      '一隻黑色混種犬在收容所中等待著遇見新主人。它的眼神充滿期待，身體卻因長時間的等待而有些疲憊。每日靜靜地注視著外面的世界，希望有人能給予它一個永遠的家，一份溫暖的愛。',
    habbit:
      '每天早晨在籠舍裡舒展身軀，期待外面的陽光。午後，它享受散步，嗅著每一個角落的氣味。夜晚，它安靜地蜷曲在角落，凝視著閃爍的星空，期待著被一雙溫暖的手接回家。',
  },
  {
    pet_id: '10002',
    name: '馬克斯',
    tag: '愛跑跳小夥伴',
    age: '3',
    type: '貓貓',
    weight: '6',
    gender: '女生',
    breeds: '米克斯',
    color: '橘色',
    adopted: '0',
    state: '歡迎帶我回家',
    fixed: '0',
    microchip: '0',
    vaccine: '0',
    deworm: '0',
    personality_type: '獨立型',
    sign: '天秤座',
    blue: '0',
    favorite: '0',
    pee: '0',
    skin: '0',
    disability: '0',
    blind: '0',
    adopt1: '10002-1',
    adopt2: '10002-2',
    adopt3: '10002-3',
    adopt4: '10002-4',
    phone1: '10002-1p',
    phone2: '10002-2p',
    phone3: '10002-3p',
    phone4: '10002-4p',
    reserve1: '10002-5',
    story:
      '在收容所的角落，一隻橘色貓貓默默等待著被領養。它的眼眸充滿渴望，身體彷彿隨時準備好迎接新的家。每天都在靜靜期盼，希望有一天能有人願意給予它一份溫暖的愛和家。',
    habbit:
      '每天清晨在陽光下舒展身軀，午後喜歡在窗邊曬太陽。它愛玩耍，追逐光點和飄動的線。晚上，它總是蜷縮在軟軟的床上，靜靜地享受安逸的夜晚，期待著明天的到來。',
  },
]

export default function PetInfo() {
  return (
    <>
      <div className={styles['commendbody']}>
        <section className={styles['pet-desc']}>
          <div className={styles['pet-img']}>
            <div className={styles['img-big']}>
              <img
                src="/img/cat_bear1.jpg"
                id="img-view"
                alt=""
                draggable="false"
              />
            </div>
            <div className={styles['img-small']}>
              <img
                src="/img/cat_bear1.jpg"
                id="img1"
                alt=""
                draggable="false"
              />
              <img
                src="/img/cat_cookie1.jpg"
                id="img2"
                alt=""
                draggable="false"
              />
              <img
                src="/img/cat_chocolate1.jpg"
                id="img3"
                alt=""
                draggable="false"
              />
              <img
                src="/img/cat_hero1.jpg"
                id="img4"
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className={styles['pet-info']}>
            <p className={styles['pet-hashtag']}>#陽光活潑</p>
            <div className={styles['pet-name']}>
              <p>歐告</p>
              <img src="/img/pets/icon_boy.png" alt="" draggable="false" />
            </div>
            <ul>
              <li>性別</li>
              <li>公斤</li>
              <li>幾歲</li>
              <li>星座</li>
              <li>毛色</li>
              <li>品種</li>
            </ul>
            <div className={styles['pet-btn']}>
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
            </div>
          </div>
        </section>

        <section className={styles['pet-story']}>
          <div className={styles['story-desc']}>
            <h1>我的故事</h1>
            <p>
              所謂寵物，關鍵是寵物需要如何解讀。我們不得不面對一個非常尷尬的事實，那就是，做好寵物這件事，可以說已經成為了全民運動。生活中，若寵物出現了，我們就不得不考慮它出現了的事實。若沒有寵物的存在，那麼後果可想而知。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。
            </p>
          </div>
          <img
            className={styles['story-img']}
            src="/img/cat_hero1.jpg"
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
                <input defaultChecked="true" type="checkbox" />
                <span>結紮</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>晶片</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>疫苗</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>定期驅蟲</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>殘疾</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>癌症</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>尿失禁</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>憂鬱</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
                <span>皮膚病</span>
              </label>
            </li>
            <li>
              <label className={styles['cl-checkbox']}>
                <input defaultChecked="true" type="checkbox" />
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
            <p>
              愛默生在不經意間這樣說過，藝術家一開始總是業餘愛好者。這句話改變了我的人生。這必定是個前衛大膽的想法。需要考慮周詳生活習慣的影響及因應對策。高士其曾經提到過，知識猶如人體的血液一樣寶貴。這激勵了我。動機，可以說是最單純的力量。
            </p>
          </div>
        </section>

        <section className={styles['pet-skill']}>
          <img src="/img/pet-info/10003/10003-5.jpg" alt="" draggable="false" />
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
                    <input defaultChecked="true" type="checkbox" />
                    <span>呼叫</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>趴下</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>等等</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>隨行</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>坐下</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>握手</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>定點尿尿</span>
                  </label>
                </td>
                <td>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="true" type="checkbox" />
                    <span>不亂吠叫</span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles['pet-score']}>
          <h1>綜合評分</h1>
          <ul>
            <li>
              <span className={styles['score-name']}>活動力</span>
              <span className={styles['score-bar']}>
                <span
                  className={`${styles['score-level']} ${styles['score-energy']}`}
                >
                  80%
                </span>
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>適應力</span>
              <span className={styles['score-bar']}>
                <span
                  className={`${styles['score-level']} ${styles['score-adapt']}`}
                >
                  80%
                </span>
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>活潑度</span>
              <span className={styles['score-bar']}>
                <span
                  className={`${styles['score-level']} ${styles['score-lively']}`}
                >
                  80%
                </span>
              </span>
            </li>
            <li>
              <span className={styles['score-name']}>親人度</span>
              <span className={styles['score-bar']}>
                <span
                  className={`${styles['score-level']} ${styles['score-affectionate']}`}
                >
                  80%
                </span>
              </span>
            </li>
          </ul>
          <div className={styles['score-btn']}>
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
          </div>
        </section>

        {/* TODO: 背景圖片 位置修改 */}
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
    </>
  )
}
