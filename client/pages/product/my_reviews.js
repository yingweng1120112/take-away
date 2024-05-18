import React, { useState } from 'react'
import styles from '@/styles/product/information.module.css'

export default function MyReviews() {
  return (
    <>
      {/* 我的評論 */}
      <section className={`${styles.section} ${styles.comment}`}>
        <div className={styles.content}>
          <div className="accordion w-100" id="accordionExample">
            <div className={`accordion-item ${styles['product-my-comment']}`}>
              <div className="accordion-header w-100">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <img src="\img\information\my-comment.svg" alt="" />
                </button>
              </div>
              <hr className={styles.hr} />
            </div>
            <div
              id="collapseOne"
              className="accordion-collapse collapse w-100"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles['accordion-body']}`}>
                <div className={styles['my-comment-form']}>
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label fs-6"
                    >
                      使用者:
                    </label>
                    <input
                      type="text"
                      className="form-control border-bottom-1"
                      id="exampleFormControlInput1"
                      placeholder="user-name"
                      Value={'小金黃'}
                      readOnly={true}
                    />
                  </div>
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label fs-6"
                    >
                      我的評論:
                    </label>
                    <textarea
                      className="form-control border-bottom-1"
                      style={{ resize: 'none' }}
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={
                        '我們家很挑嘴的小土豆，原本只是抱著姑且一試的態度買看看，沒想到牠意外喜歡，會再回購。'
                      }
                      readOnly={false}
                    />
                  </div>
                </div>
                <button className={styles.cta}>
                  <span className={styles['hover-underline-animation']}>
                    Release
                  </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={10}
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles['decorative-words-img']}
          src="/img/information/Productpage-decorative-words.png"
          alt=""
        />
      </section>
    </>
  )
}
