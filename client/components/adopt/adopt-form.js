import React, { useState } from 'react'
import Pageone from '@/components/adopt/adopt-from/page-one'
import PageTwo from '@/components/adopt/adopt-from/page-two'
import PageThree from './page-three'
import { adoptInfos } from '@/services/pets'
export default function AdoptForm(pet) {
  const [currentStep, setCurrentStep] = useState(1)

  const [donateInfo, setDonateInfo] = useState({
    pet_id: '',
    donation_method: '定期定額',
    amount: '',
    customAmount: '',
    payment: '銀行轉帳',
  })

  const [adopt, setAdopt] = useState({
    user_id: '',
    email: '',
    phone: '',
    donation: '不指定',
    donate_address: '電子郵件地址',
  })
  const adoptPet = async (adopt_id) => {
    const data = await adoptInfos(adopt_id)
    console.log('info', data)

    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setPet(data)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
    window.scrollTo({ top: 450, behavior: 'smooth' })
  }
  // TODO:預設是450px

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1)
    window.scrollTo({ top: 450, behavior: 'smooth' })
  }

  const handleChangeDonateInfo = (e) => {
    const { name, value } = e.target
    setDonateInfo({ ...donateInfo, [name]: value })
  }

  const handleChangeAdopt = (e) => {
    const { name, value } = e.target
    setAdopt({ ...adopt, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let finalAmount = donateInfo.amount
    if (!finalAmount && donateInfo.customAmount) {
      finalAmount = donateInfo.customAmount
    }

    const finalDonateInfo = {
      pet_id: pet.pet_id,
      user_id: adopt.user_id,
      donation_method: donateInfo.donation_method,
      amount: donateInfo.amount,
      customAmount: donateInfo.customAmount,
      payment: donateInfo.payment,
      donation: adopt.donation,
      donate_address: adopt.donate_address,
    }

    try {
      const res = await fetch(
        'http://localhost:3005/api/online_virtual_adoption_form',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalDonateInfo),
          // body: JSON.stringify({
          //   pet_id: pet.pet_id,
          //   user_id: adopt.user_id,
          //   donation_method: donateInfo.donation_method,
          //   amount: donateInfo.amount,
          //   customAmount: donateInfo.customAmount,
          //   payment: donateInfo.payment,
          //   donation: adopt.donation,
          //   donate_address: adopt.donate_address,
          // }),
        }
      )

      if (!res.ok) {
        console.log(finalDonateInfo)
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log(data)
      console.log(finalDonateInfo)
      alert('成功')
      setDonateInfo({
        pet_id: '',
        donation_method: '定期定額',
        amount: '',
        customAmount: '',
        payment: '銀行轉帳',
      })
      setAdopt({
        user_id: '',
        donation: '不指定',
        donate_address: '電子郵件地址',
      })
    } catch (error) {
      console.error('Error:', error)
      alert('捐款失敗，請稍後再試')
    }
  }
  return (
    <div className="form1">
      {currentStep === 1 && (
        <form className="page-one">
          <Pageone
            name={pet.name}
            donateInfo={donateInfo}
            setDonateInfo={setDonateInfo}
            handleChange={handleChangeDonateInfo}
          />
          <div className="button-group">
            <button
              type="button"
              className="next-button donate-button page-one-button"
              onClick={nextStep}
            >
              下一頁
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form className="page-two">
          <PageTwo
            name={pet.name}
            adopt={adopt}
            setAdopt={setAdopt}
            handleChange={handleChangeAdopt}
            donateInfo={donateInfo} // Passing donateInfo to PageTwo
          />
          <div className="button-group">
            <button
              type="button"
              className=" donate-button next-page-button"
              onClick={prevStep}
            >
              上一頁
            </button>
            <button
              type="submit"
              className=" donate-button next-page-button"
              onClick={nextStep}
            >
              下一頁
            </button>
          </div>
        </form>
      )}
      {currentStep === 3 && (
        <form className="page-third">
          <h4 className="page-title">捐贈資料</h4>
          <div className="form-Input-group">
            <h4 className="input-title">我想認養</h4>
            <label className="form-label">
              <input
                type="text"
                name="pet_id"
                className="form-input"
                placeholder="寵物"
                value={(donateInfo.pet_id = pet.name)}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">姓名</h4>
            <label className="form-label">
              <input
                type="text"
                name="user_id"
                className="form-input"
                placeholder="姓名"
                value={adopt.user_id || ''}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">行動電話</h4>
            <label className="form-label">
              <input
                type="text"
                name="phone"
                className="form-input"
                placeholder="行動電話"
                value={adopt.phone || ''}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">電子信箱</h4>
            <label className="form-label">
              <input
                type="text"
                name="email"
                className="form-input"
                placeholder="電子信箱"
                value={adopt.email || ''}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">捐款方式及金額</h4>
            <label className="form-label">
              <input
                type="text"
                name="donation_method"
                className="form-input"
                placeholder="捐贈方式"
                value={donateInfo.donation_method}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <label className="form-label">
              <input
                type="text"
                name="donationAmount"
                className="form-input"
                placeholder="捐贈金額"
                value={donateInfo.amount || donateInfo.customAmount}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">捐贈用途</h4>
            <label className="form-label">
              <input
                type="text"
                name="donationPurpose"
                className="form-input"
                placeholder="捐贈用途"
                value={adopt.donation}
                readOnly
              />
              <span className="input-border"></span>
            </label>
            <h4 className="input-title">捐獻證明寄送</h4>
            <label className="form-label">
              <input
                type="text"
                name="address"
                className="form-input"
                placeholder="捐獻證明寄送"
                value={adopt.donate_address}
                readOnly
              />
              <span className="input-border"></span>
            </label>
          </div>
          <div className="thanks">
            <h5 className="thanks-title">感謝認養</h5>
            <div className="thanks-group">
              <div className="thanks-img">
                <img
                  src={`/img/pet-info/${pet.phone1}.jpg`}
                  alt="Pet"
                  className="img"
                />
              </div>
              <p className="thanks-group-p">謝謝乾爹乾媽</p>
            </div>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="donate-button next-page-button"
              onClick={prevStep}
            >
              上一頁
            </button>
            <button
              type="submit"
              className="button donate-button next-page-button"
              onClick={handleSubmit}
            >
              完成
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
