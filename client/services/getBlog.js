const baseUrl = 'http://localhost:3005/api/getBlog'


export const loadBlogInfo = async (pid = '') => {
  try {
    if (!pid) throw new Error(`pid是必要參數:`)

    const res = await fetch(`${baseUrl}/${pid}`)
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