// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/pet_action'

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

// export const loadPetInfos = async () => {
//   // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
//   try {
//     const res = await fetch(baseUrl)
//     const resData = await res.json()
//     // 判斷是否成功
//     if (resData.status === 'success') {
//       return resData.data.pet_info
//     } else {
//       console.warn('沒有得到資料')
//       return {}
//     }
//   } catch (e) {
//     console.error(e)
//     // 用範例資料當作例外資料
//     return sample
//   }
// }

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

export const loadPetActions = async () => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  try {
    const res = await fetch(baseUrl)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.pet_action
    } else {
      console.warn('沒有得到資料')
      return {}
    }
  } catch (e) {
    console.error(e)
    // 用範例資料當作例外資料
    return sample
  }
}

export const loadPetAction = async (pet_id = '') => {
  try {
    if (!pet_id) throw new Error('pet_id是必要參數')

    const res = await fetch(`${baseUrl}/${pet_id}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.pet_action
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
