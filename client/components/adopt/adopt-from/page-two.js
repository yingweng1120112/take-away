import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function PageTwo({ adopt, setAdopt, handleChange, donateInfo, name, errors}) {
  const projectOptions = ['不指定', '急難救助', '絕育計畫']
  const addressOptions = ['電子郵件地址', '通訊地址']

  useEffect(() => {
    setAdopt({
      ...adopt,
      pet_id: donateInfo.pet_id,
      donation_method: donateInfo.donation_method,
      amount: donateInfo.amount,
      customAmount: donateInfo.customAmount,
    })
  }, [donateInfo, setAdopt])

  return (
    <>
      <h4 className="page-title">填寫捐款人資料及收據</h4>
      <div className="form-Input-group">
        <h4 className="input-title">我想認養</h4>
        <label className="form-label">
          {''}
          <input
            type="text"
            name="pet"
            className="form-input"
            placeholder="寵物"
            value={donateInfo.pet_id = name}
            onChange={handleChange}
            disabled="disabled"
          />
          <span className="input-border"></span>
        </label>
        <h4 className="input-title">姓名</h4>
        <label className="form-label">
          {''}
          <input
            type="text"
            name="user_id"
            className="form-input"
            placeholder="姓名"
            value={adopt.user_id}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <div className="error"> {errors.user_id && <p className="error">{errors.user_id}</p>}
        </div>
        <h4 className="input-title">行動電話</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="phone"
            className="form-input"
            placeholder="行動電話"
            value={adopt.phone}
            onChange={handleChange}
          />
          <span className="input-border"></span>
         
        </label>
        <div className="error"> {errors.phone && <p className="error">{errors.phone}</p>}</div>
        <h4 className="input-title">電子信箱</h4>
        <label className="form-label">
          {' '}
          <input
            type="text"
            name="email"center
            className="form-input"
            placeholder="電子信箱"
            value={adopt.email}
            onChange={handleChange}
          />
          <span className="input-border"></span>
        </label>
        <div className="error">  {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <h4 className="input-title">捐贈方式及金額</h4>
        <label className="form-label">
          {''}
          <input
            type="text"
            name="donation_method"
            className="form-input"
            placeholder="捐贈方式"
            value={adopt.donation_method || ''}
            onChange={handleChange}
            disabled="disabled"
          />
          <span className="input-border"></span>
        </label>
        <label className="form-label">
          {''}
          <input
            type="text"
            name="amount"
            className="form-input"
            placeholder="捐贈金額"
            value={adopt.amount || adopt.customAmount || ''}
            onChange={handleChange}
            disabled
          />
          <span className="input-border"></span>
        </label>
      </div>
      <h4 className="radio-title">捐贈用途</h4>
      <div className="radio-group">
        {projectOptions.map((option, index) => (
          <label className="custom-checkbox" key={index}>
            <input
              type="checkbox"
              name="donation"
              value={option}
              className="radio-input"
              checked={adopt.donation === option}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            {option}
          </label>
        ))}
      </div>
      <h4 className="radio-title">捐贈證明寄送</h4>
      <div className="radio-group">
        {addressOptions.map((option, index) => (
          <label className="custom-checkbox" key={index}>
            <input
              type="checkbox"
              name="donate_address"
              value={option}
              className="radio-input"
              checked={adopt.donate_address === option}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            {option}
          </label>
        ))}
      </div>
    </>
  )
}
