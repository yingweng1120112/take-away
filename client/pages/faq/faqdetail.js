import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadFaqshopinfo } from '@/services/faq-shopinfo'
import styles from '@/styles/faq/faqshopping.module.css'
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaBox,
  FaReceipt,
  FaBowlFood,
  FaHand,
  FaDog,
  FaCat,
  FaGear,
  FaPaw,
} from 'react-icons/fa6'
import { IoPawOutline } from 'react-icons/io5'
import Reportform from './faqreport1'
// import Loader from '@/components/loader'
// import { useLoader } from '@/hooks/use-loader'

export default function Faqdetail() {
  const router = useRouter()
  const [faq, setFaq] = useState({
    qusetion_id: 0,
    main_question: '',
    small_question: '',
    faq_answer: '',
  })
  console.log(faq);
//   const data = faq;
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const [isLoading, setIsLoading] = useState(true)
  // const { showLoader, hideLoader, loading, delay } = useLoader()
  const getFaq = async (qid) => {
    // 開載入動畫函式
    // showLoader()

    const data = await loadFaqshopinfo(qid)
    // console.log(data)

    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是物件資料類型才設定到狀態中(最基本的保護)
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setFaq(data)
      // 關掉載入動畫，1.5s後
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { qid } = router.query
      getFaq(qid)
    }
    // eslint-disable-next-line
  }, [router.isReady])
  return (
    <>
    {/* <div className={styles['wrapper']}>
        <div className={styles['accordion']}>
          {faq.map((item, i) => (
            <div className={styles['item']}>
              <div className={styles['title']} onClick={() => toggle(i)}>
                <h4>{item.question}</h4>
                <div>{selected === i ? <IoPawOutline /> : <IoPawSharp />}</div>
              </div>
              <div className={`${styles.content} ${selected === i ? styles.show : ''}`}>
                {item.answer}
              </div>
              <div><img src=''/></div>
            </div>
          ))}
        </div>
      </div> */}
      <div className={styles['box_ans']}>
        <div className={styles['container_ans']}>
          <div className={styles['wrapper']}>
            <button className={styles['toggle']}>
              <h2>{faq.small_question}</h2>
              <FaPaw className={styles['faq_icons']} />
              {/* <i className="icon fa-solid fa-paw"></i> */}
            </button>
            <div className={styles['content_ans']}>
              <img
                className={styles['img_ans']}
                src="../img/faq/ans_dog1.jpg"
                alt=""
              />
              <p>{faq.faq_answer}</p>
            </div>
          </div>
          <div className={styles['wrapper']}>
            <button className={styles['toggle']}>
              <h2>{faq.small_question}</h2>
              <FaPaw className={styles['faq_icons']} />
              {/* <i className="icon fa-solid fa-paw"></i> */}
            </button>
            <div className={styles['content_ans']}>
              <img
                className={styles['img_ans']}
                src="../img/faq/ans_dog2.png"
                alt=""
              />
              <p>
                如果您需要更改訂單，請在提交訂單後盡快聯繫我們的客戶服務團隊。我們將竭盡所能滿足您的需求，但可能會受到訂單處理狀態的限制。
              </p>
            </div>
          </div>
          <div className={styles['wrapper']}>
            <button className={styles['toggle']}>
              有哪些付款方式？
              <FaPaw className={styles['faq_icons']} />
              {/* <i className="icon fa-solid fa-paw"></i> */}
            </button>
            <div className={styles['content_ans']}>
              <img
                className={styles['img_ans']}
                src="../img/faq/ans_dog3.jpg"
                alt=""
              />
              <p>
                我們接受信用卡（Visa、MasterCard、American
                Express等）和PayPal等常見的付款方式。在結賬過程中，您將看到所有可用的付款選項。
              </p>
            </div>
          </div>
          <div className={styles['wrapper']}>
            <button className={styles['toggle']}>
              多久可以收到我的訂單？
              <FaPaw className={styles['faq_icons']} />
              {/* <i className="icon fa-solid fa-paw"></i> */}
            </button>
            <div className={styles['content_ans']}>
              <img
                className={styles['img_ans']}
                src="../img/faq/ans_dog4.png"
                alt=""
              />
              <p>
                我們會盡快處理您的訂單並安排送貨。送貨時間取決於您所在地區以及選擇的送貨方式。一般而言，大多數訂單將在3至7個工作日內送達。
              </p>
            </div>
          </div>
          <div className={styles['wrapper']}>
            <button className={styles['toggle']}>
              如果我收到損壞的商品怎麼辦？
              <FaPaw className={styles['faq_icons']} />
              {/* <i className="icon fa-solid fa-paw"></i> */}
            </button>
            <div className={styles['content_ans']}>
              <img
                className={styles['img_ans']}
                src="../img/faq/ans_dog5.png"
                alt=""
              />
              <p>
                是的，我們提供退貨和退款服務。請在收到商品後的一定時間內與我們聯繫以了解退貨和退款政策的詳細信息。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
