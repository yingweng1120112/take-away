const baseUrl = 'http://localhost:3005/api/faq-report'
const sample = [
  {
    qusetion_id: 10001,
    main_question: '訂單相關',
    small_question: '我該如何訂購商品？',
    faq_answer:
      '您可以在我們的網站上瀏覽我們的商品目錄，並將您感興趣的商品添加到購物車中。完成購物後，您可以進入結帳流程並提供所需的付款和送貨信息。',
  },
  {
    qusetion_id: 10002,
    main_question: '訂單相關',
    small_question: '我們可以更改訂單嗎？',
    faq_answer:
      '如果您需要更改訂單，請在提交訂單後盡快聯繫我們的客戶服務團隊。我們將竭盡所能滿足您的需求，但可能會受到訂單處理狀態的限制。',
  },
]
export const loadFaqshopinfos = async () => {
  try {
    const res = await fetch(baseUrl)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.faqs
    } else {
      console.warn('沒有得到資料')
      return []
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return sample
  }
}
export const loadFaqshopinfo = async (qid = '') => {
  try {
    if (!qid) throw new Error('pid是必要參數')

    const res = await fetch(`${baseUrl}/${pid}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.faq
    } else {
      console.warn('沒有得到資料')
      // 用範例資料當作例外資料
      return sample[0]
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return sample[0]
  }
}
