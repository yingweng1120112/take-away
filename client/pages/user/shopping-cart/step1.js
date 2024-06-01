import { useState, useEffect } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import styles from '@/styles/shopping-cart/shoppingcar-step1.module.css'
import Carousel from '@/components/shopping-cart/carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareMinus,
  faSquarePlus,
  faTrashCan,
  faStore,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { loadProducts } from '@/services/testproduct'
import { useCart } from '@/context/cartcontext'
import { Modal, Button } from 'react-bootstrap'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import { ToastContainer, toast, Slide } from 'react-toastify'

export default function Step1() {
  const {
    cartItems,
    addToCart,
    removeItem,
    increaseItem,
    decreaseItem,
    selectedItems,
    setSelectedItems,
    handleToggleChecked,
    countSelectedTotalPrice,
    countSelectedFinalTotalPrice,
    countSelectedExtraFee,
  } = useCart()

  const router = useRouter()

  useEffect(() => {
    const userId = localStorage.getItem('userKey');
    if (userId) {
      try {
        const user = jwtDecode(userId);
        const userID = user.user_id;
        if (!userID) {
          throw new Error('Invalid user ID');
        }
        const userCartItems = window.localStorage.getItem(`cartItems_${userID}`);
        const userSelectedItems = window.localStorage.getItem(`selectedItems_${userID}`);
        if (userCartItems) {
          setCartItems(JSON.parse(userCartItems));
        }
        if (userSelectedItems) {
          setSelectedItems(JSON.parse(userSelectedItems));
        }
      } catch (error) {
        console.error('Invalid user ID:', error);
        handleInvalidUser();
      }
    } else {
      handleInvalidUser();
    }
  }, []);

  const handleInvalidUser = () => {
    const isLoggedIn = !!localStorage.getItem('userKey'); // 檢查是否已登入
    // 只有在未登入的情況下才導向登入頁面
    if (!isLoggedIn) {
      toast.warning('請先登入', {
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
      router.push('/user');
    }
  };

  const [showModal, setShowModal] = useState(false)

  const chooseProduct = () => {
    const selectedProducts = selectedItems.filter((item) => item.checked)
    if (selectedProducts.length === 0) {
      console.log('Show modal')
      setShowModal(true)
      return
    } else {
      // 如果已選擇商品，導向下一步
      console.log('Redirect to next step')
      window.localStorage.setItem(
        'selectedItems',
        JSON.stringify(selectedProducts)
      )
      window.location.href = '/user/shopping-cart/step2'
    }
  }

  useEffect(() => {
    setSelectedItems((prevState) => {
      const nextState = cartItems.map((item) => ({
        ...item,
        checked:
          prevState.find((selected) => selected.product_id === item.product_id)
            ?.checked || false,
      }))
      return nextState
    })
  }, [cartItems])

  return (
    <>
      <Header />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>尚未選擇任何商品</Modal.Body>
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

      {/* 購物車 */}
      <div className={styles['shoppingcar']}>
        <div className={styles['shoppingcarleft']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle']}`}>
            <div>購物車（{cartItems.length}件）</div>
          </div>
          <div className={styles['cartdetail']}>
            <div className={styles['cartdetailleft']}>商品資料</div>
            <div className={styles['cartdetailright']}>
              <div>優惠</div>
              <div>單件價格</div>
              <div>數量</div>
              <div>小計</div>
            </div>
          </div>
          <div className={styles['itemscroll']}>
            {/* 商品列表 */}
            {cartItems.map((v) => {
              const selectedItem = selectedItems.find(
                (selected) => selected.product_id === v.product_id
              )
              return (
                <div key={v.product_id} className={styles['cartitem']}>
                  <div className={styles['cartitemleft']}>
                    <div className={styles['carti']}>
                      <input
                        type="checkbox"
                        checked={selectedItem?.checked || false}
                        onChange={() => handleToggleChecked(v.product_id)}
                      />
                    </div>
                    <div className={styles['itemlist']}>
                      <div className={styles['cartimg']}>
                        <img src={`/img/product/${v.pic1}`} alt={v.name} />
                      </div>
                      <div>{v.name}</div>
                    </div>
                  </div>
                  <div className={styles['cartitemright']}>
                    <div>0</div>
                    <div>{v.price}</div>
                    <div className={styles['itemamount']}>
                      <FontAwesomeIcon
                        style={{ cursor: 'pointer' }}
                        icon={faSquareMinus}
                        className={styles['iconstyle']}
                        onClick={() => {
                          decreaseItem(v.product_id, v.name)
                        }}
                      />
                      <div>{v.qty}</div>
                      <FontAwesomeIcon
                        style={{ cursor: 'pointer' }}
                        icon={faSquarePlus}
                        className={styles['iconstyle']}
                        onClick={() => {
                          increaseItem(v.product_id)
                        }}
                      />
                    </div>
                    <div>{v.subTotal}</div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        removeItem(v.product_id, v.name)
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles['iconstyle']}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* 右側訂單資訊 */}
        <div className={styles['shoppingcarright']}>
          <div className={`${styles['carttitle']} ${styles['carttopstyle1']}`}>
            <div>訂單資訊</div>
          </div>
          <div className={styles['cartbottomstyle']}>
            {selectedItems.some((item) => item.checked) ? (
              <>
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
              </>
            ) : (
              <div>尚未選擇商品</div>
            )}
            <div className={styles['cartbutton']}>
              <Link href="/product/menu" passHref>
                <a className={styles['buttonstyle']}>
                  <FontAwesomeIcon
                    icon={faStore}
                    className={styles['iconstyle1']}
                  />
                  繼續購物
                </a>
              </Link>
              <button onClick={chooseProduct} className={styles['buttonstyle']}>
                填寫資料
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className={styles['iconstyle2']}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 商品推薦 */}
      <section className={styles['commend']}>
        <h4>相關商品推薦</h4>
        <div className={styles['carouselstyle']}>
          <Carousel />
        </div>
      </section>

      {/* 下花邊 */}
      <section className={styles['wall']}>
        <img src="/shopping-cart/wall.png" alt="" />
      </section>
      <Footer />
    </>
  )
}
