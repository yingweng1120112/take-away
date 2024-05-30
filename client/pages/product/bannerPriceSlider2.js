import React from 'react'
import Slider from '@material-ui/core/Slider'
// npm install @material-ui/core
import banner from '@/styles/banner/banner.module.css'

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 5000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={banner['price-input-container']}>
      <div className={`price-input ${banner['price-input']}`}>
        <div className={banner['price-field']}>
          <span>從</span>
          <input type="number" value={value[0]} />
          <span>~</span>
          <input type="number" value={value[1]} />
          <span>元</span>
        </div>
      </div>
      {/* slider */}
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={5000}
          />
    </div>
  )
}
