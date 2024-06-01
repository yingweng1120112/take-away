import React, {useEffect} from 'react'
import Swal from 'sweetalert2';

export default function PageOne({ donateInfo, setDonateInfo, handleChange ,handleAmount , name}) {
  const donateOptions = ['定期定額', '單筆捐款']
  const giveOptions = ['500', '1000', '2000']
  const payOptions = ['銀行轉帳', '超商付款']

  useEffect(() => {
    const storedData = localStorage.getItem('donateInfo');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDonateInfo(parsedData);
    }
  }, []);
  
  return (
    <>
      <h5 className="page-title">填寫捐款金額及方式</h5>
      <h4>我想認養</h4>
      <div className="form-Input-group">
        <label className="form-label">
          {''}
          <input
            type="text"
            name="pet_id"
            className="form-input"
            placeholder="寵物"
            value={donateInfo.pet_id = name}
            onChange={handleChange}
            disabled="disabled"
          />
          <span className="input-border"></span>
        </label>
      </div>
      <h4>點選捐款方式</h4>
      <div className="donate-button-group">
        {donateOptions.map((v, i) => (
          <button
            key={i}
            type='button'
            className="donate-button"
            onClick={() => setDonateInfo({ ...donateInfo, donation_method: v })}
          >
            {v}
          </button>
        ))}
      </div>
      <h4>點選金額或自訂金額</h4>
      <div title="ntd-button-group" className="ntd-group">
        <div className="wrapper">
          {giveOptions.map((v, i) => (
            <div className="input-card" key={i}>
              <input
                type="radio"
                name="amount"
                value={v}
                className="ntd-input"
                checked={donateInfo.amount === v.toString()}
                onChange={handleChange}
              />
              <span className="check"></span>
              <div className="ntd-label">
                <div className="title">我想捐款</div>
                <div className="price">{v}</div>
              </div>
            </div>
          ))}
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
            onChange={handleAmount}
          />
          <span className="input-border"></span>
        </label>
      </div>
      <h4 className="payment">付款方式</h4>
      <div className="radio-group">
        {payOptions.map((v, i) => (
          <label className="custom-checkbox" key={i}>
            <input
              type="checkbox"
              name="payment"
              value={v}
              className="radio-input"
              checked={donateInfo.payment === v}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            {v}
          </label>
        ))}
      </div>
    </>
  )
}
