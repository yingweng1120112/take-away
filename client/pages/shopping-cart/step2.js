import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import styles from '@/styles/shopping-cart/shoppingcar-step2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAnglesLeft,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons'
import { useCart } from '@/context/cartcontext'
import TWZipCode from '@/components/shopping-cart/tw-zipcode/index'

//假資料 之後連會員資料庫
const memberData = {
  name: '王小明',
  email: 'a123456789@gmail.com',
  phone: '0912345678',
  address: '台南市中西區健康路一段1號',
}

export default function Step2() {
  const {
    selectedItems,
    countSelectedTotalPrice,
    countSelectedExtraFee,
    countSelectedFinalTotalPrice,
    userInfo,
    setUserInfo,
  } = useCart()

  //地址選單狀態
  const [data, setData] = useState({})

  //資料同會員
  const [recipientData, setRecipientData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const [sameAsMember, setSameAsMember] = useState(false)

  const handleCheckboxChange = () => {
    setSameAsMember(!sameAsMember)
    if (!sameAsMember) {
      setRecipientData(memberData)
    } else {
      setRecipientData({
        name: '',
        email: '',
        phone: '',
        address: '',
      })
    }
  }
    //配送形式
    const [deliveryType, setDeliveryType] = useState('')
    const handleDeliveryTypeChange = (e) =>{
      setDeliveryType(e.target.value)
    }
    //發票形式
    const [invoiceType, setInvoiceType] = useState('')
    const handleInvoiceTypeChange = (e) => {
      setInvoiceType(e.target.value)
    }

  return (
    <>
      <Header />
      {/* 背景樣式上 */}
      <section className={`${styles['roof']} ${styles['sectionstyle']}`}>
        <img src="/shopping-cart/roof.png" alt="" />
      </section>
      {/* 步驟 */}
      <section className={`${styles['step']} ${styles['sectionstyle']}`}>
        <div className={styles['stepbg']}>
          <div className={styles['everystep']}>
            <div className={styles['nextto']}>
              <h1>1</h1>
              <h2>購物車</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>2</h1>
              <h2>填寫資料</h2>
            </div>
            <div className={styles['nextto']}>
              <h1>3</h1>
              <h2>訂單確認</h2>
            </div>
          </div>
        </div>
      </section>

      {/* 購物資料 */}
      <div className={styles['writemessage']}>
        <div
          className={`${styles['writemessageleft']} ${styles['itemscroll']}`}
        >
        {/* 會員資料 */}
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>會員資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              <div>
                <div>會員姓名</div>
                <div>
                  <input readOnly value={memberData.name} />
                </div>
              </div>
              <div>
                <div>電子郵件</div>
                <div>
                  <input readOnly value={memberData.email} />
                </div>
              </div>
              <div>
                <div>電話號碼</div>
                <div>
                  <input readOnly value={memberData.phone} />
                </div>
              </div>
              <div>
                <div>地址</div>
                <div>
                  <input readOnly value={memberData.address} />
                </div>
              </div>
            </div>
          </div>
          {/* 送貨資料 */}
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>送貨資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              {/*  */}
              <div>
                <div>送貨方式</div>
                <div>
                  <select name="" id="" onChange={handleDeliveryTypeChange}>
                    <option value="home">宅配</option>
                    <option value="cvs">超商取貨</option>
                  </select>
                </div>
              </div>
              {/*  */}
              <div className={styles['checklinestyle']}>
                <input
                  type="checkbox"
                  className={styles['checkboxstyle']}
                  checked={sameAsMember}
                  onChange={handleCheckboxChange}
                />
                <span className={styles['spanstyle']}>
                  收件人資料與會員資料相同
                </span>
              </div>
              {/*  */}
              <div>
                <div>收件人姓名</div>
                <div>
                  <input
                    placeholder="請輸入名字（請填入真實姓名以利收件）"
                    value={recipientData.name}
                    onChange={(e) =>
                      setRecipientData({
                        ...recipientData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {/*  */}
              <div>
                <div>電子郵件</div>
                <div>
                  <input
                    placeholder="請輸入信箱"
                    value={recipientData.email}
                    onChange={(e) =>
                      setRecipientData({
                        ...recipientData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {/*  */}
              <div>
                <div>電話號碼</div>
                <div>
                  <input
                    placeholder="請輸入號碼（0912345678）"
                    value={recipientData.phone}
                    onChange={(e) =>
                      setRecipientData({
                        ...recipientData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              {/*  */}
               {deliveryType === 'home'? (
                <div className={styles['writeaddress']}>
                <div>寄送地址</div>
                <div>
                  <div className={styles['writeaddressright']}>
                    <TWZipCode
                      initPostcode={data.postcode}
                      onPostcodeChange={(country, township, postcode) => {
                        setData({
                          country,
                          township,
                          postcode,
                        })
                      }}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="請輸入詳細地址"
                      value={recipientData.address}
                      onChange={(e) =>
                        setRecipientData({
                          ...recipientData,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>) : deliveryType=== 'cvs'? (
                <div>
                <div>配送門市</div>
                <div>
                  <select
                    
                  />
                </div>
              </div>
              ): null}
              
              {/*  */}
              <div>
                <div>訂單備註</div>
                <div>
                  <textarea
                    placeholder="請備註您的特殊需求"
                    defaultValue={''}
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* 付款資料及發票 */}
          <div>
            <div
              className={`${styles['carttitle']} ${styles['carttopstyle1']}`}
            >
              <div>付款資料</div>
            </div>
            <div className={styles['cartbottomstyle']}>
              <div className={styles['writebill']}>
                <div>
                  <div>付款方式</div>
                  <div>
                    <select name="" id="">
                      <option selected="">請選擇付款方式</option>
                      <option>貨到付款</option>
                      <option>Line Pay</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>發票類型</div>
                  <div>
                    <select name="" id="" onChange={handleInvoiceTypeChange}>
                      <option value="" selected="">請選擇發票形式</option>
                      <option value="paper">紙本發票</option>
                      <option value="mobile">手機載具</option>
                    </select>
                  </div>
                </div>
                {/* 邏輯運算子(&&)：當左側條件為true時，&&右側的 JSX 會被渲染，否則什麼都不渲染。(也可用三元運算子)*/}
                {invoiceType === 'mobile' && (
                  <div>
                    <input
                      defaultValue=""
                      placeholder="請輸入手機條碼（/ABC1234）"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 訂單資訊 */}
        <div className={styles['writemessageright']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle1']}`}>
            <div>訂單資訊</div>
          </div>
          <div className={styles['cartbottomstyle']}>
            <div>
              <div>小計：</div>
              <div>${countSelectedTotalPrice()}</div>
            </div>
            <div>
              <div>運費(滿899免運)：</div>
              <div>${countSelectedExtraFee()}</div>
            </div>
            <div>
              <div>優惠：</div>
              <div>$0</div>
            </div>
            <div>
              <div>合計：</div>
              <div>${countSelectedFinalTotalPrice()}</div>
            </div>
            <div className={styles['cartbutton']}>
              <Link href="/shopping-cart/step1" passHref>
                <a className={styles['buttonstyle']}>
                  <FontAwesomeIcon
                    icon={faAnglesLeft}
                    className={styles['iconstyle1']}
                  />
                  回上一步
                </a>
              </Link>
              <Link href="/shopping-cart/step3" passHref>
                <a className={styles['buttonstyle']}>
                  提交訂單
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className={styles['iconstyle2']}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 下花邊 */}
      <section className={styles['wall']}>
        <img src="/shopping-cart/wall.png" alt="" />
      </section>
      <Footer />
    </>
  )
}
