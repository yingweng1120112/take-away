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
import { loadUserInfoSpecific } from '@/services/user-info'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
import { Modal, Button } from 'react-bootstrap'
import router from 'next/router'
import { jwtDecode } from 'jwt-decode'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Step2() {
  const {
    cartItems,
    setCartItems,
    selectedItems,
    setSelectedItems,
    countSelectedTotalPrice,
    countSelectedExtraFee,
    countSelectedFinalTotalPrice,
    userInfo,
    setUserInfo,
  } = useCart()
  const [userID, setUserID] = useState(null)
  const [userData, setUserData] = useState('')

  // 获取 userID
  useEffect(() => {
    const userId = localStorage.getItem('userKey') // 抓取 localStorage 里面的 userKey（值是 token）
    if (userId) {
      const user = jwtDecode(userId) // 解析 token
      const userID = user.user_id // 取得里面的 user_id
      console.log(userID)
      setUserID(userID) // 存储 userID 到状态
    }
  }, [])

  // 使用 useEffect 钩子在组件加载时获取用户信息
  useEffect(() => {
    // 定义一个异步函数
    const fetchData = async () => {
      if (userID) {
        // 确保 userID 已经被设置
        try {
          const response = await fetch(
            `http://localhost:3005/api/users/user-info/${userID}`
          )
          const result = await response.json()

          // 假设后端返回的结果格式为 { userData: {...} }
          setUserData(result.userData)
          console.log(result.userData)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    }
    fetchData()
  }, [userID]) // 依赖 userID 状态

  //初始值
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

  //驗證提示
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  // 更新 LocalStorage
  useEffect(() => {
    window.localStorage.setItem('recipientData', JSON.stringify(recipientData))
  }, [recipientData])

  useEffect(() => {
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }, [userInfo])

  useEffect(() => {
    if (sameAsMember) {
      setRecipientData(userInfo)
    } else {
      setRecipientData({
        name: '',
        email: '',
        phone: '',
        address: '',
      })
    }
  }, [sameAsMember, userInfo])

  const handleCheckboxChange = () => {
    setSameAsMember((prev) => !prev)
  }

  //配送形式
  const [delivery_type, setDeliveryType] = useState('宅配')
  const handleDeliveryTypeChange = (e) => {
    const value = e.target.value
    setDeliveryType(value)
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      delivery_type: value,
      delivery_method: value,
    }))
  }
  useEffect(() => {
    // 初始化 delivery_type
    if (!userInfo.delivery_type) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        delivery_type: '宅配',
        delivery_method: '宅配',
      }))
    }
  }, [setUserInfo, userInfo.delivery_type])
  useEffect(() => {
    console.log("Current delivery_type:", userInfo.delivery_type);
  }, [userInfo.delivery_type]);

  //711門市
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3005/api/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )
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
  //地址合併為完整地址
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
  //提示

  //登入
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem('user_id')
      if (userId) {
        const data = await loadUserInfoSpecific(userId)
        console.log('从 loadUserInfoSpecific 获取的数据:', data)
        setUserInfo(data)
      } else {
        console.error('未找到用户ID')
      }
    }
    fetchUserInfo()
  }, [])

  useEffect(() => {
    if (sameAsMember) {
      setRecipientData({
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address_detail,
      })
    }
  }, [sameAsMember, userInfo])

  //  按下成立訂單後從recipientData 和 userInfo 中獲得用戶填寫的資料
  //表單驗證
  const validateForm = () => {
    let addressValue = '' // 儲存地址值
    let addressFieldName = '' // 儲存地址欄位名稱
    if (userInfo.delivery_type === '宅配') {
      addressValue = userInfo.address
      addressFieldName = '寄送地址'
    } else if (userInfo.delivery_type === '超商取貨') {
      addressValue = store711.storename
      addressFieldName = '配送門市'
    }
    const requiredFields = [
      { name: '收件人姓名', value: userData.name || recipientData.name },
      { name: '電子郵件', value: userData.email || recipientData.email },
      { name: '電話號碼', value: userData.phone || recipientData.phone },
      { name: addressFieldName, value: addressValue },
      { name: '付款方式', value: userInfo.payment_method },
      { name: '發票類型', value: userInfo.invoice_type },
    ]
    // 手機條碼的驗證只在選擇手機載具時執行
    if (userInfo.invoice_type === 'mobile') {
      requiredFields.push({ name: '手機條碼', value: userInfo.Invoice_no })
    }
    if (!addressValue) {
      setModalMessage(`請填寫${addressFieldName}`)
      setShowModal(true)
      return false
    }
    for (let field of requiredFields) {
      if (!field.value) {
        setModalMessage(`請填寫 ${field.name}`)
        setShowModal(true)
        return false
      }
    }
    return true
  }

  //0529 資料格式
  // 存储产品信息到localStorage
  function saveToLocalStorage(products) {
    localStorage.setItem('selectedItems', JSON.stringify(products))
  }

  // 从localStorage中获取产品信息
  function getFromLocalStorage() {
    const productsString = localStorage.getItem('selectedItems')
    if (productsString) {
      return JSON.parse(productsString)
    }
    return []
  }

  const handleOrderButtonClick = async (event) => {
    event.preventDefault()
    if (!validateForm()) return
    const name = recipientData.name
    const phone = recipientData.phone
    const order_remark = userInfo.order_remark
    const delivery_method = userInfo.delivery_type
    const payment_method = userInfo.payment_method
    const recipient_address_detail = recipientData.address
    const Invoice_no = userInfo.Invoice_no

    // 訂單成立時間
    const now = new Date()
    const taipeiTimeString = now.toLocaleString('sv-SE', {
      timeZone: 'Asia/Taipei',
    })
    const [datePart, timePart] = taipeiTimeString.split(' ')
    const order_date = `${datePart}T${timePart}.000Z`

    // 從 localStorage 中獲取產品信息
    const order_detail = getFromLocalStorage().map((selectedItems) => ({
      product_id: selectedItems.product_id,
      amount: selectedItems.qty,
      unit_price: selectedItems.price,
      totail_price: selectedItems.price,
    }))

    let order_history // 提升 order_history 變量的聲明

    try {
      // 发送订单历史数据到后端创建订单历史
      const resHistory = await fetch(
        'http://localhost:3005/api/order_history',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userData.user_id,
            name: userData.name || recipientData.name,
            phone: userData.phone || recipientData.phone,
            order_date: order_date,
            order_remark: order_remark,
            delivery_method: delivery_method,
            payment_method: payment_method,
            recipient_address_detail:
              recipient_address_detail || store711.storename,
            status: '未出貨', // 預設
            Invoice_no: Invoice_no,
          }),
        }
      )

      if (!resHistory.ok) {
        throw new Error('Failed to create order history')
      }

      const dataHistory = await resHistory.json()
      const order_id = dataHistory.order_id // 获取生成的 order_id

      // 构建订单详情数据
      const orderDetails = getFromLocalStorage().map((selectedItem) => ({
        order_id, // 将生成的 order_id 包含在订单详情数据中
        product_id: selectedItem.product_id,
        amount: selectedItem.qty,
        unit_price: selectedItem.price,
        totail_price: selectedItem.price * selectedItem.qty,
      }))

      // 发送订单详情数据到后端创建订单详情
      const resDetail = await fetch('http://localhost:3005/api/order_detail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails), // 这里传递订单详情数据
      })

      if (!resDetail.ok) {
        throw new Error('Failed to create order detail')
      }

      // 根據付款方式選擇不同的跳轉路徑
    if (payment_method === '信用卡付款') {
      const totalAmount = countSelectedFinalTotalPrice(); // 获取总金额
      toast.warning('即將跳轉到付款頁面', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });

      setTimeout(() => {
        const url = `http://localhost:3005/api/ec?amount=${totalAmount}`;
        window.location.href = url;
      }, 2000); // 2秒后跳转
    } else {
      toast.success('訂單建立成功', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Slide,
      });
      router.push('/user/shopping-cart/step3');
    }
  } catch (error) {
    console.error('Error creating order:', error);
    toast.error('訂單建立失敗', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  }

    // 在這裡存儲資料到 Local Storage 和 Session Storage 中
    // localStorage.setItem('order_history', JSON.stringify(order_history))
    // sessionStorage.setItem('order_detail', JSON.stringify(order_detail))
  }

  return (
    <>
      <Header />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            確定
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <input readOnly value={userData.name} />
                </div>
              </div>
              <div>
                <div>電子郵件</div>
                <div>
                  <input readOnly value={userData.email} />
                </div>
              </div>
              <div>
                <div>電話號碼</div>
                <div>
                  <input readOnly value={userData.phone} />
                </div>
              </div>
              <div>
                <div>地址</div>
                <div>
                  <input readOnly value={userData.address_detail} />
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
                <div>
                  送貨方式<span className={styles['need']}>*</span>
                </div>
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
                <div>
                  收件人姓名<span className={styles['need']}>*</span>
                </div>
                <div>
                  <input
                    placeholder="請輸入名字（請填入真實姓名以利收件）"
                    value={sameAsMember ? userData.name : recipientData.name}
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
                <div>
                  電子郵件<span className={styles['need']}>*</span>
                </div>
                <div>
                  <input
                    placeholder="請輸入信箱"
                    value={sameAsMember ? userData.email : recipientData.email}
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
                <div>
                  電話號碼<span className={styles['need']}>*</span>
                </div>
                <div>
                  <input
                    placeholder="請輸入號碼（0912345678）"
                    value={sameAsMember ? userData.phone : recipientData.phone}
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
                  <div>
                    寄送地址<span className={styles['need']}>*</span>
                  </div>
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
                          const fullAddress = `${
                            country || '' // 添加條件確保 country 存在
                          }${township || ''}${
                            recipientData && recipientData.address // 添加條件確保 recipientData 和 recipientData.address 存在
                              ? recipientData.address.replace(
                                  `${data.country || ''}${data.township || ''}`, // 添加條件確保 data.country 和 data.township 存在
                                  ''
                                )
                              : ''
                          }`
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
                        value={
                          sameAsMember
                            ? userData.address_detail || ''
                            : recipientData && recipientData.address
                            ? recipientData.address
                              ? recipientData.address.replace(
                                  `${data.country || ''}${data.township || ''}`, // 确保 data.country 和 data.township 存在
                                  ''
                                )
                              : '' // 确保 recipientData.address 存在并非空字符串
                            : ''
                        }
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                </div>
              ) : delivery_type === '超商取貨' ? (
                <div>
                  <div>
                    配送門市<span className={styles['need']}>*</span>
                  </div>
                  <div>
                    <button
                      className={styles['cvsbtn']}
                      value={userInfo.address || ''}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, address: e.target.value })
                      }
                      onClick={() => {
                        openWindow()
                      }}
                    >
                      請選擇門市
                    </button>
                    <br />
                    <input
                      className={styles['cvsinput']}
                      type="text"
                      value={store711.storename}
                      disabled
                    />
                    <br />
                    <input
                      className={styles['cvsinput']}
                      type="text"
                      value={store711.storeaddress}
                      disabled
                    />
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
                  <div>
                    付款方式<span className={styles['need']}>*</span>
                  </div>
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
                      <option value="信用卡付款">信用卡付款</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    發票類型<span className={styles['need']}>*</span>
                  </div>
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
              <Link href="/user/shopping-cart/step1" passHref>
                <a className={styles['buttonstyle']}>
                  <FontAwesomeIcon
                    icon={faAnglesLeft}
                    className={styles['iconstyle1']}
                  />
                  回上一步
                </a>
              </Link>
              <Link href="#" passHref>
                <a
                  className={styles['buttonstyle']}
                  onClick={handleOrderButtonClick}
                >
                  提交訂單
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className={styles['iconstyle2']}
                    onClick={() => {
                      window.location.href = `http://localhost:3005/api/ec/?amount=500`
                    }}
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
