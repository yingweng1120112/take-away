import { useState, useEffect } from 'react'
import Link from 'next/link'
// import styles from '@/styles/faq/App.module.css'
import styles from '@/styles/faq/faqshopping.module.css'
import { loadFaqshopinfos } from '@/services/faq-shopinfo'
// import { useLoader } from '@/hooks/use-loader'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案
export default function Faqlist() {
  // 注意1: 初始值至少要空白陣列。首次render會使用初始值，對應由伺服器得到的物件陣列模型。
  // 注意2: 在應用程式執行過程中，狀態一定都要保持陣列資料類型
  const [faqs, setFaqs] = useState([])

  // 自訂控制開關載入動畫
  // 要手動控制關閉，Context要給參數close={0} `<LoaderProvider close={0}>`
  // showLoader是開載入動畫函式，hideLoader為關動畫函式(手動控制關閉才有用)
  //   const { showLoader, hideLoader, loading, delay } = useLoader()

  const getProducts = async () => {
    //開載入動畫函式
    // showLoader()

    const data = await loadFaqshopinfos()
    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data)) {
      setFaqs(data)
    }
  }

  // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      {/* <h1>商品列表頁</h1> */}
      <div className={styles['box_ans']}>
        <div className={styles['container_ans']}>
          <div className={styles['wrapper']}>
            <div className={styles['accordion']}>
              {faqs.map((item, i) => (
                <div className={styles['item']}>
                  <div className={styles['title']} onClick={() => toggle(i)}>
                    <h4 className={styles['toggle']}>{item.small_question}</h4>
                    <div className={styles['faq_icons']}>
                      {selected === i ? <IoPawOutline /> : <IoPawSharp />}
                    </div>
                  </div>
                  <div
                    className={`${styles.content_ans} ${
                      selected === i ? styles.show : ''
                    }`}
                  >
                    <img
                      className={styles['img_ans']}
                      src="../img/faq/ans_dog1.jpg"
                      alt=""
                    />
                    {item.faq_answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/my-product/${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul> */}
    </>
  )
}
