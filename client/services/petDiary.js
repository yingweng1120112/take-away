// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/petDiary'

const sample = [
  {
    id: 10005,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: '無資料預設範例-1',
    age:0,
    gender:"男生",
  },
  {
    id: 10008,
    picture: 'https://via.placeholder.com/150',
    stock: 5,
    name: '無資料預設範例-2',
    age:1,
    gender:"女生",
  },
]

export const loadPetsInfo = async () => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  try {
    
    const res = await fetch(baseUrl)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.pets_info
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
      return sample[0]
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return sample[0]
  }
}