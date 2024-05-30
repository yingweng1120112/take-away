import React from 'react'
import styles from '@/styles/faq/chatroom.module.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Chatbanner from '@/components/faq/chatbanner'
import Chatleft from '../../components/faq/chatleft'
import Chatmiddle from '../../components/faq/chatmiddle'
import Chatright from '../../components/faq/chatright'
import App from '@/pages/faq/app'
export default function Chatroom() {
  return (
    <>
      <Header />
      <Chatbanner />
      <div className={styles['container_chatroom']}>
      </div>
        <App />
      <Footer />
    </>
  )
}
