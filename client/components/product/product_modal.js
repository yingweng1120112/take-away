import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
//npm install styled-jsx
import styles from '@/styles/product/menu.module.css'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'
import { CgClose } from 'react-icons/cg'
import { useCart } from '@/context/cartcontext' //購物車加的

export default function ProductModal({ show, onHide, product }) {
  if (!product) return null

  const { addToCart } = useCart() //購物車加的
  //購物車加
  const handleCartClick = (product, quantity) => {
    if (product && quantity > 0) {
      addToCart({ ...product, quantity })
      console.log('Added to cart:', { ...product, quantity }) // 确认数据是否正确传递
    } else {
      console.log('Invalid product or quantity')
    }
  }

  // 從產品對象提取屬性
  const images = []
  for (let i = 1; i <= 6; i++) {
    const pic = product[`pic${i}`]
    if (pic) {
      images.push(pic)
    }
  }
  //數量增減
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  return (
    <>
      <Modal show={show} onHide={onHide} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>產品簡介</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 產品輪播 */}
          <div
            id="carouselExampleIndicators"
            className="productimg carousel slide"
            style={{ height: 'auto' }}
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={`/img/product/${img}`}
                    className="d-block w-100"
                    alt={`Product image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* <!-- 輪播照片縮圖 --> */}
          <div className="preview">
            {images.map((img, index) => (
              <button
                key={index}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : ''}
                aria-label={`Slide ${index + 1}`}
              >
                <img
                  style={{ width: '100%' }}
                  src={`/img/product/${img}`}
                  alt={`Slide ${index + 1}`}
                  aria-label={`Slide ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <h4 className="product_name">{product.name}</h4>
          <h5>價格: ${product.price}</h5>
          <div className={styles['product-quantity']}>
            <h5>數量:</h5>
            <div className={`input-group ${styles['input-group']}`}>
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="minusBtn"
                onClick={decreaseQuantity}
              >
                <GrFormSubtract />
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                id="quantityInput"
                onChange={handleChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="plusBtn"
                onClick={increaseQuantity}
              >
                <GrFormAdd />
              </button>
            </div>
            <div className="button-part">
              <button
                className={styles.cta}
                //購物車加的
                onClick={() => handleCartClick(product, quantity)}
              >
                <span className={styles['hover-underline-animation']} >
                  {' '}
                  加入購物車{' '}
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={20}
                  viewBox="0 0 576 512"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    transform="translate(30)"
                  />
                </svg>
              </button>
              <button
                className={styles.cta}
                //購物車加的
                onClick={onHide}
              >
                <span className={styles['hover-underline-animation']}>
                  {' '}
                  關閉
                </span>
                <span width={50} height={20}>
                  <CgClose />
                </span>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <style jsx>{`
        :global(.custom-modal .modal-content) {
          background-color: var(--bg-color);
          border-radius: 10px;
          border: 0.1875rem solid var(--reddish-brown);
        }
        :global(.custom-modal .modal-header) {
          background-color: var(--reddish-brown);
          color: white;
          border-bottom: none;
          padding: 0.3125rem;
          display: flex;
          justify-content: center;
        }
        :global(.custom-modal .modal-header .modal-title) {
          font-size: 1.3rem;
          letter-spacing: 10px;
        }
        :global(.custom-modal .modal-header .btn-close) {
          display: none;
        }
        :global(.custom-modal .modal-body) {
          padding: 20px;
        }
        :global(.custom-modal .modal-body img) {
          width: 100%;
        }
        :global(.custom-modal .modal-footer) {
          border-top: none;
        }
        /* 產品輪播 */
        .productimg {
          width: 100%;
        }

        /* 輪播照片縮圖 */
        .preview {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: space-between;
          margin-top: 0.625rem;
        }

        .preview button {
          width: 15%;
          height: auto;
          background: var(--white);
          border: none;
        }
        .product_name {
          margin-top: 0.625rem;
          margin-bottom: 1.25rem;
        }
        .button-part {
          display: flex;
          justify-content: space-between;
          margin-top: 1.25rem;
        }
        .button-part button:nth-of-type(1) {
          width: 48%;
          background-color: var(--khaki);
        }
        .button-part button:nth-of-type(1):hover {
          /* 這裡放置您的樣式 */
          background-color: var(--white); /* 例如，改變背景顏色 */
          color: black; /* 改變文字顏色 */
          cursor: pointer; /* 顯示手型圖標 */
        }
        .button-part button:nth-of-type(1) {
          width: 48%;
        }
        .button-part button:nth-of-type(2) {
          width: 48%;
        }
        .hover-underline-animation {
          margin-left: 1.4375rem;
        }
      `}</style>
    </>
  )
}
