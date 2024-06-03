import express from 'express'
const router = express.Router()
import * as crypto from 'crypto'

/* GET home page. */
router.get('/', function (req, res, next) {
  const amount = req.query.amount
  //綠界全方位金流技術文件：
  // https://developers.ecpay.com.tw/?p=2856
  // 信用卡測試卡號：4311-9522-2222-2222 安全碼 222
  const returnUrl = req.query.returnUrl || 'http://localhost:3000/payment/callback'
  ////////////////////////改以下參數即可////////////////////////
  //一、選擇帳號，是否為測試環境
  const MerchantID = '3002607' //必填
  const HashKey = 'pwFHCqoQZGmho4w6' //3002607
  const HashIV = 'EkRm7iFT261dpevs' //3002607
  let isStage = true // 測試環境： true；正式環境：false

  //二、輸入參數
  const TotalAmount = amount
  const TradeDesc = '線上認養付款'
  const ItemName = '感謝您的認養'
  const ReturnURL = 'https://www.ecpay.com.tw'
  const OrderResultURL = returnUrl //前端成功頁面
  const ChoosePayment = 'ALL'

  ////////////////////////以下參數不用改////////////////////////
  const stage = isStage ? '-stage' : ''
  const algorithm = 'sha256'
  const digest = 'hex'
  const APIURL = `https://payment${stage}.ecpay.com.tw//Cashier/AioCheckOut/V5`
  const MerchantTradeNo = `od${new Date().getFullYear()}${(
    new Date().getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}${new Date()
      .getDate()
      .toString()
      .padStart(2, '0')}${new Date()
        .getHours()
        .toString()
        .padStart(2, '0')}${new Date()
          .getMinutes()
          .toString()
          .padStart(2, '0')}${new Date()
            .getSeconds()
            .toString()
            .padStart(2, '0')}${new Date().getMilliseconds().toString().padStart(2)}`

  const MerchantTradeDate = new Date().toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  //三、計算 CheckMacValue 之前
  let ParamsBeforeCMV = {
    MerchantID: MerchantID,
    MerchantTradeNo: MerchantTradeNo,
    MerchantTradeDate: MerchantTradeDate.toString(),
    PaymentType: 'aio',
    EncryptType: 1,
    TradeDesc: TradeDesc,
    ItemName: ItemName,
    TotalAmount: TotalAmount,
    ReturnURL: ReturnURL,
    ChoosePayment: ChoosePayment,
    OrderResultURL,
  }

  //四、計算 CheckMacValue
  function CheckMacValueGen(parameters, algorithm, digest) {
    // const crypto = require('crypto')
    let Step0

    Step0 = Object.entries(parameters)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    function DotNETURLEncode(string) {
      const list = {
        '%2D': '-',
        '%5F': '_',
        '%2E': '.',
        '%21': '!',
        '%2A': '*',
        '%28': '(',
        '%29': ')',
        '%20': '+',
      }

      Object.entries(list).forEach(([encoded, decoded]) => {
        const regex = new RegExp(encoded, 'g')
        string = string.replace(regex, decoded)
      })

      return string
    }

    const Step1 = Step0.split('&')
      .sort((a, b) => {
        const keyA = a.split('=')[0]
        const keyB = b.split('=')[0]
        return keyA.localeCompare(keyB)
      })
      .join('&')
    const Step2 = `HashKey=${HashKey}&${Step1}&HashIV=${HashIV}`
    const Step3 = DotNETURLEncode(encodeURIComponent(Step2))
    const Step4 = Step3.toLowerCase()
    const Step5 = crypto.createHash(algorithm).update(Step4).digest(digest)
    const Step6 = Step5.toUpperCase()
    return Step6
  }
  const CheckMacValue = CheckMacValueGen(ParamsBeforeCMV, algorithm, digest)

  //五、將所有的參數製作成 payload
  const AllParams = { ...ParamsBeforeCMV, CheckMacValue }
  const inputs = Object.entries(AllParams)
    .map(function (param) {
      return `<input name=${param[0]} value="${param[1].toString()}"><br/>`
    })
    .join('')

  //六、製作送出畫面
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>全方位金流-測試</title>
  </head>
  <body style="position: relative; height: 100%;background-color:#faeed1;">
  <form method="post" action="${APIURL}" style="position: absolute; top: 26vh; left: 81vh; width: 400px; height: 400px; background-color:white; border-radius: 30px;border: 3px solid black; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);">
      <div style="display: none;">
          ${inputs}
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; text-align: center; color:#895e3c">
          <div style="height: 25%; border-bottom: 3px solid black;font-weight:bolder;letter-spacing: 10px;">
              <h1>${TradeDesc}</h1>
          </div>
          <div style="height: 50%; display: flex; align-items: center; justify-content: center;flex-direction: column;font-weight:bolder;letter-spacing: 7px;">
              <h2> ${ItemName}</h2>
              <h2>捐款金額: ${TotalAmount}</h2>
          </div>
          <input type="submit" value="確定送出" style="height: 15%; border-radius: 0px 0px 25px 25px;background-color:#d7b67a;border-top: 3px solid black;font-size:1.5rem;font-weight:bolder;color:#895e3c;letter-spacing: 5px;">
      </div>
  </form>
</body>

  </html>
  `

  res.send(htmlContent)

  //   const htmlContent = `
  //   <!DOCTYPE html>
  //   <html>
  //   <head>
  //       <title></title>
  //   </head>
  //   <body>
  //       <form method="post" action="${APIURL}">
  //   ${inputs}
  //   <input type="submit" value="送出參數" style="display:none">
  //       </form>
  //   <script>
  //     document.forms[0].submit();
  //   </script>
  //   </body>
  //   </html>
  //   `

  //   res.send(htmlContent)

  // 叫react送form的作法
  //res.json({ htmlContent })
})

export default router
