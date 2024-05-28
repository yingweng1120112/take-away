// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
const baseUrl = 'http://localhost:3005/api/user-info'

const sample = [
  {
    user_id: 10001,
    name: '榮恩',
    password: '1234567',
    phone: '0912345678',
    email: 'ron@test.com',
    pic: '',
    address_detail: '桃園市龜山區萬壽路１段14號',
    status: 'none',
    google_uid: 'none',
    line_uid: 'none',
    line_access_token: 'none',
    created_at: 'none',
    updated_at: 'none',
  },
  {
    user_id: 10002,
    name: '洪海仁',
    password: 'Pa55w.rd02',
    phone: '0987654321',
    email: 'Hairen02@gmail.com',
    pic: '10002.jpg',
    address_detail: '屏東縣鹽埔鄉博愛街58號',
    status: 'none',
    google_uid: 'none',
    line_uid: 'none',
    line_access_token: 'none',
    created_at: 'none',
    updated_at: 'none',
  },
]

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

// client/services/user-info.js

export const loadUserInfoSpecific = async (user_id) => {
  try {
    if (!user_id) throw new Error('user_id是必要參數')

    const res = await fetch(`${baseUrl}/${user_id}`)
    const resData = await res.json()
    // 判斷是否成功
    if (resData.status === 'success') {
      return resData.data.user_info[0]  // 確保只返回單個用戶信息
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

