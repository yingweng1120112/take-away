import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useRouter } from 'next/router'
import styles from '@/styles/petDiary/petDiary.module.css'
import PrevieImage from '@/components/petDiary/previeImage'
import PrevieImageEdit from '@/components/petDiary/previeImageEdit'
import { loadBlogInfo } from '@/services/getBlog'
import { AiFillPicture } from 'react-icons/ai'

export default function MyVerticallyCenteredModal(props) {
  const router = useRouter()
  // console.log(props)
  const [formData, setFormData] = useState({
    blog_id:'',
    content: '',
    pic1: '',
    pic2: '',
    pic3: '',
    pic4: '',
    pic5: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
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
    if (fileList.length > 5) {
      alert('最多只能選擇5个文件！')
      setSelectedFile('') // 清空文件輸入
    } else if (e.target.files) {
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
          method: 'PUT',
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
  const [blog, setBlog] = useState({
    content: '',
  })

  const getBlogInfo = async (pid = '') => {
    const data = await loadBlogInfo(pid)
    console.log('data', data)
    console.log('data.blog_info', data.blog_info)
    console.log('data.blog_info[0]', data.blog_info[0])
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      setBlog(data.blog_info[0])
    }
  }

  useEffect(() => {
    if (props.show == true) {
      getBlogInfo(props.blog)
      setFormData({...formData,'blog_id':props.blog})
      setSelectedFile('')
      setPreviewURL1('')
      setPreviewURL2('')
      setPreviewURL3('')
      setPreviewURL4('')
      setPreviewURL5('')
    }
  }, [props])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">貼文編輯</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#FDF7E4' }}>
        <form name="form2" onSubmit={handleSubmit}>
          <textarea
            id="content"
            name="content"
            className={styles['content-word']}
            onChange={handleChange}
            defaultValue={blog.content}
            style={{ width: '100%' }}
          />
          <div className={styles['post-upload']}>
            <div className={styles['post-upload-btn-container']}>
              <div>
                <label className={styles['button']} htmlFor="previewImage1">
                  <div className={styles['inputFile']}>
                    <AiFillPicture />
                    <i>圖片上傳</i>
                  </div>
                </label>
                <input
                  id="previewImage1"
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
            <p style={{marginTop:'16px',marginBottom:'0px'}}>原始貼文圖片</p>
            <div className={styles['post-upload-pic']}>
              <PrevieImageEdit
                value={[blog.pic1, blog.pic2, blog.pic3, blog.pic4, blog.pic5]}
              />
            </div>
            <p style={{marginTop:'16px',marginBottom:'0px'}}>替換圖片</p>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
