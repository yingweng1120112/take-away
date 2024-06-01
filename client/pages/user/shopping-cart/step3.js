import {React,useEffect,useState} from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/shopping-cart/shoppingcar-step3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useCart } from '@/context/cartcontext'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { useRouter } from 'next/router'; 

export default function Step3() {
  const router = useRouter();
  const { paymentStatus } = router.query; 
  const {
    cartItems,
    selectedItems,
    setSelectedItems,
    handleToggleChecked,
    countSelectedTotalPrice,
    countSelectedFinalTotalPrice,
    countSelectedExtraFee,
  } = useCart()


  useEffect(() => {
    if (paymentStatus === 'success') {
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
    }
  }, [paymentStatus]);

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



  // useEffect(() => {
  //   // 從 Local Storage 中讀取資料
  //   const storedOrderData = localStorage.getItem('order_history');
  //   if (storedOrderData) {
  //     const orderData = JSON.parse(storedOrderData);
  //     console.log('Order Data:', orderData);
  //   }

  //   // 從 Session Storage 中讀取資料
  //   const storedOrderDetailData = sessionStorage.getItem('order_detail');
  //   if (storedOrderDetailData) {
  //     const orderDetailData = JSON.parse(storedOrderDetailData);
  //     console.log('Order Detail Data:', orderDetailData);
  //   }
  // }, []);



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

      {/* 購物車 */}
      <div className={styles['shoppingcar']}>
        <div className={styles['shoppingcarleft']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle']}`}>
            <div>
              <i
                className={`${styles['fa-solid']} ${styles['fa-file-circle-check']}`}
              />
              訂單建立成功
            </div>
          </div>
          <div className={styles['cartdetail']}>
            <div className={styles['cartdetailleft']}>
              <div>商品資料</div>
            </div>
            <div className={styles['cartdetailright']}>
              <div>優惠</div>
              <div>單件價格</div>
              <div>數量</div>
              <div>小計</div>
            </div>
          </div>
          <div>
            {/* 商品列表 */}
            {selectedItems
              .filter((item) => item.checked)
              .map((item) => (
                <div key={item.product_id} className={styles['cartitem']}>
                  <div className={styles['cartitemleft']}>
                    <div className={styles['itemlist']}>
                      <div className={styles['cartimg']}>
                        <img src={`/img/product/${item.pic1}`} alt={item.name} />
                      </div>
                      <div>{item.name}</div>
                    </div>
                  </div>
                  <div className={styles['cartitemright']}>
                    <div>0</div>
                    <div>${item.price}</div>
                    <div className={styles['itemamount']}>{item.qty}</div>
                    <div>${item.subTotal}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* 訂單金額 */}
        <div className={styles['cartbottomstyle']}>
          <div>
            <div>小計：</div>
            <div>${countSelectedTotalPrice()}</div>
          </div>
          <div>
            <div>運費：</div>
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
            <Link href="/product/menu" passHref>
              <a className={styles['buttonstyle']}>
                <FontAwesomeIcon
                  icon={faStore}
                  className={styles['iconstyle1']}
                />
                回到商城首頁
              </a>
            </Link>
            <Link href="/user/user-order-history" passHref>
              <a className={styles['buttonstyle']}>
                查看訂單紀錄
                <FontAwesomeIcon
                  icon={faRectangleList}
                  className={styles['iconstyle2']}
                />
              </a>
            </Link>
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
