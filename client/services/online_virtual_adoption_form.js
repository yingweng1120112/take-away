// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/online_virtual_adoption_form'

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

export const adoptInfos = async (params = {}) => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
   // 使用URLSearchParams產生查詢字串
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

// export const loadPetInfo = async (pet_id = '') => {
//   try {
//     if (!pet_id) throw new Error('pet_id是必要參數')

//     const res = await fetch(`${baseUrl}/${pet_id}`)
//     const resData = await res.json()
//     // 判斷是否成功
//     if (resData.status === 'success') {
//       return resData.data.pet_info
//     } else {
//       console.warn('沒有得到資料')
//       // 用範例資料當作例外資料
//       return sample[0]
//     }
//   } catch (e) {
//     console.error(e)
//     // 用範例資料當作例外資料
//     return sample[0]
//   }
// }
