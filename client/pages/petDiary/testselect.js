import React from 'react'
import banner from '@/styles/banner/banner.module.css'
import { useState, useEffect } from 'react'

export default function test() {
  const petgender = ['男生', '女生']
  const [gender, setgender] = useState({ gender: ['男生'] })

  const handleCheckboxGroup = (e) => {
    // 宣告方便使用的tv名稱，取得觸發事件物件的目標值
    const tv = e.target.value
    
    // 判斷是否有在pets陣列中
    if (gender.gender.includes(tv)) {
      console.log(gender)
      // 如果有===>移出陣列
      const nextgender = gender.gender.filter((v) => v !== tv)
      setgender(nextgender)
    } else {
      // 否則===>加入陣列
      const nextgender = [...(gender.gender), tv]
      setgender(nextgender)
    }
  }
  return (
    <div className={banner['select-item']}>
      {petgender.map((v, i) => {
        console.log(gender.gender)
        return (
          <label
            // 當初次render後不會再改動，即沒有新增、刪除、更動時，可以用索引當key
            key={i}
          >
            <input
              type="checkbox"
              value={v}
              checked={gender.gender.includes(v)}
              onChange={handleCheckboxGroup}
            />
            <span>{v}</span>
          </label>
        )
      })}
    </div>
  )
}
