import React, { useState } from 'react';

export default function PageThree() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone:'',
    donationAmount:'',
    donationPurpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <h4 className='page-title'>捐贈資料</h4>
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
        <h4 className='input-title'>捐贈用途</h4>
        <label className='form-label'>
          {' '}
          <input
            type="text"
            name="donationPurpose"
            className='form-input'
            placeholder="捐贈用途"
            value={formData.donationPurpose}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
      </div>
      <div className='thanks'>
        <h5 className='thanks-title'>感謝認養</h5>
        <div className='thanks-group'>
          <div className='thanks-img'>
            <img src={`/img/pet-info/10008/10008-4p.jpg`} alt="" className='img' />
          </div>
          <p className='thanks-group-p'>謝謝乾爹乾媽</p>
        </div>
      </div>
    </>
  );
}
