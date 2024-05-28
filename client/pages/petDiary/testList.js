import { useState, useEffect } from 'react'
import Link from 'next/link'

import { loadPetsInfo } from '@/services/petDiary'

// 資料夾的中的`list.js`檔案代表靜態or固定的路由，例如 `/product/list` 就是這個檔案
export default function DiarySearch() {
  // 注意1: 初始值至少要空白陣列。首次render會使用初始值，對應由伺服器得到的物件陣列模型。
  // 注意2: 在應用程式執行過程中，狀態一定都要保持陣列資料類型
  const [petsInfo, setPetsInfo] = useState([])

  const getPetInfo = async () => {
    const data = await loadPetsInfo()
    // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render) ===> 顯示資料
    // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
    if (Array.isArray(data)) {
      setPetsInfo(data)
    }
  }

  // // 樣式2: 元件初次渲染之後(after)執行一次，之後不會再執行
  useEffect(() => {
    getPetInfo()
  }, [])

  return (
    <>
      <h1>寵物列表</h1>
      <ul>
        {petsInfo.map((v, i) => {
          
          return (
            <li key={v.pet_id}>
              <Link href={`/petDiary/${v.pet_id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}