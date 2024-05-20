import React, { useState } from 'react'

export default function Pageone() {
  const [donateInfo, setDonateInfo] = useState({
    donateType: '單筆捐款',
    amount: '500',
    customAmount: '',
    paymentMethod: '銀行轉帳',
  })

  const [errors, setErrors] = useState({
    customAmount: '',
  })

  const donateOptions = ['定期定額', '單筆捐款']
  const giveOptions = ['500', '1000', '2000']
  const payOptions = ['銀行轉帳', '信用卡', '超商付款']

  const handleChange = (e) => {
    const { name, value } = e.target
    setDonateInfo({ ...donateInfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = { customAmount: '' }

    if (
      donateInfo.amount === '自訂金額' &&
      (!donateInfo.customAmount ||
        isNaN(donateInfo.customAmount) ||
        Number(donateInfo.customAmount) <= 0)
    ) {
      newErrors.customAmount = '請輸入有效的自訂金額'
    }

    if (newErrors.customAmount) {
      setErrors(newErrors)
      return
    }

    setErrors(newErrors)
    console.log('Form submitted:', donateInfo)

    try {
      const res = await fetch('http://localhost:3005/api/donate', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donateInfo),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      console.log(data)
      alert(
        `請確定捐款細項為\n捐款方式: ${donateInfo.donateType}\n金額: ${
          donateInfo.amount === '自訂金額'
            ? donateInfo.customAmount
            : donateInfo.amount
        }\n付款方式: ${donateInfo.paymentMethod}`
      )

      setDonateInfo({
        donateType: '單筆捐款',
        amount: '500',
        customAmount: '',
        paymentMethod: '銀行轉帳',
      })
    } catch (error) {
      console.error('Error:', error)
      alert('捐款失敗，請稍後再試')
    }
  }
  return (
    <>
      <h5 className="page-title">填寫捐款金額及方式</h5>
      <h4>點選捐款方式</h4>
      <div className="donate-button-group">
        {donateOptions.map((option, index) => (
          <button
            key={index}
            className={`$['donate-button' ${
              donateInfo.donateType === option ? 'active' : ''
            }`}
            onClick={() => setDonateInfo({ ...donateInfo, donateType: option })}
          >
            {option}
          </button>
        ))}
      </div>

      <h4>點選金額或自訂金額</h4>
      <div className="ntd-group">
        {giveOptions.map((option, index) => (
          <label key={index} className="input-card">
            {''}
            <input
              type="radio"
              name="amount"
              value={option}
              checked={donateInfo.amount === option}
              onChange={handleChange}
            />
            <span className="check"></span>
            <div className="ntd-label">
              <div className="title">我想捐款</div>
              <div className="price">{option}</div>
            </div>
          </label>
        ))}
        <label className="input-card">
          {''}
          <input
            type="radio"
            name="amount"
            value="自訂金額"
            checked={donateInfo.amount === '自訂金額'}
            onChange={handleChange}
          />
          <span className="check"></span>
          <div className="ntd-label">
            <div className="title">自訂金額</div>
            <input
              type="text"
              name="customAmount"
              placeholder="NTD"
              value={donateInfo.customAmount}
              onChange={handleChange}
              disabled={donateInfo.amount !== '自訂金額'}
              className="custom-amount"
            />
          </div>
        </label>
      </div>
      {errors.customAmount && (
        <div className="error">{errors.customAmount}</div>
      )}

      <h4 className="payment">付款方式</h4>
      <div className="radio-group">
        {payOptions.map((option, index) => (
          <label key={index} className="custom-checkbox">
            <input
              type="radio"
              name="paymentMethod"
              value={option}
              checked={donateInfo.paymentMethod === option}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            {option}
          </label>
        ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        送出
      </button>
    </>
  )
}
