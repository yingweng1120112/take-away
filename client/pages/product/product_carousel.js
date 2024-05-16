import React from 'react'

export default function ProductCarousel() {
  return (
    <>
      {/* <!-- 產品輪播 --> */}
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
          <div className="carousel-item active">
            <img
              src="\img\information\product-img1.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="\img\information\product-img2.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="\img\information\product-img3.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="\img\information\product-img4.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="\img\information\product-img5.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="\img\information\product-img6.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
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
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img1.webp"
            alt=""
            aria-label="Slide 1"
          />
        </button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className="active"
          aria-current="true"
          aria-label="Slide 2"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img2.webp"
            alt=""
            aria-label="Slide 2"
          />
        </button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className="active"
          aria-current="true"
          aria-label="Slide 3"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img3.webp"
            alt=""
            aria-label="Slide 3"
          />
        </button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          className="active"
          aria-current="true"
          aria-label="Slide 4"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img4.webp"
            alt=""
            aria-label="Slide 4"
          />
        </button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          className="active"
          aria-current="true"
          aria-label="Slide 5"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img5.webp"
            alt=""
            aria-label="Slide 5"
          />
        </button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          className="active"
          aria-current="true"
          aria-label="Slide 6"
        >
          <img
            style={{ width: '100%' }}
            src="\img\information\product-img6.webp"
            alt=""
            aria-label="Slide 6"
          />
        </button>
      </div>
      <style jsx>{`
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
        @media screen and (min-width: 1025px) {
          .productimg {
            width: 60%;
          }
          /* 輪播照片縮圖 */
          .preview {
            width: 35%;
            margin-left: 5%;
            margin-top: 0%;
          }
          .preview button {
            width: 46%;
            height: auto;
          }
        }
      `}</style>
    </>
  )
}
