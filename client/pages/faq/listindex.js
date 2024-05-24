import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagi from '@/pages/pageschange/pagi'
import FaqlistTest from '../../components/faq/faqlist'
import { loadFaqshopinfos } from '@/services/faq-shopinfo'

export default function Listindex(totalPosts) {
  // 設定兩個狀態變數，一個是分頁狀態，另一個是單一分頁要顯示幾筆資料
  const [faqs, setFaqs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  const getProducts = async () => {
    const res = await loadFaqshopinfos()
    if (Array.isArray(res)) {
      setFaqs(res)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = faqs.slice(firstPostIndex, lastPostIndex)

  return (
    <>
        <Pagi
          totalPosts={faqs.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <FaqlistTest faqs={currentPosts} />
    </>
  )
}

