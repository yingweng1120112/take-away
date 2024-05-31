import { useState } from 'react'

export default function Index() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = `http://localhost:3005/api/ec/?amount=500`
        }}
      >
        付款500
      </button>
      <button
        onClick={() => {
          window.location.href = 'http://localhost:3005/api/ec/?amount=1000'
        }}
      >
        付款1000
      </button>
    </div>
  )
}
