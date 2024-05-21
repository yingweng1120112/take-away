import React, { useState } from 'react'
import Pageone from '@/components/adopt/adopt-from/page-one'
import PageTwo from '@/components/adopt/adopt-from/page-two'
import PageThree from './page-three'
export default function AdoptForm(pet) {
  const [currentStep, setCurrentStep] = useState(1)

  const [donateInfo, setDonateInfo] = useState({
    pet: '',
    donation_method: '定期定額',
    amount: '',
    customAmount: '',
    payment: '銀行轉帳',
  })

  const [adopt, setAdopt] = useState({
    name: '',
    donation: '不指定',
    address: '電子郵件地址',
  })

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1)
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

    const finalDonateInfo = { ...donateInfo, ...adopt, amount: finalAmount }

    try {
      const res = await fetch('http://localhost:3005/api/adopt', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalDonateInfo),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log(data)
      alert('成功')
      console.log(finalDonateInfo)
      setDonateInfo({
        pet: '',
        donation_method: '定期定額',
        amount: '',
        customAmount: '',
        payment: '銀行轉帳',
      })
      setAdopt({
        name: '',
        donation: '不指定',
        address: '電子郵件地址',
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
          <Pageone name={pet.name}
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
          <PageThree donateInfo={donateInfo} adopt={adopt} phone1={pet.phone1} name={pet.name} />
          <div className="button-group">
            <button type="button" className="donate-button next-page-button" onClick={prevStep}>
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
