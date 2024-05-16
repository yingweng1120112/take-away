import React, { useState } from 'react'


export default function Pageone() {
  const [ntd, setNtd] = useState({
    name: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNtd(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <>
      <h5 className='page-title'>填寫捐款金額及方式</h5>
          <h4>點選捐款方式</h4>
          <div title="button-group" className='donate-button-group'>
            <button
              value="定期定額"
              className='donate-button'
            // onClick={() => {
            //   setPet("銀行轉帳")
            // }}
            >
              定期定額
            </button>
            <button
              value="單筆捐款"
              className='donate-button'
            // onClick={() => {
            //   setPet("信用卡")
            // }}
            >
              單筆捐款
            </button>
          </div>
          <h4>點選金額或自訂金額</h4>
          <div title="ntd-button-group" className='ntd-group'>
            <div className='wrapper'>
              <div className="input-card">
                <input className="ntd-input" type="radio" name="card" value="500" />
                <span className="check"></span>
                <label className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">500</div>
                </label>
              </div>
              <div className="input-card">
                <input className="ntd-input" type="radio" name="card" value="1000" />
                <span className="check"></span>
                <label className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">
                    1000
                  </div>
                </label>
              </div>
              <div className="input-card">
                <input className="ntd-input" type="radio" name="card" value="2000" />
                <span className="check"></span>
                <label className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">
                    2000
                  </div>
                </label>
              </div>
            </div>
          </div>
          <h4>NTD</h4>
          <div className='form-Input-group'>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="name"
                className='form-input'
                placeholder="NTD"
                value={ntd.name}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
          </div>
          <h4 className='payment'>付款方式</h4>
          <div title="radio-button-group" className='radio-group'>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="銀行轉帳"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              銀行轉帳
            </label>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="信用卡"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              信用卡
            </label>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="超商付款"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              超商付款
            </label>
          </div>
    </>
  )
}
