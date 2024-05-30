// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/petDiary'


export const loadPetsInfo = async (params = {}) => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  const searchParams = new URLSearchParams(params)
  const url = `${baseUrl}?${searchParams.toString()}`
  try {
    const res = await fetch(url)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data
    } else {
      console.warn('沒有得到資料')
      return {}
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return {}
  }
}


export const loadPetInfo = async (pid = '') => {
  try {
    if (!pid) throw new Error('pid是必要參數')

    const res = await fetch(`${baseUrl}/${pid}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.pet_info
    } else {
      console.warn('沒有得到資料')
      // 用範例資料當作例外資料
      return {}
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return {}
  }
}