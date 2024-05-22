import { useState, useEffect } from 'react'
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
  const [data, setData] = useState({
    country: '',
    township: '',
    postcode: '',
  })

  //資料同會員
  const [recipientData, setRecipientData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const [sameAsMember, setSameAsMember] = useState(false)

  // 更新 LocalStorage
  useEffect(() => {
    window.localStorage.setItem('recipientData', JSON.stringify(recipientData))
  }, [recipientData])

  useEffect(() => {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [userInfo])

  useEffect(() => {
    if (sameAsMember) {
      setRecipientData(memberData)
    } else {
      setRecipientData({
        name: '',
        email: '',
        phone: '',
        address: '',
      })
    }
  }, [sameAsMember])

  const handleCheckboxChange = () => {
    setSameAsMember((prev) => !prev)
  }

  //配送形式
  const [delivery_type, setDeliveryType] = useState(
    userInfo.delivery_type || '宅配'
  )
  const handleDeliveryTypeChange = (e) => {
    const value = e.target.value
    setDeliveryType(value)
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      delivery_type: value,
      delivery_method: value,
    }))
  }
  //發票形式
  const [invoiceType, setInvoiceType] = useState(userInfo.invoice_type || '')
  const handleInvoiceTypeChange = (e) => {
    const value = e.target.value
    setInvoiceType(value)
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, invoice_type: value }))
  }
  // 更新 userInfo 的其他字段
  const handleInputChange = (field) => (e) => {
    const value = e.target.value
    if (sameAsMember) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [field]: value,
      }))
    } else {
      setRecipientData((prevData) => ({
        ...prevData,
        [field]: value,
      }))
    }
  }

  const handleAddressChange = (e) => {
    const detailedAddress = e.target.value
    const fullAddress = `${data.country}${data.township}${detailedAddress}`
    setRecipientData((prevData) => ({
      ...prevData,
      address: fullAddress,
    }))
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      address: fullAddress,
    }))
  }
  //登入後改這個
  // useEffect(() => {
  //   if (sameAsMember) {
  //     setRecipientData({
  //       name: userInfo.name,
  //       email: userInfo.email,
  //       phone: userInfo.phone,
  //       address: userInfo.address,
  //     })
  //   }
  // }, [sameAsMember, userInfo])

  //  按下成立訂單後從recipientData 和 userInfo 中獲得用戶填寫的資料
  const handleOrderButtonClick = async () => {
    const name = recipientData.name
    const phone = recipientData.phone
    const order_remark = userInfo.order_remark
    const delivery_method = userInfo.delivery_type
    const payment_method = userInfo.payment_method
    const recipient_address_detail = recipientData.address
    const Invoice_no = userInfo.Invoice_no
    //訂單成立時間
    const order_date = new Date().toISOString()
    //資料儲存格式
    const order = {
      order_id: 10042, //假資料(之後訂單編號也要改)
      user_id: 10001, //假資料
      order_detail_id: 10042, //假資料
      name: name,
      phone: phone,
      order_date: order_date,
      order_remark: order_remark,
      delivery_method: delivery_method,
      payment_method: payment_method,
      recipient_address_detail: recipient_address_detail,
      status: '未出貨', //預設
      Invoice_no: Invoice_no,
    }

    // 將上面保存到 localStorage 中
    //window.localStorage.setItem('order', JSON.stringify(order))

    //送到伺服器(ajax/fetch)
    const res = await fetch('http://localhost:3005/api/members/raw-sql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })

    const data = await res.json()

    console.log(data)

    alert('送到伺服器')
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
                  <select
                    name=""
                    id=""
                    value={delivery_type}
                    onChange={handleDeliveryTypeChange}
                  >
                    <option value="宅配">宅配</option>
                    <option value="超商取貨">超商取貨</option>
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
                    value={sameAsMember ? memberData.name : recipientData.name}
                    onChange={
                      sameAsMember
                        ? handleInputChange('name')
                        : handleInputChange('name')
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
                    value={
                      sameAsMember ? memberData.email : recipientData.email
                    }
                    onChange={
                      sameAsMember
                        ? handleInputChange('email')
                        : handleInputChange('email')
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
                    value={
                      sameAsMember ? memberData.phone : recipientData.phone
                    }
                    onChange={
                      sameAsMember
                        ? handleInputChange('phone')
                        : handleInputChange('phone')
                    }
                  />
                </div>
              </div>
              {/*  */}
              {delivery_type === '宅配' ? (
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
                          const fullAddress = `${country}${township}${recipientData.address.replace(
                            `${data.country}${data.township}`,
                            ''
                          )}`
                          setRecipientData((prevData) => ({
                            ...prevData,
                            address: fullAddress,
                          }))
                          setUserInfo((prevUserInfo) => ({
                            ...prevUserInfo,
                            address: fullAddress,
                          }))
                        }}
                      />
                    </div>
                    <div>
                      <input
                        placeholder="請輸入詳細地址"
                        value={recipientData.address.replace(
                          `${data.country}${data.township}`,
                          ''
                        )}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                </div>
              ) : delivery_type === '超商取貨' ? (
                <div>
                  <div>配送門市</div>
                  <div>
                    <select
                      value={userInfo.address || ''}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, address: e.target.value })
                      }
                    >
                      <option value="a">進階</option>
                      <option value="b">進階</option>
                    </select>
                  </div>
                </div>
              ) : null}

              {/*  */}
              <div>
                <div>訂單備註</div>
                <div>
                  <textarea
                    placeholder="請備註您的特殊需求"
                    value={userInfo.order_remark || ''}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, order_remark: e.target.value })
                    }
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
                    <select
                      value={userInfo.payment_method}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          payment_method: e.target.value,
                        })
                      }
                    >
                      <option value="" selected disabled>
                        請選擇付款方式
                      </option>
                      <option value="貨到付款">貨到付款</option>
                      <option value="Line Pay">Line Pay</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>發票類型</div>
                  <div>
                    <select name="" id="" onChange={handleInvoiceTypeChange}>
                      <option value="" selected="">
                        請選擇發票形式
                      </option>
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
                      value={userInfo.Invoice_no}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, Invoice_no: e.target.value })
                      }
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
                <a
                  className={styles['buttonstyle']}
                  onClick={handleOrderButtonClick}
                >
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
