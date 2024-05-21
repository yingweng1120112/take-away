import React from 'react'
import banner from '@/styles/banner/banner.module.css'
import { useRef, useEffect } from 'react'

export default function BannerSelectPrice() {
  useEffect(() => {
    // 價格滑動
    const rangevalue = document.querySelector('.price-slider')
    // 範圍圈圈
    const rangeInputvalue = document.querySelectorAll('.range-input input')
    // 最大小值區間
    let priceGap = 100
    // 價格框
    const priceInputvalue = document.querySelectorAll('.price-input input')

    for (let i = 0; i < priceInputvalue.length; i++) {
      // priceInputvalue[0] 左邊 ，iceInputvalue[1] 右邊
      priceInputvalue[i].addEventListener('input', (e) => {
        // 解析範圍輸入的最小值和最大值
        let minp = parseInt(priceInputvalue[0].value)
        let maxp = parseInt(priceInputvalue[1].value)
        let diff = maxp - minp

        if (minp < 0) {
          alert('最小價格不可低於 0')
          priceInputvalue[0].value = 0
          minp = 0
        }
        if (maxp > 5000) {
          alert('最大價格不可高於 5000')
          priceInputvalue[1].value = 5000
          maxp = 5000
        }

        //判斷最大值跟最小值相差，相差的值大於0
        if (minp > maxp - priceGap) {
          priceInputvalue[0].value = maxp - priceGap
          minp = maxp - priceGap
          //改變價格滑動元件
          rangeInputvalue[0].value = minp
          let value1 = rangeInputvalue[0].max
          rangevalue.style.left = `${(minp / value1) * 100}%`
          rangeInputvalue[1].value = maxp
          let value2 = rangeInputvalue[1].max
          rangevalue.style.right = `${100 - (maxp / value2) * 100}%`

          //判斷最大值跟最小值相差，相差的值小於0
          if (minp < 0) {
            priceInputvalue[0].value = 0
            priceInputvalue[1].value = priceGap
            maxp = priceGap
            minp = 0
            //改變價格滑動元件
            rangeInputvalue[0].value = minp
            let value1 = rangeInputvalue[0].max
            rangevalue.style.left = `${(minp / value1) * 100}%`
            rangeInputvalue[1].value = maxp
            let value2 = rangeInputvalue[1].max
            rangevalue.style.right = `${100 - (maxp / value2) * 100}%`
          }
        }

        // 檢查值的差距是否符合 和最大值在範圍內
        // 差距大於區間 和 最大P小於最大值
        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
          // classname等於左邊價格
          if (e.target.className === 'min-input') {
            // 左圈等於最小P
            rangeInputvalue[0].value = minp
            //value1等於最左圈最大值
            let value1 = rangeInputvalue[0].max
            //滑動條left大小
            rangevalue.style.left = `${(minp / value1) * 100}%`
          } else {
            // 右圈等於最大P
            rangeInputvalue[1].value = maxp
            //value2等於最右圈最大值
            let value2 = rangeInputvalue[1].max
            //滑動條right大小
            rangevalue.style.right = `${100 - (maxp / value2) * 100}%`
          }
        }
      })
      for (let i = 0; i < rangeInputvalue.length; i++) {
        // 價格滑動條監聽事件
        // rangeInputvalue[0] 左邊圈 ，rangeInputvalue[1] 右邊圈
        rangeInputvalue[i].addEventListener('input', (e) => {
          let minVal = parseInt(rangeInputvalue[0].value)
          let maxVal = parseInt(rangeInputvalue[1].value)

          let diff = maxVal - minVal

          // 檢查價格區間是否有
          if (diff < priceGap) {
            // Check if the input is the min range input 檢查input最小範圍
            if (e.target.className === 'min-range') {
              rangeInputvalue[0].value = maxVal - priceGap
            } else {
              rangeInputvalue[1].value = minVal + priceGap
            }
          } else {
            // 更新 價格 inputs and 範圍 條
            priceInputvalue[0].value = minVal
            priceInputvalue[1].value = maxVal
            rangevalue.style.left = `${
              (minVal / rangeInputvalue[0].max) * 100
            }%`
            rangevalue.style.right = `${
              100 - (maxVal / rangeInputvalue[1].max) * 100
            }%`
          }
        })
      }
    }
  }, [])
  return (
    <>
      <div className={banner['price-input-container']}>
        <div className={`price-input ${banner['price-input']}`}>
          <div className={banner['price-field']}>
            <span>從</span>
            <input type="number" class="min-input" defaultValue="0" />
            <span>~</span>
            <input type="number" class="max-input" defaultValue="5000" />
            <span>元</span>
          </div>
        </div>
        {/* slider */}
        <div className={banner['slider-container']}>
          <div className={`price-slider ${banner['price-slider']}`}></div>
        </div>
      </div>
      <div className={`range-input ${banner['range-input']}`}>
        <input
          type="range"
          className={'min-range'}
          min="0"
          max="5000"
          step="1"
          defaultValue="0"
        />
        <input
          type="range"
          className={'max-range'}
          min="0"
          max="5000"
          step="1"
          defaultValue="5000"
        />
      </div>
    </>
  )
}