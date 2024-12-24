import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PlacesLived() {
  return (
    <div className=''>
      <h1 className='text-lg font-semibold mb-2'>Places lived</h1>
      <div className='flex items-center mb-3'>
        <LocationOnIcon fontSize='large' sx={{ color: 'white', bgcolor: '#E2EAF4', borderRadius: '50%' }} />
        <div className='ml-3'>
          <p><span className='font-semibold'>Dhaka, Bangladesh</span></p>
          <p className='text-sm text-gray-500'>Current city</p>
        </div>
      </div>
      <div className='flex items-center'>
        <LocationOnIcon fontSize='large' sx={{ color: 'white', bgcolor: '#E2EAF4', borderRadius: '50%' }} />
        <div className='ml-3'>
          <p><span className='font-semibold'>Munshiganj, Dhaka, Bangladesh</span></p>
          <p className='text-sm text-gray-500'>Hometown</p>
        </div>
      </div>
    </div>
  )
}

export default PlacesLived
