import React from 'react'
import styles from '@/styles/psycological-test_p2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Page1() {
  return (
    <>
      <header />
      <section className={`${styles['hearttest']} ${styles['sectionstyle']}`}>
        <div className={styles['question']}>
          <div>
            <button>
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className={styles['iconstyle']}
              />
            </button>
            <div className={styles['questioncontent']}>
              睜開眼，你發現處在一片迷霧森林中，進退兩難。這時候你會？
            </div>
            <div>
              <a href="">
                <i
                  className={`${styles['fa-solid']} ${styles['fa-chevron-right']}`}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles['testoption']}>
          <img src="/psycological-test/hearttestoption1.png" alt="" />
          <div className={styles['option']}>
            <a href="" className={styles['link-container']}>
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionA.png"
                alt=""
              />
              <span>小心謹慎地向前</span>
            </a>
            <a href="" className={styles['link-container']}>
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionB.png"
                alt=""
              />
              <span>小心謹慎地向前</span>
            </a>
            <a href="" className={styles['link-container']}>
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionC.png"
                alt=""
              />
              <span>小心謹慎地向前</span>
            </a>
            <a href="" className={styles['link-container']}>
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionD.png"
                alt=""
              />
              <span>小心謹慎地向前</span>
            </a>
          </div>
        </div>
      </section>

      <footer />
    </>
  )
}
