import React, { useState, useEffect, useRef } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import styles from '@/styles/psycological-test/psycological-test_p3.module.css'
import { loadProducts } from '@/services/psycological_test_result'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faPen,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import html2canvas from 'html2canvas'

//各項數據
const ProgressBar = ({ value, label }) => {
  const barRef = useRef(null) 
  const valueRef = useRef(null) 
  const [currentValue, setCurrentValue] = useState(0) 

  const calculateRotation = (value) => {
    return 45 + value * 1.8  // 将 value 转换为角度（0-100 对应 45°-225°）
  } 

  useEffect(() => {
    let start = 0 
    const duration = 1000  // 动画持续时间，单位毫秒
    const increment = value / (duration / 10)  // 每 10 毫秒增加的值

    const animate = () => {
      start += increment 
      if (start <= value) {
        setCurrentValue(Math.min(start, value)) 
        requestAnimationFrame(animate) 
      }
    } 

    animate() 
  }, [value]) 

  useEffect(() => {
    if (barRef.current && valueRef.current) {
      const perc = currentValue 

      barRef.current.style.transform = `rotate(${calculateRotation(perc)}deg)` 
      valueRef.current.textContent = `${perc.toFixed(0)}%` 
    }
  }, [currentValue]) 

  return (
    <div className={styles.progress}>
      <div className={styles.barOverflow}>
        <div ref={barRef} className={styles.bar}></div>
      </div>
      <div className={styles.text}>
        <div>{label}</div>
        <span ref={valueRef} className={styles.value}>{currentValue.toFixed(0)}%</span>
      </div>
    </div>
  ) 
} 

export default function Page3() {
  const [result, setResult] = useState(null)
  const [userName, setUserName] = useState('')
  const [dependence, setDependence] = useState(0)
  const [anxiety, setAnxiety] = useState(0)
  const [proactivity, setProactivity] = useState(0)
  const [stability, setStability] = useState(0)
  const resultContainerRef = useRef(null)

  useEffect(() => {
    const fetchResult = async () => {
      const totalValue = parseInt(localStorage.getItem('totalValue'), 10)
      const countOptions =
        JSON.parse(localStorage.getItem('countOptions')) || {}

      setDependence(Math.round(((countOptions.countA || 0) / 12) * 100))
      setAnxiety(Math.round(((countOptions.countB || 0) / 12) * 100))
      setProactivity(Math.round(((countOptions.countC || 0) / 12) * 100))
      setStability(Math.round(((countOptions.countD || 0) / 12) * 100))

      let resultId = null

      if (totalValue >= 12 && totalValue <= 19) {
        resultId = 10001
      } else if (totalValue >= 20 && totalValue <= 27) {
        resultId = 10002
      } else if (totalValue >= 28 && totalValue <= 34) {
        resultId = 10003
      } else if (totalValue >= 35 && totalValue <= 41) {
        resultId = 10004
      } else if (totalValue >= 42 && totalValue <= 48) {
        resultId = 10005
      }

      if (resultId) {
        const data = await loadProducts()
        if (data && Array.isArray(data.psycological_test_result)) {
          const result = data.psycological_test_result.find(
            (item) => item.result_id === resultId
          )
          if (result) {
            setResult(result)
            console.log(result)
          } else {
            console.error('未找到匹配的結果', data)
          }
        } else {
          console.error('資料結構不符', data)
        }
      } else {
        console.error('totalValue 不在任何範圍內', totalValue)
      }
    }
    fetchResult()
  }, [])

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName')
    if (typeof window !== 'undefined' && storedUserName) {
      setUserName(storedUserName)
    }
  }, []) // 只在組件加載時執行一次

  const handleDownload = () => {
    if (resultContainerRef.current) {
      html2canvas(resultContainerRef.current).then((canvas) => {
        const link = document.createElement('a') 
        link.href = canvas.toDataURL('image/jpeg') 
        link.download = 'test-result.jpg' 
        link.click() 
      }) 
    }
  } 

  // 在組件卸載前保存資料
  useEffect(() => {
    localStorage.setItem('userName', userName)
  }, [userName])

  if (!result) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <div className={styles['bgcolor']} ref={resultContainerRef}>
        <section 
          className={`${styles['testresult']} ${styles['sectionstyle']}`}
        >
          <div className={styles['testtitle']} >
            <div>測</div>
            <div>驗</div>
            <div>結</div>
            <div>果</div>
          </div>
          <div>
            <div className={styles['result-left']}>
            <img src={`/psycological-test/${result.pic}`} alt="" />
              
            </div>
            <div className={styles['result-right']}>
              <div>{userName}的最佳旅伴是…</div>
              <div>「{result.personality_type}」浪浪</div>
              <div className={styles['result-right-describe']}>{result.type__content}</div>
              <div className={styles['graph']}>
                <ProgressBar value={dependence} label="依賴性" />
                <ProgressBar value={anxiety} label="焦慮性" />
                <ProgressBar value={proactivity} label="主動性" />
                <ProgressBar value={stability} label="穩定性" />
              </div>
              <div className={styles['endtext']}>要不要給浪浪們一點機會，帶牠們走呢？</div>
            </div>
          </div>
          <div className={styles['button']}>
            <Link href="/pets/psycological-test/page1">
              <a>
                再測一次
                <FontAwesomeIcon icon={faPen} className={styles['iconstyle']} />
              </a>
            </Link>
              <a onClick={handleDownload}>
                保存結果
                <FontAwesomeIcon
                  icon={faDownload}
                  className={styles['iconstyle']}
                />
              </a>
            <Link href="/pets">
              <a>
                前往專區
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className={styles['iconstyle']}
                />
              </a>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
