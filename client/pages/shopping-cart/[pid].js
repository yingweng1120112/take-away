import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import { loadProduct } from '@/services/testproduct'

export default function Detail() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()

  const [product, setProduct] = useState({
    product_id: 10001,
    name: '無資料預設範例-1',
    brand_name: 'none',
    price: 0,
    species: 'none',
  })

  const getProduct = async (pid) => {
    // 開載入動畫函式

    const data = await loadProduct(pid)
    console.log(data)
  }

  // 樣式3: didMount+didUpdate
  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      <Link href="/testproduct/list">連至 列表頁</Link>
      <br />
      {/* 用isLoading作條件式渲染，決定要呈現載入指示動畫還是內容 */}
    </>
  )
}
