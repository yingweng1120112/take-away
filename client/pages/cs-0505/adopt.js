import React, { useRef, useEffect, useState } from 'react'
import styles from '@/styles/adopt.module.css'
const parageStyles = {
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}
export default function Adopt() {
  const [open, setOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      setShowButton(ref.current.scrollHeight !== ref.current.clientHeight)
    }
  }, [])
  return (
    <>
      <div className={styles['adout']}>
        <div className={styles['container']}>
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          <img src={`/img/foot.png`} alt="" className={styles['foot']} />
          {/* <div className={styles['popup-image']}>
            <a>
              <i
                className={`${styles['fa-regular']}
            ${styles['fa-circle-xmark']}`}
              />
            </a>
            <img src={`/img/pet-img.jpg`} alt="" />
            <img src={`/img/print.png`} alt="" className={styles['print']} />
            <img src={`/img/foot.png`} alt="" className={styles['foot']} />
            <img src={`/img/foot.png`} alt="" className={styles['myfoot']} />
            <img src={`/img/foot.png`} alt="" className={styles['feet']} />
          </div> */}
          <section className={styles['about-pet']}>
            <div className={styles['pet-title']}>
              <img
                src={`/img/foot.png`}
                alt=""
                className={styles['pet-foot']}
              />
              <img
                src={`/img/foot.png`}
                alt=""
                className={styles['pet-foot']}
              />
              <div>
              {/* //輪播 */}
              </div>

              <div className={styles['pet-photo']}>
                <img src={`/img/螢幕擷取畫面 2024-02-03 215120.png`} alt="" />
              </div>
              <div className={styles['pet-name']}>
                <h3>認養滷蛋</h3>
                <h3>妹妹 • 5歲 • 射手座 • 鬆獅犬</h3>
              </div>
              <div className={styles['pet-img']}>
                <div className={styles['image']}>
                  <img src={`/img/pet-img(1).png`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-img(2).png`} alt="" />
                </div>
                <div className={styles['image']}>
                  <img src={`/img/pet-img(3).png`} alt="" />
                </div>
              </div>
              <div className={styles['pet-namet']}>
                <h3>認養滷蛋</h3>
                <h3>妹妹&nbsp;• 5歲 • 射手座 • 鬆獅犬</h3>
              </div>
              <div className={styles['extra']}>
                <div className={styles['pet-character']}>
                  <h3>性格特色</h3>
                  <p style={open ? null : parageStyles}>
                    1.很活潑好動，但只要讓她適當消耗精力，也能乖乖安靜待著
                    <br />
                    2.面對陌生人會先觀察，但一旦認定你就會開始黏人，看到熟人時也會非常興奮。
                    <br />
                    3.滷蛋願意跟隨人類、聽從指令。
                    <br />
                    4.對環境適應力快、勇於探索，但警戒性也很高。
                    <br />
                    ※本專案募資項目扣除Ludan（滷蛋）生活等相關費用，餘款將用於支付250隻等家狗狗每日的生活開銷※
                    <br />
                    ※您每一筆捐款將可以「列舉扣除額」方式申報扣抵所得稅※
                  </p>
                  <button
                    onClick={() => {
                      setOpen(!open)
                    }}
                    style={{
                      'display': 'inline-block',
                      'cursor': 'pointer',
                      'background-color': 'var(--border-color)',
                      'color': ' #ffffff',
                      'padding': ' 0.6rem',
                      'border-radius': '0.5rem',
                      'width': '50%',
                      'height': '3.3rem',
                      'padding': 'auto',
                    }}
                  >
                    {open ? 'Read Less...' : 'Read More...'}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className={styles['form']}>
            <form className={styles['msform']}>
              {/* progressbar */}
              <ul className={styles['progressbar']}>
                <li className={styles['active']}>填寫捐款金額</li>
                <li>填寫捐款人資料及收據</li>
                <li>捐贈資料</li>
              </ul>
              {/* fieldsets */}

              <fieldset className={styles['page-one']}>
                <h5 className={styles['fs-title']}>點選捐款方式</h5>
                <div className={styles['pay']}>
                  <button>定期定額</button>
                  <button>單筆捐款</button>
                </div>
                <h5 className={styles['fs-title']}>點選捐款方式</h5>
                <div className={styles['payment-img']}>
                  <div className={styles['money']}>
                    <button type="button" name="hun">
                      <img
                        src={`/img/Ellipse 183.jpg`}
                        alt=""
                        className={styles['moneyImg']}
                      />
                    </button>
                    <br />
                    <h4>NTD</h4>
                    <h4>100</h4>
                  </div>
                  <div className={styles['money']}>
                    <button type="button" name="five-hun">
                      <img
                        src={`/img/Ellipse 182.jpg`}
                        alt=""
                        className={styles['moneyImg']}
                      />
                    </button>
                    <br />
                    <h4>NTD</h4>
                    <h4>500</h4>
                  </div>
                  <div className={styles['money']}>
                    <button type="button" name="thou" placeholder="Email">
                      <img
                        src={`/img/Ellipse 175.jpg`}
                        alt=""
                        className={styles['moneyImg']}
                      />
                    </button>
                    <br />
                    <h4>NTD</h4>
                    <h4>1000</h4>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>NTD</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="Checkbox" className={styles['user-label']}>
                      NTD
                    </label>
                  </div>
                </div>
                <div className={styles['payment']}>
                  <h2 className={styles['fs-title']}>付款方式</h2>
                  <div className={`${styles.bank} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="Checkbox" className={styles['taxta']}>
                      銀行轉帳
                    </label>
                  </div>
                  <div className={`${styles.bank} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="Checkbox" className={styles['taxta']}>
                      信用卡
                    </label>
                  </div>
                  <div className={`${styles.bank} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        id="checkbox"
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="market" className={styles['taxta']}>
                      超商付款
                    </label>
                  </div>
                </div>
                <input
                  type="button"
                  name="next"
                  className={`${styles.next} ${styles['action-button']} ${styles['first-next']}`}
                  defaultValue="下一頁"
                />
              </fieldset>
              <fieldset className={styles['second-pages']}>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>姓名</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="user" className={styles['user-label']}>
                      姓名
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>行動電話</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="mobile" className={styles['user-label']}>
                      行動電話
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>電子信箱</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="email" className={styles['user-label']}>
                      電子信箱
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>地址</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="address" className={styles['user-label']}>
                      地址
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>捐贈金額</h5>
                  <div
                    className={`${styles['input-group']} ${styles['payment-donate']}`}
                  >
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label
                      htmlFor="donatetion"
                      className={styles['user-label']}
                    >
                      捐贈金額
                    </label>
                  </div>
                </div>
                <div className={styles['payment']}>
                  <h5 className={styles['fs-name']}>捐贈用途</h5>
                  <div className={`${styles['bank']} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="none" className={styles['taxta']}>
                      不指定
                    </label>
                  </div>
                  <div className={`${styles['creditcard']} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="emergency" className={styles['taxta']}>
                      急難救助
                    </label>
                  </div>
                  <div className={`${styles['market']} ${styles['shop']}`}>
                    <label
                      htmlFor="checkbox"
                      className={styles['checkbox-container']}
                    >
                      <input
                        className={styles['custom-checkbox']}
                        defaultChecked=""
                        type="checkbox"
                      />
                      <span className={styles['checkmark']} />
                    </label>
                    <label htmlFor="sterilization" className={styles['taxta']}>
                      絕育計畫
                    </label>
                  </div>
                </div>
                <input
                  type="button"
                  name="previous"
                  className={`${styles['previous']} ${styles['action-button']} ${styles['second-previous']}`}
                  defaultValue="上一頁"
                />
                <input
                  type="button"
                  name="next"
                  className={`${styles['next']} ${styles['action-button']} ${styles['second-next']}`}
                  defaultValue="下一頁"
                />
              </fieldset>
              <fieldset className={styles['page-third']}>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>姓名</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="user" className={styles['user-label']}>
                      姓名
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>行動電話</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="mobile" className={styles['user-label']}>
                      行動電話
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>電子信箱</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="email" className={styles['user-label']}>
                      電子信箱
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>捐贈金額</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="donation" className={styles['user-label']}>
                      捐贈金額
                    </label>
                  </div>
                </div>
                <div className={styles['ntd-group']}>
                  <h5 className={styles['fs-ntd']}>捐贈用途</h5>
                  <div className={styles['input-group']}>
                    <input
                      required=""
                      type="text"
                      name="text"
                      autoComplete="off"
                      className={styles['input']}
                    />
                    <label htmlFor="donatfor" className={styles['user-label']}>
                      捐贈用途
                    </label>
                  </div>
                </div>
                <h5 className={styles['fs-name']}>感謝認養</h5>
                <div className={styles['thanks']}>
                  <div className={styles['thanks-img']}>
                    <img
                      src={`/img/pet-img(2).png`}
                      alt=""
                      className={styles['puppy']}
                    />
                  </div>
                  <div className={styles['ml16-group']}>
                    <h3 className={styles['ml16']}>謝謝乾爹乾媽</h3>
                  </div>
                </div>
                <input
                  type="button"
                  name="previous"
                  className={`${styles.previous} ${styles['action-button']} ${styles['third-previous']}`}
                  defaultValue="上一頁"
                />
                <button
                  type="submit"
                  href=""
                  className={`${styles.submit} ${styles['action-button']} ${styles['third-submit']}`}
                  target="_top"
                >
                  完成
                </button>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
      <footer>
        <div>
          <h1>footer</h1>
        </div>
      </footer>
    </>
  )
}
