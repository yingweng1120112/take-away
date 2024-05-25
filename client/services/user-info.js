// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
const baseUrl = 'http://localhost:3005/api/user-info'

// 因應要分頁和查詢，所以回應整個data
export const loadUserInfo = async (params = {}) => {
  // 使用URLSearchParams產生查詢字串
  const searchParams = new URLSearchParams(params)
  const url = `${baseUrl}?${searchParams.toString()}`

  try {
    const res = await fetch(url)
    const resData = await res.json()

    // 判斷是否成功
    if (resData.status === 'success') {
      // 因應要分頁和查詢，所以回應整個data
      return resData.data
    } else {
      console.warn('沒有得到資料')
      return {}
    }
  } catch (e) {
    console.error(e)
    return {}
  }
}

export const loadUserInfoSpecific = async (user_id = '') => {
  try {
    if (!user_id) throw new Error('user_id是必要參數')

    const res = await fetch(`${baseUrl}/${user_id}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.user
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
