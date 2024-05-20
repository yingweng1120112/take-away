import { useState, useEffect } from 'react'
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
import Link from 'next/link'

export default function Step1() {
  const {
    cartItems,
    addToCart,
    removeItem,
    increaseItem,
    decreaseItem,
    totalPrice,
    extraFee,
    finalTotalPrice,
  } = useCart()

  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const initState = cartItems.map((item) => ({
      ...item,
      checked:
        selectedItems.find(
          (selected) => selected.product_id === item.product_id
        )?.checked || false,
    }))
    setSelectedItems(initState)
  }, [cartItems])

  const handleToggleChecked = (product_id) => {
    const nextItems = selectedItems.map((item) =>
      item.product_id === product_id
        ? { ...item, checked: !item.checked }
        : item
    )
    setSelectedItems(nextItems)
  }

  const selectedTotalPrice = selectedItems
    .filter((item) => item.checked)
    .reduce((acc, item) => acc + item.subTotal, 0)

  const selectedFinalTotalPrice =
    selectedTotalPrice < 899 ? selectedTotalPrice + 80 : selectedTotalPrice
  const selectedExtraFee = selectedTotalPrice < 899 ? '80' : '0'

  return (
    <>
      <header />
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
              購物車（{cartItems.length}件）
              <Link href="/shopping-cart/testproduct">連至 商品頁</Link>
            </div>
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
                        onChange={() =>
                          handleToggleChecked(selectedItem.product_id)
                        }
                      />
                    </div>
                    <div className={styles['itemlist']}>
                      <div className={styles['cartimg']}>
                        <img src="/shopping-cart/car-item1.png" alt="" />
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
                          decreaseItem(v.product_id)
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
                    <div style={{ cursor: 'pointer' }}>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className={styles['iconstyle']}
                        onClick={() => {
                          removeItem(v.product_id)
                        }}
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
                  <div>${selectedTotalPrice}</div>
                </div>
                <div>
                  <div>運費(滿899免運)：</div>
                  <div>${selectedExtraFee}</div>
                </div>
                <div>
                  <div>優惠：</div>
                  <div>$0</div>
                </div>
                <div>
                  <div>合計：</div>
                  <div>${selectedFinalTotalPrice}</div>
                </div>
              </>
            ) : (
              <div>尚未選擇商品</div>
            )}
            <div className={styles['cartbutton']}>
              <button className={styles['buttonstyle']}>
                <FontAwesomeIcon
                  icon={faStore}
                  className={styles['iconstyle1']}
                />
                繼續購物
              </button>
              <button className={styles['buttonstyle']}>
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
      <footer></footer>
    </>
  )
}
