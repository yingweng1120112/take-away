// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/products'

const sample = [
  {
    product_id: 10001,
    name: '無資料預設範例-1',
    brand_name: 'none',
    price: 0,
    species: 'none',
  },
  {
    product_id: 10002,
    name: '無資料預設範例-2',
    brand_name: 'none',
    price: 0,
    species: 'none',
  },
]

// 因應要分頁和查詢，所以回應整個data
export const loadProducts = async (params = {}) => {
  // 使用URLSearchParams產生查詢字串
  // const searchParams = new URLSearchParams(params)
  // const url = `${baseUrl}?${searchParams.toString()}`
  const searchParams = new URLSearchParams(params)
  const url = `${baseUrl}?${searchParams.toString()}`

  try {
    // 使用URLSearchParams產生查詢字串

    const res = await fetch(url)
    const data = await res.json()

    // 判斷是否成功
    if (data.status === 'success') {
      // 因應要分頁和查詢，所以回應整個data
      return data.data
    } else {
      console.warn('沒有得到資料')
      return {}
    }
  } catch (e) {
    console.error(e)
    return {}
  }
}

export const loadProduct = async (product_id = '') => {
  try {
    if (!product_id) throw new Error('product_id是必要參數')

    const res = await fetch(`${baseUrl}/${product_id}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      console.log('success', resData.data)
      return resData.data
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
