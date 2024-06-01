// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/blog'

export const loadBlogsInfo = async (params = {}) => {
  const pid=params.pid.pid
  const page=params.page
  const perpage=params.perpage
  try {
    if (!params.pid) throw new Error(`pid是必要參數:`)

    const res = await fetch(`${baseUrl}/${pid}?page=${page}&perpage=${perpage}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data
    } else {
      console.warn('沒有得到資料')
      // 用範例資料當作例外資料
      return 
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return 
  }
}
