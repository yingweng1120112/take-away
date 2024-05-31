import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/psycological-test/psycological-test_p2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { loadProducts } from '@/services/psycological_test'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function Page1() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalSteps, setTotalSteps] = useState(1)
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()

  const now = (currentStep / totalSteps) * 100

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await loadProducts()
      if (data && Array.isArray(data.psycological_test)) {
        setQuestions(data.psycological_test)
        setTotalSteps(data.psycological_test.length)
      } else {
        console.error('資料結構不符', data)
      }
    }
    fetchQuestions()
  }, [])

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('totalValue')
      localStorage.removeItem('countOptions')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    const storedTotalValue = localStorage.getItem('totalValue')
    const storedCountOptions = localStorage.getItem('countOptions')

    if (storedTotalValue || storedCountOptions) {
      router.push('/pets/psycological-test/page1')
      localStorage.removeItem('totalValue')
      localStorage.removeItem('countOptions')
      localStorage.removeItem('answers')
    }
  }, [router])

  const updateLocalStorage = (option, isUndo = false) => {
    const currentQuestion = questions[currentIndex]
    const optionValue = currentQuestion[`option_value_${option.toLowerCase()}`]

    // 儲存分數總和
    const totalKey = 'totalValue'
    const previousTotal = parseInt(localStorage.getItem(totalKey), 10) || 0
    const newTotal = isUndo
      ? previousTotal - optionValue
      : previousTotal + optionValue
    localStorage.setItem(totalKey, newTotal)

    // 儲存每個選項被選擇的次數
    const countOptions = JSON.parse(localStorage.getItem('countOptions')) || {
      countA: 0,
      countB: 0,
      countC: 0,
      countD: 0,
    }
    //更新次數
    countOptions[`count${option.toUpperCase()}`] += isUndo ? -1 : 1
    localStorage.setItem('countOptions', JSON.stringify(countOptions))

    //記住每個題目的選擇
    const answers = JSON.parse(localStorage.getItem('answers')) || []
    if (isUndo) {
      answers.pop()
    } else {
      answers.push({
        questionId: currentQuestion.question_id,
        option,
        optionValue,
      })
    }
    localStorage.setItem('answers', JSON.stringify(answers))
  }

  const handleAnswer = (option) => {
    updateLocalStorage(option)
    // 如果是最後一題，跳轉到結果頁面
    if (currentIndex >= questions.length - 1) {
      router.push('/pets/psycological-test/page3')
    } else {
      // 更新問題索引
      setCurrentIndex(currentIndex + 1)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentIndex === 0) {
      router.push('/pets/psycological-test/page1')
    } else {
      // 獲取上一个問題的選擇值
      const answers = JSON.parse(localStorage.getItem('answers')) || []
      const prevAnswer = answers.pop()
      if (prevAnswer) {
        const { option, optionValue } = prevAnswer
        updateLocalStorage(option, true)
      }
      localStorage.setItem('answers', JSON.stringify(answers))
      setCurrentIndex(currentIndex - 1)
      setCurrentStep(currentStep - 1)
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
            <ProgressBar
              variant="warning"
              now={now}
              label={`${Math.round(now)}%`}
              className={styles['progress-bar']}
            />
          </div>
          <div>
            <button style={{ cursor: 'default' }}>
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className={styles['iconstyle']}
                onClick={handlePreviousQuestion}
                disabled={false}
                style={{ cursor: 'pointer' }}
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
          <img src="/psycological-test/catbg.png" alt="" />
          <div className={styles['option']}>
            <a
              href="#"
              className={styles['link-container']}
              onClick={(e) => {
                e.preventDefault()
                handleAnswer('a')
              }}
            >
              <div className={styles['catcontainer']}>
                <div>
                  <img
                    src="/psycological-test/cat1.png"
                    className={styles['catbody']}
                  />
                  <div className={styles['cathand1-wrapper']}>
                    <img src="/psycological-test/cathand1.png" className={styles['cathand1']} />
                  </div>
                </div>
              </div>
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
              <div className={styles['catcontainer']}>
                <div>
                  <img
                    src="/psycological-test/cat2.png"
                    className={styles['catbody']}
                  />
                  <div className={styles['cathand2-wrapper']}>
                    <img src="/psycological-test/cathand2.png" className={styles['cathand2']} />
                  </div>
                </div>
              </div>
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
              <div className={styles['catcontainer']}>
                <div>
                  <img
                    src="/psycological-test/cat3.png"
                    className={styles['catbody']}
                  />
                  <div className={styles['cathand3-wrapper']}>
                    <img src="/psycological-test/cathand3.png" className={styles['cathand3']} />
                  </div>
                </div>
              </div>
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
              <div className={styles['catcontainer']}>
                <div>
                  <img
                    src="/psycological-test/cat4.png"
                    className={styles['catbody']}
                  />
                  <div className={styles['cathand4-wrapper']}>
                    <img src="/psycological-test/cathand4.png" className={styles['cathand4']} />
                  </div>
                </div>
              </div>
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
