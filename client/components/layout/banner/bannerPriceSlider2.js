import React from 'react'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

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
          <input type="number" value={v.min} />
          <span>~</span>
          <input type="number" value={v.max} />
          <span>元</span>
        </div>
      </div>
      {/* slider */}
      <div className={banner['slider-container']}>
        <div className={`price-slider ${banner['price-slider']}`}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={0}
            max={5000}
          />
        </div>
      </div>
    </div>
  )
}
