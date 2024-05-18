import React, { useState } from 'react';

export default function PageTwo() {
  const [adopt, setAdopt] = useState({
    name: '',
    phone:'',
    email: '',
    address: '',
    donateOptions:'',
    donationAmount:'',
  })
  const projectOptions = ['不指定', '急難救助', '絕育計畫']
  const [project, setProject] = useState('不指定')

  const addressOptions = ['電子郵件地址', '通訊地址']
  const [address, setAddress] = useState('電子郵件地址')

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdopt({ ...adopt, [name]: value})
  }

  return (
    <>
      <h4 className='page-title'>填寫捐款人資料及收據</h4>
      <div className='form-Input-group'>
        <h4 className='input-title'>姓名</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="name"
            className='form-input'
            placeholder="姓名"
            value={adopt.name}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className='input-title'>行動電話</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="phone"
            className='form-input'
            placeholder="行動電話"
            value={adopt.phone}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className='input-title'>電子信箱</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="email"
            className='form-input'
            placeholder="電子信箱"
            value={adopt.email}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className='input-title'>地址</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="address"
            className='form-input'
            placeholder="地址"
            value={adopt.address}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className='input-title'>捐贈方式及金額</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="donationOption"
            className='form-input'
            placeholder="捐贈方式"
            value={adopt.donationOption}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="donationAmount"
            className='form-input'
            placeholder="捐贈金額"
            value={adopt.donationAmount}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
      </div>
      <h4 className='radio-title'>捐贈用途</h4>
      <div title="radio-button-group" className='radio-group'>
      {projectOptions.map((v, i) => {
          return <label class="custom-checkbox" key={i}>
          <input
                type="checkbox"
                name={v}
                value={v}
                className="radio-input"
                checked={project === v}
                onChange={(e) => {
                  setProject(e.target.value)
                }}
              />
          <span class="checkmark"></span>
              {v}
          </label>
        })}
      </div>
      <h4 className='radio-title'>捐贈證明寄送</h4>
      <div title="radio-button-group" className='radio-group'>
      {addressOptions.map((v, i) => {
          return <label class="custom-checkbox" key={i}>
          <input
                type="checkbox"
                name={v}
                value={v}
                className="radio-input"
                checked={address === v}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
          <span class="checkmark"></span>
              {v}
          </label>
        })}
        </div>
      </>
    )
  }

