import React, { useState } from 'react'
import styles from '@/styles/faq/App.module.css'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'

export default function Accpages() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className={styles['wrapper']}>
        <div className={styles['accordion']}>
          {data.map((item, i) => (
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
      </div>
    </>
  )
}
const data = [
  {
    question: '我該如何訂購商品？',
    answer:
      '您可以在我們的網站上瀏覽我們的商品目錄，並將您感興趣的商品添加到購物車中。完成購物後，您可以進入結帳流程並提供所需的付款和送貨信息。',
    // img: new URL('https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dunsplash&psig=AOvVaw3XnweZVaFpNgRlN46d2RWT&ust=1716232817182000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj0z8y3moYDFQAAAAAdAAAAABAE')
  },
  {
    question: '我想領養毛孩，應該如何開始？',
    answer:
      '您可以在我們的網站上查看可領養的毛孩列表，然後填寫領養申請表格。我們的工作人員將與您聯繫，安排領養程序。',
  },
  {
    question: '領養毛孩需要支付費用嗎？',
    answer:
      '是的，領養費用通常包括動物的醫療檢查、疫苗接種、結紮手術等費用。這些費用有助於確保動物的健康和福祉。',
  },
  {
    question: '我該如何訂購商品？',
    answer:
      '您可以在我們的網站上瀏覽我們的商品目錄，並將您感興趣的商品添加到購物車中。完成購物後，您可以進入結帳流程並提供所需的付款和送貨信息。',
  },
  {
    question: '我該如何訂購商品？',
    answer:
      '您可以在我們的網站上瀏覽我們的商品目錄，並將您感興趣的商品添加到購物車中。完成購物後，您可以進入結帳流程並提供所需的付款和送貨信息。',
  },
]
