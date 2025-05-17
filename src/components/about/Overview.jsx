import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Overview() {
  return (
    <div className='flex flex-col'>
      <div className='flex mb-5'>
        <p>
          <span className='text-3xl'>I</span>n the past few years, I built some software projects. I have learned some programming languages (specially c++), OOP concepts and DSA. I did problem solving in different online sites. I also participated in a number of online and offline programming contests. I want to join an organization where I can apply my knowledge in developing web applications using various technologies such as HTML5, CSS3, JavaScript and other programming languages. Recently I have completed some MERN stack projects with real world features.
        </p>
      </div>
      <div className='flex mb-3'>
        <BusinessCenterIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Works at <span className='font-semibold'>Freelance</span></p>
      </div>
      <div className='flex mb-3'>
        <SchoolIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Studied B.Sc. in CSE at <span className='font-semibold'>University of Information Technology and Sciences (UITS)</span></p>
      </div>
      <div className='flex mb-3'>
        <HouseIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Lives in <span className='font-semibold'>Dhaka, Bangladesh</span></p>
      </div>
      <div className='flex mb-3'>
        <LocationOnIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>From <span className='font-semibold'>Dhaka, Bangladesh</span></p>
      </div>
      <div className='flex'>
        <FavoriteIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Status Single</p>
      </div>
    </div>
  )
}

export default Overview
