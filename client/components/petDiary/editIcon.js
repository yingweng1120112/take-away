import React from 'react'
import { MdEdit } from 'react-icons/md'
export default function EditIcon(data) {
  const petMaster = data.data
  if (petMaster == true) {
    return <MdEdit style={{ width: '2rem', height: '2rem' }} />
  }
  return (
    <></>
  )
}
