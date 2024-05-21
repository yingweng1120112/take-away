import React, { useState } from 'react'

export default function PageThree({ donateInfo, adopt }) {
  return (
    <>
      <h4 className="page-title">捐贈資料</h4>
      <div className="form-Input-group">
        <h4 className="input-title">我想認養</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="寵物"
            value={donateInfo.pet}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">姓名</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="姓名"
            value={adopt.name}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">行動電話</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="phone"
            className="form-input"
            placeholder="行動電話"
            // value={formData.phone}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">電子信箱</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="電子信箱"
            // value={formData.email}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">捐款方式及金額</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="donation_method"
            className="form-input"
            placeholder="捐贈方式"
            value={donateInfo.donation_method}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="donationAmount"
            className="form-input"
            placeholder="捐贈金額"
            value={donateInfo.amount || donateInfo.customAmount}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">捐贈用途</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="donationPurpose"
            className="form-input"
            placeholder="捐贈用途"
            value={adopt.donation}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">捐獻證明寄送</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="donationPurpose"
            className="form-input"
            placeholder="捐獻證明寄送"
            value={adopt.address}
            // onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
      </div>
      <div className="thanks">
        <h5 className="thanks-title">感謝認養</h5>
        <div className="thanks-group">
          <div className="thanks-img">
            <img
              src={`/img/pet-info/10008/10008-4p.jpg`}
              alt=""
              className="img"
            />
          </div>
          <p className="thanks-group-p">謝謝乾爹乾媽</p>
        </div>
      </div>
    </>
  )
}
