import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

function Interest() {
  return (
    <div className='flex flex-col'>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Competitive Programming Contests (Participated in online and offline)</p>
      </div>
    </div>
  )
}

export default Interest
