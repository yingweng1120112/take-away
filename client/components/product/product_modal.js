import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
//npm install styled-jsx
import styles from '@/styles/product/menu.module.css'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'
import { PiDog, PiCatBold } from 'react-icons/pi'
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
          <Modal.Title>
            <PiDog /> 產 品 簡 介 <PiCatBold />
          </Modal.Title>
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
                className="cta"
                //購物車加的
                onClick={() => handleCartClick(product, quantity)}
              >
                <span className="hover-underline-animation"> 加入購物車 </span>
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
                className="cta"
                //購物車加的
                onClick={onHide}
              >
                <span className="hover-underline-animation"> 關閉 </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={20}
                  viewBox="0 0 384 512"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    transform="translate(30)"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <style jsx>{`
        :global(.custom-modal .modal-content) {
          background-color: var(--bg-color);
          border-radius: 5px;
          border: 0.1875rem solid var(--reddish-brown);
        }
        :global(.custom-modal .modal-header) {
          background-color: var(--reddish-brown);
          color: white;
          border-bottom: none;
          padding: 0.3125rem;
          display: flex;
          justify-content: center;
          border-radius: 0px;
        }
        :global(.custom-modal .modal-header .modal-title) {
          font-size: 1.3rem;
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
        }
        .button-part button:nth-of-type(2) {
          width: 48%;
        }
        .cta {
          border: none;
          background: var(--khaki);
          height: 3.125rem;
          width: 50%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3.125rem;
          padding-top: 0.1875rem;
          box-shadow: 0.25rem 0.25rem 0.625rem rgba(0, 0, 0, 0.2);
        }
        .cta:nth-of-type(2) {
          background: var(--white);
        }

        .cta span {
          letter-spacing: 0.25rem;
          font-size: 0.875rem;
          padding-right: 0.9375rem;
          text-transform: uppercase;
        }

        .cta svg {
          transform: translateX(-8px);
          transition: all 0.3s ease;
        }

        .cta:hover svg {
          transform: translateX(0);
        }

        .cta:active svg {
          transform: scale(0.9);
        }

        .hover-underline-animation {
          position: relative;
          color: black;
        }

        .hover-underline-animation:after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 0.125rem;
          bottom: 0;
          left: 0;
          background-color: #000000;
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .cta:hover .hover-underline-animation:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </>
  )
}
