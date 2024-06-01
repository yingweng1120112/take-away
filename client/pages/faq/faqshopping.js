import React, { useState, useEffect } from 'react'
import { loadFaqshopinfos } from '@/services/faq-shopinfo'
import { loadnoticeadoptinfos } from '@/services/notice-adoptinfo'
import Faqcategory from '@/components/faq/faqcategory'
import FaqList from '@/components/faq/faqlist'
import Faqpages from '@/components/faq/faqpages'
import Faqres from '@/components/faq/faqres'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Faqbanner from '@/components/faq/faqbanner'

export default function Faqshopping() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [filters, setFilters] = useState({
    main_question: '',
    searchKeyword: '',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // 每頁顯示的項目數量

  useEffect(() => {
    const fetchData = async () => {
      const resultFaq = await loadFaqshopinfos()
      const resultNotice = await loadnoticeadoptinfos()
      const combinedData = [...resultFaq, ...resultNotice]
      console.log(combinedData)
      setData(combinedData)
      setFilteredData(combinedData)
    }

    fetchData()
  }, [])

  const applyFilters = (data, filters) => {
    const { main_question, searchKeyword } = filters

    return data.filter(
      (item) =>
        (main_question
          ? item.main_question.toLowerCase().includes(main_question)
          : true) &&
        (searchKeyword
          ? item.small_question.toLowerCase().includes(searchKeyword) ||
            item.faq_answer.toLowerCase().includes(searchKeyword)
          : true)
    )
  }

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value.toLowerCase() }
    setFilters(newFilters)
    const filtered = applyFilters(data, newFilters)
    setFilteredData(filtered)
    setCurrentPage(1) // 重置到第一頁
  }

  const handleSearchChange = (value) => {
    handleFilterChange('searchKeyword', value)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  // 計算當前頁面的項目
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage)
  // 計算總頁數
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <>
      <Header />
      <Faqbanner />
      <Faqcategory
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <FaqList data={currentData} />
      <Faqpages
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Faqres />
      <Footer />
    </>
  )
}
