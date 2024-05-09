// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/my-products'

const sample = [
  {
    id: 1,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: '無資料預設範例-1',
    price: 25000,
    tags: '蘋果,大螢幕',
  },
  {
    id: 2,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: '無資料預設範例-2',
    price: 15000,
    tags: '蘋果,小螢幕',
  },
]

export const loadProducts = async () => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  try {
    const res = await fetch(baseUrl)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.products
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
