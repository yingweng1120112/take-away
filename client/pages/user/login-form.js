import { useState } from 'react'


export default function LoginForm() {


  return (
    <>
      <p class="tip">點選圖片中的按鈕以切換登入、註冊</p>
      <div class="cont">
        <div class="form sign-in">
          <h2>立即參觀！</h2>
          <label>
            <span>Email：</span>
            <input type="email" />
          </label>
          <label>
            <span>密碼：</span>
            <input type="password" />
          </label>
          <p class="forgot-pass">忘記密碼？</p>
          <button type="button" class="submit">登入</button>
          <button type="button" class="fb-btn">
            Connect with <span>Google</span>
          </button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>老朋友</h2>
              <h6>趕快回來~我們有新朋友想介紹給你</h6>
            </div>
            <div class="img__text m--in">
              <h2>新成員？</h2>
              <p>快來了解各種毛孩<br />以及豐富的寵物用品吧！</p>
            </div>
            <div class="img__btn">
              <span class="m--up">註冊</span>
              <span class="m--in">登入</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>歡迎加入毛孩樂園</h2>
            <label>
              <span>姓名：</span>
              <input type="text" />
            </label>
            <label>
              <span>Email：</span>
              <input type="email" />
            </label>
            <label>
              <span>密碼：</span>
              <input type="password" />
            </label>
            <button type="button" class="submit">註冊</button>
            <button type="button" class="fb-btn">
              Join with <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
