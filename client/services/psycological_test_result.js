// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/psycological_test_result'

const sample = [
  {
    result_id: 10001,
    personality_type: 'none',
    pic: 'none',
    type__content: '無資料1',
  },
  {
    result_id: 10002,
    personality_type: 'none',
    pic: 'none',
    type__content: '無資料2',
  },
]

// 因應要分頁和查詢，所以回應整個data
export const loadProducts = async (params = {}) => {
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

export const loadProduct = async (pid = '') => {
  try {
    if (!pid) throw new Error('pid是必要參數')

    const res = await fetch(`${baseUrl}/${pid}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.product
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
