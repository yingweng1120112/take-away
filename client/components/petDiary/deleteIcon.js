import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
export default function DeleteIcon(data) {
  const petMaster = data.data
  if (petMaster == true) {
    return <FaTrashAlt style={{ width: '2rem', height: '2rem' }} />
  }
  return (
    <></>
  )
}
