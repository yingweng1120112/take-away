import React, { useState } from 'react'

export default function Pageone() {
  const donateOptions = ['定期定額', '單筆捐款']
  const [donate, setDonate] = useState('單筆捐款')

  const giveOptions = ['500', '1000', '2000']
  const [give, setGive] = useState('500')
  const [ntd, setNtd] = useState({
    price: '',
  })

  const payOptions = ['銀行轉帳', '信用卡', '超商付款']
  // 使用者從多個選項中選擇一個
  const [pay, setPay] = useState('銀行轉帳')

  const handleChange = (e) => {
    const { name, value } = e.target
    setNtd({ ...ntd, [name]: value })
  }
  return (
    <>
      <h5 className="page-title">填寫捐款金額及方式</h5>
      <h4>點選捐款方式</h4>
      <div title="button-group" className="donate-button-group">
        {donateOptions.map((v, i) => {
          return (
            <button className="donate-button" key={i}>
              <input
                type="button"
                name={v}
                value={v}
                className="donate-input"
                checked={donate === v}
                onChange={(e) => {
                  setDonate(e.target.value)
                }}
              />
            </button>
          )
        })}
      </div>
      <h4>點選金額或自訂金額</h4>
      <div title="ntd-button-group" className="ntd-group">
        <div className="wrapper">
          {giveOptions.map((v, i) => {
            return (
              <div className="input-card" key={i}>
                <input
                  type="radio"
                  name={v}
                  value={v}
                  className="ntd-input"
                  checked={give === v}
                  onChange={(e) => {
                    setGive(e.target.value)
                  }}
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
            name="price"
            className="form-input"
            placeholder="NTD"
            value={ntd.price}
            onChange={handleChange}
          />
          <span class="input-border"></span>
        </label>
      </div>
      <h4 className="payment">付款方式</h4>

      <div title="radio-button-group" className="radio-group">
        {payOptions.map((v, i) => {
          return (
            <label class="custom-checkbox" key={i}>
              <input
                type="checkbox"
                name={v}
                value={v}
                className="radio-input"
                checked={pay === v}
                onChange={(e) => {
                  setPay(e.target.value)
                }}
              />
              <span class="checkmark"></span>
              {v}
            </label>
          )
        })}
      </div>
    </>
  )
}
