import React from 'react'
import { useState, useEffect } from 'react'
import styles from '@/styles/petDiary/petDiary.module.css'

export default function UpLoad() {
  const {
    pet_id: pet_idField,
    content: contentField,
  } = document.form1;
  function sendData(e) {
    e.preventDefault() // 不要讓有外觀的表單以傳統的方式送出

    $isPass = true

    if ($isPass) {
      const fd = new FormData(document.form1) // 看成沒有外觀的表單
      fetch('petDiary_add.js', {
        method: 'POST',
        body: fd,
      })
        .then((r) => r.json())
        .then((result) => {
          console.log(result)
          if (result.success) {
            // alert('資料新增成功')
            successModal.show()
          } else {
            // alert('資料新增失敗')
            if (result.error) {
              failureInfo.innerHTML = result.error
            } else {
              failureInfo.innerHTML = '資料新增沒有成功'
            }
            failureModal.show()
          }
        })
        .catch((ex) => {
          console.log(ex)
          // alert('資料新增發生錯誤' + ex)
          failureInfo.innerHTML = '資料新增發生錯誤' + ex
          failureModal.show()
        })
    }
  }
  var imageProc = function (input) {
    if (input.files && input.files[0]) {
      // 建立一個 FileReader 物件
      var reader1 = new FileReader()
      var reader2 = new FileReader()
      var reader3 = new FileReader()
      var reader4 = new FileReader()
      var reader5 = new FileReader()
      // 當檔案讀取完後，所要進行的動作
      reader1.onload = function (e) {
        // 顯示圖片
        $('#show_image1')
          .attr('src', e.target.result)
          .css('height', '100px')
          .css('width', '100px')
      }
      reader2.onload = function (e) {
        // 顯示圖片
        $('#show_image2')
          .attr('src', e.target.result)
          .css('height', '100px')
          .css('width', '100px')
      }
      reader3.onload = function (e) {
        // 顯示圖片
        $('#show_image3')
          .attr('src', e.target.result)
          .css('height', '100px')
          .css('width', '100px')
      }
      reader4.onload = function (e) {
        // 顯示圖片
        $('#show_image4')
          .attr('src', e.target.result)
          .css('height', '100px')
          .css('width', '100px')
      }
      reader5.onload = function (e) {
        // 顯示圖片
        $('#show_image5')
          .attr('src', e.target.result)
          .css('height', '100px')
          .css('width', '100px')
      }
      if(input.files[0]){reader1.readAsDataURL(input.files[0])}
      if(input.files[1]){reader2.readAsDataURL(input.files[1])}
      if(input.files[2]){reader3.readAsDataURL(input.files[2])}
      if(input.files[3]){reader4.readAsDataURL(input.files[3])}
      if(input.files[4]){reader5.readAsDataURL(input.files[4])}
      

    }
  }


  return (
    <form name="form1" onsubmit="sendData(event)">
      <textarea
        id="message"
        name="message"
        className={styles['content-word']}
        placeholder="輸入你想分享的趣事"
      />
      <div className={styles['post-upload']}>
        <div className={styles['post-upload-btn-container']}>
          <div>
            <label className={styles['button']} for="previewImage">
              <i className={styles['fa-solid fa-image']}>圖片上傳</i>
            </label>
            <input
              id="previewImage"
              type="file"
              name="avatar"
              accept="image/jpeg,image/png"
              className={styles['input-pic']}
              onChange={(e)=>{
                imageProc(e.target)
              }}
              multiple
            />
          </div>
          <input
            type="submit"
            acceptf="image/*"
            className={`${styles['button']} ${styles['upload-btn-pc']}`}
          />
        </div>
        <div className={styles['post-upload-pic']}>
          <img id="show_image1" src="" className={styles['show-img']} />
          <img id="show_image2" src="" className={styles['show-img']} />
          <img id="show_image3" src="" className={styles['show-img']} />
          <img id="show_image4" src="" className={styles['show-img']} />
          <img id="show_image5" src="" className={styles['show-img']} />
        </div>
        <input
          type="submit"
          acceptf="image/*"
          className={`${styles['button']} ${styles['upload-btn-phone']}`}
        />
      </div>
    </form>
  )
}
