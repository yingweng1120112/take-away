import React from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Chatbanner from '@/components/faq/chatbanner'
import styles from '@/styles/faq/app1.module.css'
import Chatmiddle from '@/components/faq/chatmiddle'

export default function Testboard() {
  return (
    <>
      <Header />
      <Chatbanner />
      <Chatmiddle />
      <Footer />
    </>
  )
}
