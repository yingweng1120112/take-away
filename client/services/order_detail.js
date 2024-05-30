// const baseUrl = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
const baseUrl = 'http://localhost:3005/api/order_detail'

const sample = [
  {
    "order_detail_id": 10001,
    "product_id": 10001,
    "amount": 0,
    "unit_price": 0,
    "totail_price": 0
  },
  {
    "order_detail_id": 10002,
    "product_id": 10002,
    "amount": 0,
    "unit_price": 0,
    "totail_price": 0
  },
]

// 因應要分頁和查詢，所以回應整個data
export const loadOrderDetails = async (order_id) => {
  const url = `${baseUrl}/${order_id}`;

  try {
    const res = await fetch(url);
    const resData = await res.json();

    // 判断是否成功
    if (resData.status === 'success') {
      // 根据具体返回数据结构返回数据
      return resData.data;
    } else {
      console.warn('没有得到数据');
      return {};
    }
  } catch (e) {
    console.error(e);
    return {};
  }
};


// export const loadOrderDetail = async (order_detail_id= '') => {
//   try {
//     if (!order_detail_id) throw new Error('order_detail_id是必要參數');

//     const res = await fetch(`${baseUrl}/${order_detail_id}`);
//     const resData = await res.json();
//     // 判斷是否成功
//     if (resData.status === 'success') {
//       console.log('success', resData.data)
//       return resData.data
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

