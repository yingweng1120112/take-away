import { useState } from 'react'

export default function Index() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = `http://localhost:3005/api/ec1/?amount=2000`
        }}
      >
        付款2000
      </button>
      <button
        onClick={() => {
          window.location.href = 'http://localhost:3005/api/ec1/?amount=1000'
        }}
      >
        付款1000
      </button>
    </div>
  )
}
