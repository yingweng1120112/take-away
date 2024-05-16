import React, { useState } from 'react'
import Pageone from '@/components/adopt-from/page-one'
import PageTwo from '@/components/adopt-from/page-two';
import PageThree from '@/components/adopt-from/page-three';
export default function AdoptForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData)
  }

  return (
    <div className='form1'>
      {currentStep === 1 && (
        <form className='page-one' onSubmit={handleSubmit}>
            <Pageone />
          <div className='button-group'>
            <button type="button" className='next-button donate-button page-one-button' onClick={nextStep}>下一頁
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form className='page-two' onSubmit={handleSubmit}>
        <PageTwo />
          <div className='button-group'>
            <button type="button" className=' donate-button next-page-button' onClick={prevStep}>上一頁
            </button>
            <button type="button" className=' donate-button next-page-button' onClick={nextStep}>下一頁
            </button>
          </div>
        </form>
      )
      }
      {
        currentStep === 3 && (
          <form className='page-third' onSubmit={handleSubmit}>
        <PageThree />
            <div className='button-group'>
            <button type="button" className=' donate-button next-page-button' onClick={prevStep}>上一頁
            </button>
              <button type="submit" className='button donate-button next-page-button'>完成</button>
            </div>
          </form>
        )
      }
    </div>
  )
}

