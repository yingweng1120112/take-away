import React from 'react'
import { Modal, Button } from 'react-bootstrap'
//npm install styled-jsx

export default function ProductModal({ show, onHide, product }) {
  if (!product) return null

  // 從產品對象提取屬性
  const images = []
  for (let i = 1; i <= 6; i++) {
    const pic = product[`pic${i}`]
    if (pic) {
      images.push(pic)
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
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">加入購物車</Button>
          <Button variant="secondary" onClick={onHide}>
            關閉
          </Button>
        </Modal.Footer>
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
      `}</style>
    </>
  )
}
