import React, { useState } from 'react'

const Sendform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    alert('submit')
    e.preventDefault()
    // 发送表单数据到服务器
    try {
      const response = await fetch('https://example.com/api/form', {
        method: 'POST',
        body: formData,
        headers: {
          Accept:
            'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        // 请求成功后的处理
        console.log('Form submitted successfully')
      } else {
        // 请求失败后的处理
        console.log('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Sendform
