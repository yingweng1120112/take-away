import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Card from 'react-bootstrap/Card'
import styles from '@/styles/life.module.css'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log(''))

  return (
    <button
      type="button"
      style={{ backgroundColor: 'white' }}
      onClick={decoratedOnClick}
      className={styles['accordion-button']}
    >
      {children}
    </button>
  )
}

export default function Banner() {
  return (
    <Accordion defaultActiveKey="0">
      <div className={`${styles['banner']} ${styles['banner-life-2']}`}>
        <div className={styles['left']}>
          <p className={styles['menu-a']}>LIFE</p>
          <p className={styles['menu-b']}>生活紀錄</p>
        </div>
        <div className={styles['middle']}>
          <Card.Header className={styles['accordion']}>
            <CustomToggle eventKey="0">
              <span className={styles['middle-page-title']}>日誌列表</span>
              <span>選擇日誌分類</span>
            </CustomToggle>
          </Card.Header>
        </div>
      </div>
      <Accordion.Collapse eventKey="0" className={styles['accordion-body']}>
        <Card.Body className={styles['accordion-body']}>
          <div className={styles['select']}>
            <div className={styles['select-left']}>
              <div className={styles['select-item-a']}>
                <p className={styles['select-title']}>選擇年齡</p>
                <div className={styles['select-item']}>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>幼年 0~1</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>青年 2~3</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>中年 4~7</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span> 老年 8以上</span>
                  </label>
                </div>
              </div>
              <div className={styles['select-item-a']}>
                <p className={styles['select-title']}>寵物體型</p>
                <div className={styles['select-item']}>
                  <label className={styles['cl-checkbox']}>
                    <input type="checkbox" />
                    <span>大型20kg以上</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>中型8-20kg</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>小型8kg以下</span>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles['select-right']}>
              <div className={styles['select-item-a']}>
                <p className={styles['select-title']}>適用物種</p>
                <div className={styles['select-item']}>
                  <label className={styles['cl-checkbox']}>
                    <input type="checkbox" />
                    <span>狗寶貝</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="checkbox" />
                    <span>貓寶貝</span>
                  </label>
                </div>
              </div>
              <div className={styles['select-item-b']}>
                <p className={styles['select-title']}>姓別</p>
                <div className={styles['select-item']}>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="radio" name="a" />
                    <span>男生</span>
                  </label>
                  <label className={styles['cl-checkbox']}>
                    <input defaultChecked="" type="radio" name="a" />
                    <span>女生</span>
                  </label>
                </div>
                <p className={styles['select-title']}> 毛孩搜尋 </p>
                <div
                  className={`${styles['mb-3']} ${styles['shop-select-out']}`}
                >
                  <input
                    type="text"
                    className={`${styles['form-control']} ${styles['shop-select']}`}
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  )
}
