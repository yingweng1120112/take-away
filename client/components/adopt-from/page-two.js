import React, { useState } from 'react';

export default function PageTwo() {
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    address: '',
    phone:'',
    donationAmount:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
            value={formData.name}
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
            value={formData.phone}
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
            value={formData.email}
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
            value={formData.address}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className='input-title'>捐贈金額</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="donationAmount"
            className='form-input'
            placeholder="捐贈金額"
            value={formData.donationAmount}
            onChange={handleChange}
          />
          <span className="input-border"></span>
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
      </>
    )
  }

