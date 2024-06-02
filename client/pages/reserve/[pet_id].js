import React, { useState, useEffect } from 'react'
import styles from '@/styles/reserve/reserve.module.css'
import { IoRemoveOutline } from 'react-icons/io5'
import Header from '@/components/layout/header'
import banner from '@/styles/reserve/banner.module.css'
import Footer from '@/components/layout/footer'
import { useRouter } from 'next/router'
import { loadPetInfo } from '@/services/pets'
import Swal from 'sweetalert2'
// import { useLoader } from '@/hooks/use-loader'

export default function Reserve() {
  // const{showLoader, hideLoader, loading, delay} = useLoader()
  const router = useRouter()
  const [reserve, setReserve] = useState({
    pet: 'reserve.pet',
    name: '',
    reserveTime: '',
  })

  const [pet, setPet] = useState({
    pet_id: 10000,
    name: '',
    tag: '',
    age: 0,
    type: '',
    weight: 0,
    gender: '',
    breeds: '',
    color: '',
    adopted: 0,
    state: '',
    fixed: 0,
    microchip: 0,
    vaccine: 0,
    deworm: 0,
    personality_type: '',
    sign: '',
    blue: 0,
    favorite: 0,
    pee: 0,
    skin: 0,
    disability: 0,
    blind: 0,
    adopt1: '',
    adopt2: '',
    adopt3: '',
    adopt4: '',
    phone1: '',
    phone2: '',
    phone3: '',
    phone4: '',
    reserve1: '',
    story: '',
    habbit: '',
  })
  const userName = {
    10001: 'dana',
    10002: '白賢祐',
    10003: '洪海仁',
    10004: '洪秀哲',
    10005: '千多慧',
    10006: '洪凡資',
    10007: '全峰藹',
    10008: '白斗關',
    10009: '尹殷盛',
    10010: '羅彩妍',
    10011: '金陽基',
  }
  const [isLoading, setIsLoading] = useState(true)

  const getPet = async (pet_id) => {
    try {
      const data = await loadPetInfo(pet_id)
      console.log('info', data)

      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        setPet(data)
        setReserve((prev) => ({ ...prev, pet: data.name }))
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }
    } catch (error) {
      console.error('Failed to fetch pet data:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { pet_id } = router.query
      if (pet_id) {
        getPet(pet_id)
      }
    }
  }, [router.isReady])

  const [errors, setErrors] = useState({
    pet: '',
    name: '',
    reserveTime: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setReserve({ ...reserve, [name]: value })
  }

  const formatDateTime = (datetime) => {
    const date = new Date(datetime)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { pet: '', name: '', reserveTime: '' }

    if (!reserve.name || reserve.name.length < 2)
      newErrors.name = '預約人必須大於2個字'
    
    const isNameValid = Object.values(userName).includes(reserve.name);
    if (!isNameValid) {
      Swal.fire({
        icon: 'error',
        html: `<h5>送出失敗，尚未有預約人資料</h5>
        <h5>請先註冊</h5>`,
      });
      return;
    }
    if (!reserve.reserveTime) {
      newErrors.reserveTime = '預約時間必填';
  } else {
      const reserveTime = new Date(reserve.reserveTime);
      const hour = reserveTime.getHours();
      if (hour < 7 || hour > 19) {
          newErrors.reserveTime = '預約時間請在7點到19點之間';
      }
  }
    if (newErrors.pet || newErrors.name || newErrors.reserveTime) {
      setErrors(newErrors)
      return
    }

    setErrors(newErrors)
    const formattedReserveTime = formatDateTime(reserve.reserveTime)
    console.log('Form submitted:', { ...reserve, reserveTime: formattedReserveTime })

    try {
      const userId = Object.keys(userName).find(key => userName[key] === reserve.name)

      if (!userId) {
        Swal.fire({
          icon: 'error',
          html: `<h5>送出失敗,預約人尚未註冊過</h5>`,
        })
      }
      const res = await fetch('http://localhost:3005/api/reserve_system', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          pet_id: pet.pet_id,
          time: formattedReserveTime,
        }),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log(data)
      Swal.fire({
        title: '送出成功',
        icon: 'success',
      })
      setReserve({ pet: `${reserve.pet}`, name: '', reserveTime: '' })
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        html: `<h5>送出失敗，請稍後再試</h5>`,
      })
    }
  }

  const handleConfirm = () => {
    if (!reserve.reserveTime) {
      Swal.fire({
        icon: 'error',
        html: `<h5>預約格式確實填寫</h5>`,
      });
      return;
    }
    const formattedReserveTime = formatDateTime(reserve.reserveTime);
    if (isNaN(new Date(formattedReserveTime).getTime())) {
      Swal.fire({
        icon: 'error',
        html: `<h5>預約格式確實填寫</h5>`,
      });
      return;
    }

    Swal.fire({
      title: '確定要送出?',
      html: `
      <h5>預約的寵物是: ${reserve.pet}</h5><br>
      <h5>預約人是: ${reserve.name}</h5><br>
      <h5>預約時間為: ${formattedReserveTime}</h5>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '送出',
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit(new Event('submit'));
      }
    });
  };


  return (
    <>
      <Header />
      <div
        className={banner['banner']}
        style={{ backgroundImage: 'url(/img/reserve/reserveBanner.jpg)' }}
      >
        <div className={banner['left']}>
          <p className={banner['menu-a']}>Odds Us</p>
          <p className={banner['menu-b']}>可不可以</p>
        </div>
        <div className={banner['middle']}>
          <div className={`${banner['accordion']}`}>
            <div className={`accordion-button ${banner['accordion-button']}`}>
              <span className={banner['middle-page-title']}>預約賞寵</span>
              <span>Reserve visit</span>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['reserve']}>
        <div className={styles['container']}>
          <img src={`/img/print.png`} alt="" className={styles['foot']} />
          <img src={`/img/print.png`} className={styles['print']} />
          <div className={styles['reserve-title']}>
            <h1 className={styles['reserve-title-h1']}>緣分</h1>
            <p className={styles['lap-top']}>
              _____________________________________________
            </p>
            <p className={styles['phone']}>
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
              <IoRemoveOutline />
            </p>
          </div>
          <h5 className={styles['reserve-inner']}>
            這些孩子在等待著一些機會，
            <br />
            屬於牠們的機會可能比您想像中的少，
            <br />
            所以也期待您撥空來現場看看他們!
          </h5>
          <div className={styles['reserve-img']}>
            <img src={`/img/pet-info/${pet.reserve1}.jpg`} alt="" />
            <div className={styles['img-title']}>
              <h1 className={styles['img-h1']}>期待與您相見♡</h1>
              <p className={styles['img-p']}>
                _______________________________________
              </p>
            </div>
          </div>
          <div className={styles['reserve-form']}>
            <form
              className={styles['input-group']}
              id="email"
              placeholder="浪浪名稱"
              onSubmit={handleSubmit}
            >
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>浪浪名稱</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      type="text"
                      name="pet"
                      className={styles['input']}
                      placeholder="浪浪名稱"
                      value={reserve.pet}
                      onChange={handleChange}
                      disabled
                      // required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.pet}</div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約人</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      className={styles['input']}
                      placeholder="預約人"
                      type="text"
                      name="name"
                      value={reserve.name}
                      onChange={handleChange}
                      // required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.name}</div>
              </div>
              <div className={styles['text-group']}>
                <h4 className={styles['input-h4']}>預約時間</h4>
                <div>
                  <label className={styles['form-input']}>
                    {''}
                    <input
                      className={styles['input']}
                      placeholder=""
                      type="datetime-local"
                      name="reserveTime"
                      value={reserve.reserveTime}
                      onChange={handleChange}
                      required
                    />
                    <span className={styles['input-border']} />
                  </label>
                </div>
                <div className="error">{errors.reserveTime}</div>
              </div>
              <button className={styles['button']} type="button" onClick={handleConfirm}>
                送出
              </button>
            </form>
          </div>
          <div className={styles['play']}>
            <h5 className={styles['play-title']}>
              他們也一定很期待能和你一同交流、認識與玩耍
            </h5>
          </div>
        </div>
      </section>
      <section className={styles['thanks-group']}>
        <div className={styles['thanks']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <h1 className={styles['thanks-title']}>
            Take Away
          </h1>
          <h1 className={styles['thanks-title']}>
            誠摯的歡迎您的蒞臨~
          </h1>
        </div>
      </section>
      <Footer />
    </>
  )
}