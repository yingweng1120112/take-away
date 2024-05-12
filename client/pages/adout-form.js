import React, { useState } from 'react'

export default function AdoptForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData)
  }

  return (
    <div className='form1'>
      {currentStep === 1 && (
        <form className='page-one' onSubmit={handleSubmit}>
          <h4 className='form-title'>填寫捐款金額及方式</h4>
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
              <div className="card">
                <input className="ntd-input" type="radio" name="card" value="500" />
                <span className="check"></span>
                <label className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">500</div>
                </label>
              </div>
              <div className="card">
                <input className="ntd-input" type="radio" name="card" value="1000" />
                <span className="check"></span>
                <label className="ntd-label">
                  <div className="title">我想捐款</div>
                  <div className="price">
                    1000
                  </div>
                </label>
              </div>
              <div className="card">
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
                name="password"
                className='form-input'
                placeholder="NTD"
                value={formData.password}
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
          <div className='button-group'>
            <button type="button" className='next-button donate-button' onClick={nextStep}>下一頁
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form className='page-two' onSubmit={handleSubmit}>
          <h4 className='page-title'>填寫捐款人資料及收據</h4>
          <div className='form-Input-group'>
            <h4 className='input-title'>姓名</h4>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="姓名"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>行動電話</h4>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="行動電話"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>電子信箱</h4>

            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="電子信箱"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>地址</h4>

            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="地址"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>捐贈金額</h4>

            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="捐贈金額"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
          </div>
          <h4 className='radio-title'>捐贈用途</h4>
          <div title="radio-button-group" className='radio-group'>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="不指定"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              不指定
            </label>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="急難救助"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              急難救助
            </label>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="絕育計畫"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              絕育計畫
            </label>
          </div>
          <h4 className='radio-title'>捐贈證明寄送</h4>
          <div title="radio-button-group" className='radio-group'>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="電子郵件地址"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              電子郵件地址
            </label>
            <label class="custom-checkbox">
              <input
                type="checkbox"
                value="通訊地址"
                className='radio-input'
              // checked={pet === v}
              // onChange={(e) => {
              //   setPet(e.target.value)
              // }}
              />
              <span class="checkmark"></span>
              通訊地址
            </label>
          </div>
          <div className='button-group'>
            <button type="button" className=' donate-button next-page-button' onClick={prevStep}>上一頁
            </button>
            <button type="button" className=' donate-button next-page-button' onClick={nextStep}>下一頁
            </button>
          </div>
        </form>
      )
      }

      {
        currentStep === 3 && (
          <form className='page-third' onSubmit={handleSubmit}>
            <h4 className='page-title'>捐贈資料</h4>
            <div className='form-Input-group'>
            <h4 className='input-title'>姓名</h4>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="姓名"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>行動電話</h4>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="行動電話"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>電子信箱</h4>

            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="電子信箱"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>捐贈金額</h4>

            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="捐贈金額"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
            <h4 className='input-title'>捐贈用途</h4>
            <label className='form-label'>
              {' '}
              <input
                type="text"
                name="password"
                className='form-input'
                placeholder="捐贈用途"
                value={formData.password}
                onChange={handleChange}
              />
              <span class="input-border"></span>
            </label>
          </div>
            <div className='thanks'>
              <h5 className='thanks-title'>感謝認養</h5>
              <div className='thanks-group'>
                <div className='thanks-img'>
                  <img src={`/img/pet-img.jpg`} alt="" className='img' />
                </div>
                <p className='thanks-group-p'>謝謝乾爹乾媽</p>
              </div>
            </div>
            <div className='button-group'>
            <button type="button" className=' donate-button next-page-button' onClick={prevStep}>上一頁
            </button>
              <button type="submit" className='button donate-button next-page-button'>完成</button>
            </div>
          </form>
        )
      }
    </div>
  )
}

