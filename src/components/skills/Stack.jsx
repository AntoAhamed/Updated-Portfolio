import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

function Stack() {
  return (
    <div className='flex flex-col'>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>MERN Stack</p>
      </div>
    </div>
  )
}

export default Stack
