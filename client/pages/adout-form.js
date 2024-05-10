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
          <h4 className='form-title'>填寫捐款金額</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className='button-group'>
            <button type="button" className='button' onClick={nextStep}>下一頁</button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={handleSubmit}>
          <h4 className='form-title'>填寫捐款人資料及收據</h4>
          <div className='form-Input-group'>
            <label className='form-label'>
              姓名:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="姓名"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className='form-label'>
              行動電話:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="行動電話"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className='form-label'>
              電子信箱:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="電子信箱"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className='form-label'>
              捐贈金額:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="捐贈金額"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className='form-label'>
              捐贈用途:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="捐贈用途"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className='form-label'>
              捐贈證明寄送:{' '}
              <input
                type="password"
                name="password"
                className='form-input'
                placeholder="捐贈證明寄送"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div title="radio-button-group">
            <label>
              <input
                type="radio"
                value={v}
                checked={pet === v}
                onChange={(e) => {
                  setPet(e.target.value)
                }}
              />
              {v}
            </label>
            <label>
              <input
                type="radio"
                value={v}
                checked={pet === v}
                onChange={(e) => {
                  setPet(e.target.value)
                }}
              />
              {v}
            </label>
            <label>
              <input
                type="radio"
                value={v}
                checked={pet === v}
                onChange={(e) => {
                  setPet(e.target.value)
                }}
              />
              {v}
            </label>
          </div>
          <div className='button-group'>
            <button type="button" className='button' onClick={prevStep}>上一頁</button>
            <button type="button" className='button' onClick={nextStep}>下一頁</button>
          </div>
        </form>
      )
      }

      {
        currentStep === 3 && (
          <form className='page' onSubmit={handleSubmit}>
            <h4 className='form-title'>捐贈資料</h4>
            <div className='form-Input-group'>
              <label className='form-label'>
                姓名:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="姓名"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className='form-label'>
                行動電話:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="行動電話"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className='form-label'>
                電子信箱:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="電子信箱"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className='form-label'>
                捐贈金額:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="捐贈金額"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className='form-label'>
                捐贈用途:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="捐贈用途"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className='form-label'>
                捐贈證明寄送:{' '}
                <input
                  type="password"
                  name="password"
                  className='form-input'
                  placeholder="捐贈證明寄送"
                  value={formData.password}
                  onChange={handleChange}
                />
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
              <button type="button" className='button' onClick={prevStep}>上一頁</button>
              <button type="submit" className='button' >完成</button>
            </div>
          </form>
        )
      }
    </div>
  )
}

