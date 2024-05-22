import React, { useState, useEffect } from 'react'
import { router } from 'next/router'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/psycological-test/psycological-test_p2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { loadProducts } from '@/services/psycological_test'

export default function Page1() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await loadProducts()
      if (data && Array.isArray(data.psycological_test)) {
        setQuestions(data.psycological_test)
      } else {
        console.error('資料結構不符', data)
      }
    }
    fetchQuestions()
  }, [])

  const updateLocalStorage = (option) => {
    const currentQuestion = questions[currentIndex];
    const optionValue = currentQuestion[`option_value_${option.toLowerCase()}`];
  
    // 儲存分數總和
    const totalKey = 'totalValue';
    const previousTotal = parseInt(localStorage.getItem(totalKey), 10) || 0;
    const newTotal = previousTotal + optionValue;
    localStorage.setItem(totalKey, newTotal);
  
    // 儲存每個選項被選擇的次數
    const countKey = `count${option.toUpperCase()}`;
    const previousCount = parseInt(localStorage.getItem(countKey), 10) || 0;
    localStorage.setItem(countKey, previousCount + 1);
  };

  const handleAnswer = (option) => {
    updateLocalStorage(option)
    // 更新問題索引
    // 如果是最後一題，跳轉到結果頁面
    if (currentIndex >= questions.length - 1) {
      router.push('/psycological-test/page3')
    } else {
      // 更新問題索引
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const currentQuestion = questions[currentIndex]

  if (!currentQuestion) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <section className={`${styles['hearttest']} ${styles['sectionstyle']}`}>
        <div className={styles['question']}>
          <div>
            {/* 還要做回上一頁 */}
            <button
              onClick={handlePreviousQuestion}
              disabled={currentIndex === 0}
            >
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className={styles['iconstyle']}
              />
            </button>
            <div className={styles['questioncontent']}>
              {currentQuestion.question_content}
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
            <a
              href="#"
              className={styles['link-container']}
              onClick={(e) => {
                e.preventDefault()
                handleAnswer('a')
              }}
            >
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionA.png"
                alt=""
              />
              <span>{currentQuestion.option_a}</span>
            </a>
            <a
              href="#"
              className={styles['link-container']}
              onClick={(e) => {
                e.preventDefault()
                handleAnswer('b')
              }}
            >
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionB.png"
                alt=""
              />
              <span>{currentQuestion.option_b}</span>
            </a>
            <a
              href="#"
              className={styles['link-container']}
              onClick={(e) => {
                e.preventDefault()
                handleAnswer('c')
              }}
            >
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionC.png"
                alt=""
              />
              <span>{currentQuestion.option_c}</span>
            </a>
            <a
              href="#"
              className={styles['link-container']}
              onClick={(e) => {
                e.preventDefault()
                handleAnswer('d')
              }}
            >
              <img
                className={styles['everyimg']}
                src="/psycological-test/optionD.png"
                alt=""
              />
              <span>{currentQuestion.option_d}</span>
            </a>
          </div>
        </div>
      </section>

      <Footer className={styles['footerstyle']} />
    </>
  )
}
