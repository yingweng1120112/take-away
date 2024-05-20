import React, { useState } from 'react'

export default function Pageone3() {
  const [donateInfo, setDonateInfo] = useState({
    donateType: '定期定額',
    amount: '500',
    customAmount: '',
    paymentMethod: '銀行轉帳',
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

    try {
      // const res = await fetch('http://localhost:3005/api/donate', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(donateInfo),
      // })

      // if (!res.ok) {
      //   throw new Error('Network response was not ok')
      // }

      // const data = await res.json()
      // console.log(data)
      alert(`成功`)
      console.log(donateInfo)
      setDonateInfo({
        donateType: '定期定額',
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
        {donateOptions.map((v, i) => (
          <button
            key={i}
            className="donate-button"
            onClick={() => setDonateInfo({ ...donateInfo, donateType: v })}
          >
            {v}
          </button>
        ))}
      </div>
      <h4>點選金額或自訂金額</h4>
      <div title="ntd-button-group" className="ntd-group">
        <div className="wrapper">
          {giveOptions.map((v, i) => {
            return (
              <div className="input-card" key={i}>
                <input
                  type="radio"
                  name="amount"
                  value={v}
                  className="ntd-input"
                  checked={donateInfo.amount === v}
                  onChange={handleChange}
                />
                <span className="check"></span>
                <div className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">{v}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <h4>NTD</h4>
      <div className="form-Input-group">
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="customAmount"
            className="form-input"
            placeholder="NTD"
            value={donateInfo.customAmount}
            onChange={handleChange}
          />
          <span class="input-border"></span>
        </label>
      </div>
      <h4 className="payment">付款方式</h4>
      <div className="radio-group">
        {payOptions.map((v, i) => {
          return (
            <label class="custom-checkbox" key={i}>
              <input
                type="checkbox"
                name="paymentMethod"
                value={v}
                className="radio-input"
                checked={donateInfo.paymentMethod === v}
                onChange={handleChange}
              />
              <span class="checkmark"></span>
              {v}
            </label>
          )
        })}
      </div>
      <div></div>
      <button type="submit" onClick={handleSubmit}>
        送出
      </button>
    </>
  )
}
