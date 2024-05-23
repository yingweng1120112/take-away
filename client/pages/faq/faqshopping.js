import React from 'react'
import styles from '@/styles/faq/faqshopping.module.css'
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaBox,
  FaReceipt,
  FaBowlFood,
  FaHand,
  FaDog,
  FaCat,
  FaGear,
  FaPaw,
} from 'react-icons/fa6'
import { IoPawOutline } from "react-icons/io5"
import Indexservice from '@/components/index-service/indexservice'

export default function Faqshopping() {
  return (
    <>
    <Indexservice />
      <div className={styles['container_faq']}>
        <div className={styles['box_search']}>
          <input
            className={styles['searchBar']}
            type="text"
            name="searchBar"
            placeholder="搜尋常見問題"
          />
          <a href="#" className={styles['faq_icons']}>
            <FaMagnifyingGlass className={styles['faq_icons']} />
          </a>
          {/* <i
            className={`${styles['faq_icons']} fa-solid fa-magnifying-glass`}
          ></i> */}
        </div>
      </div>
      <div className={styles['box_options']}>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaCartShopping className={styles['faq_icons']} />
            {/* <i className={`${styles['faq_icons']} fa-solid fa-cart-shopping`}></i> */}
            <h4 className={styles['faq_text']}>訂單相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaBox className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-box"></i> */}
            <h4 className={styles['faq_text']}>退換貨相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaReceipt className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-receipt"></i> */}
            <h4 className={styles['faq_text']}>發票相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaBowlFood className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-bowl-food"></i> */}
            <h4 className={styles['faq_text']}>商品相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaHand className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-hand"></i> */}
            <h4 className={styles['faq_text']}>領養相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaDog className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-dog"></i> */}
            <h4 className={styles['faq_text']}>狗狗相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaCat className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-cat"></i> */}
            <h4 className={styles['faq_text']}>貓貓相關</h4>
          </a>
        </div>
        <div className={styles['faq_options']}>
          <a href="#" className={styles[('faq_links', 'faq_icons')]}>
            <FaGear className={styles['faq_icons']} />
            {/* <i className="faq_icons fa-solid fa-gear"></i> */}
            <h4 className={styles['faq_text']}>其他相關</h4>
          </a>
        </div>
      </div>
      <div>
        <div className={styles['box_ans']}>
          <div className={styles['container_ans']}>
            <div className={styles['wrapper']}>
              <button className={styles['toggle']}>
                我該如何訂購商品？
                <FaPaw className={styles['faq_icons']} />
                {/* <i className="icon fa-solid fa-paw"></i> */}
              </button>
              <div className={styles['content_ans']}>
                <img
                  className={styles['img_ans']}
                  src="../img/ans_dog1.jpg"
                  alt=""
                />
                <p>
                  您可以在我們的網站上瀏覽我們的商品目錄，並將您感興趣的商品添加到購物車中。完成購物後，您可以進入結賬流程並提供所需的付款和送貨信息。
                </p>
              </div>
            </div>
            <div className={styles['wrapper']}>
              <button className={styles['toggle']}>
                我們可以更改訂單嗎？
                <FaPaw className={styles['faq_icons']} />
                {/* <i className="icon fa-solid fa-paw"></i> */}
              </button>
              <div className={styles['content_ans']}>
                <img
                  className={styles['img_ans']}
                  src="../img/ans_dog2.png"
                  alt=""
                />
                <p>
                  如果您需要更改訂單，請在提交訂單後盡快聯繫我們的客戶服務團隊。我們將竭盡所能滿足您的需求，但可能會受到訂單處理狀態的限制。
                </p>
              </div>
            </div>
            <div className={styles['wrapper']}>
              <button className={styles['toggle']}>
                有哪些付款方式？
                <FaPaw className={styles['faq_icons']} />
                {/* <i className="icon fa-solid fa-paw"></i> */}
              </button>
              <div className={styles['content_ans']}>
                <img
                  className={styles['img_ans']}
                  src="../img/ans_dog3.jpg"
                  alt=""
                />
                <p>
                  我們接受信用卡（Visa、MasterCard、American
                  Express等）和PayPal等常見的付款方式。在結賬過程中，您將看到所有可用的付款選項。
                </p>
              </div>
            </div>
            <div className={styles['wrapper']}>
              <button className={styles['toggle']}>
                多久可以收到我的訂單？
                <FaPaw className={styles['faq_icons']} />
                {/* <i className="icon fa-solid fa-paw"></i> */}
              </button>
              <div className={styles['content_ans']}>
                <img
                  className={styles['img_ans']}
                  src="../img/ans_dog4.png"
                  alt=""
                />
                <p>
                  我們會盡快處理您的訂單並安排送貨。送貨時間取決於您所在地區以及選擇的送貨方式。一般而言，大多數訂單將在3至7個工作日內送達。
                </p>
              </div>
            </div>
            <div className={styles['wrapper']}>
              <button className={styles['toggle']}>
                如果我收到損壞的商品怎麼辦？
                <FaPaw className={styles['faq_icons']} />
                {/* <i className="icon fa-solid fa-paw"></i> */}
              </button>
              <div className={styles['content_ans']}>
                <img
                  className={styles['img_ans']}
                  src="../img/ans_dog5.png"
                  alt=""
                />
                <p>
                  是的，我們提供退貨和退款服務。請在收到商品後的一定時間內與我們聯繫以了解退貨和退款政策的詳細信息。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['faq_pagebox']}>
        <div className={styles['faq_pagination']}>
          <a href="#">&laquo;</a>
          <a className={styles['active']} href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
      <div className={styles['faq_res']}>
          <a href="#">
            <img
              className={styles['img_res']}
              src="../img/faq_res.jpg"
              alt=""
            />
          </a>
        <a href="#">
          <img
            className={styles['img_res2']}
            src="../img/faq_catpaw1.png"
            alt=""
          />
        </a>
      </div>
    </>
  )
}
