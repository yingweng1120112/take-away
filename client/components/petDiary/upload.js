import { useState } from 'react'
import styles from '@/styles/petDiary/petDiary.module.css'
import PrevieImage from '@/components/petDiary/previeImage'
import { useRouter } from 'next/router'
import { AiFillPicture } from 'react-icons/ai'

export default function ImageUpload(data) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    content: '',
    pic1: '',
    pic2: '',
    pic3: '',
    pic4: '',
    pic5: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(formData)
    // console.log('selectedFile:', selectedFile)
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  // 記錄被選中的檔案
  const [selectedFile, setSelectedFile] = useState('')
  // 預覽圖片的網址(呼叫`URL.createObjectURL`產生)
  const [previewURL1, setPreviewURL1] = useState('')
  const [previewURL2, setPreviewURL2] = useState('')
  const [previewURL3, setPreviewURL3] = useState('')
  const [previewURL4, setPreviewURL4] = useState('')
  const [previewURL5, setPreviewURL5] = useState('')

  const handleFileChange = (e) => {
    const fileList = e.target.files
    console.log('1:fileList', fileList)
    if (fileList.length > 5) {
      alert('最多只能選擇5个文件！')
      setSelectedFile('') // 清空文件輸入
    } else if (fileList) {
      // console.log('fileList:', fileList)
      // console.log('fileList0:', fileList[0])
      setSelectedFile(fileList)
      if (fileList[0]) {
        setPreviewURL1(URL.createObjectURL(fileList[0]))
        // console.log(fileList[0].name)
        setFormData({
          ...formData,
          ['pic1']: fileList[0].name,
        })
      }
      if (fileList[1]) {
        setPreviewURL2(URL.createObjectURL(fileList[1]))
        // console.log(fileList[1].name)
        setFormData({
          ...formData,
          ['pic1']: fileList[0].name,
          ['pic2']: fileList[1].name,
        })
      }
      if (fileList[2]) {
        setPreviewURL3(URL.createObjectURL(fileList[2]))
        // console.log(fileList[2].name)
        setFormData({
          ...formData,
          ['pic1']: fileList[0].name,
          ['pic2']: fileList[1].name,
          ['pic3']: fileList[2].name,
        })
      }
      if (fileList[3]) {
        setPreviewURL4(URL.createObjectURL(fileList[3]))
        // console.log(fileList[3].name)
        setFormData({
          ...formData,
          ['pic1']: fileList[0].name,
          ['pic2']: fileList[1].name,
          ['pic3']: fileList[2].name,
          ['pic4']: fileList[3].name,
        })
      }
      if (fileList[4]) {
        setPreviewURL5(URL.createObjectURL(fileList[4]))
        // console.log(fileList[4].name)
        setFormData({
          ...formData,
          ['pic1']: fileList[0].name,
          ['pic2']: fileList[1].name,
          ['pic3']: fileList[2].name,
          ['pic4']: fileList[3].name,
          ['pic5']: fileList[4].name,
        })
      }
      // console.log(formData)
    } else {
      setSelectedFile('')
      setPreviewURL1('')
      setPreviewURL2('')
      setPreviewURL3('')
      setPreviewURL4('')
      setPreviewURL5('')
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.content || formData.content.length < 1) {
      alert('必須要有內容')
    } else {
      const { pid } = router.query

      const fd = new FormData()
      console.log('selectedFile:', selectedFile)

      fd.append('avatar', selectedFile[0])
      fd.append('avatar', selectedFile[1])
      fd.append('avatar', selectedFile[2])
      fd.append('avatar', selectedFile[3])
      fd.append('avatar', selectedFile[4])

      // console.log('fd.avatar', fd.get('avatar'))

      try {
        const res = await fetch(`http://localhost:3005/api/blog/${pid}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        const res2 = await fetch(`http://localhost:3005/api/uploadFile`, {
          method: 'POST',
          body: fd,
        })
        if (!res.ok) {
          throw new Error('Network res was not ok')
        }
        const data = await res.json()
        // console.log(data)

        if (res.status === 200) {
          // console.log('貼文已成功送出', data)
          alert('貼文已成功送出')
        } else {
          // console.log('貼文送出失敗', data.message)
          alert(`貼文送出失敗: ${data.message}`)
        }
        window.location.reload()
      } catch (error) {
        // console.log()
        // console.error('貼文送出錯誤:', error)
        alert(`貼文送出錯誤:${error.message}`)
      }
    }
  }
  if (data.data[1] == true) {
    return (
      <>
        <div className={styles['post']}>
          <img
            src={`/img/diarySearch/${data.data[0]}`}
            alt=""
            className={styles['head-img']}
          />
          <div className={styles['post-right']} style={{ width: '100%' }}>
            <form name="form1" onSubmit={handleSubmit}>
              <textarea
                id="content"
                name="content"
                className={styles['content-word']}
                placeholder="輸入你想分享的趣事"
                onChange={handleChange}
              />
              <div className={styles['post-upload']}>
                <div className={styles['post-upload-btn-container']}>
                  <div>
                    <label className={styles['button']} htmlFor="previewImage">
                      <div className={styles['inputFile']}>
                        <AiFillPicture />
                        <i>圖片上傳</i>
                      </div>
                    </label>
                    <input
                      id="previewImage"
                      type="file"
                      name="avatar"
                      accept="image/jpeg,image/png"
                      className={styles['input-pic']}
                      onChange={handleFileChange}
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
                  <PrevieImage
                    value={[
                      previewURL1,
                      previewURL2,
                      previewURL3,
                      previewURL4,
                      previewURL5,
                    ]}
                  />
                </div>
                <input
                  type="submit"
                  acceptf="image/*"
                  className={`${styles['button']} ${styles['upload-btn-phone']}`}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  return<></>
}
