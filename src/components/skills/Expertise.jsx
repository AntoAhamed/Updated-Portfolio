import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Expertise() {
  return (
    <div className='flex flex-col'>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>C++ | HTML5 | CSS3 | Bootstrap | Tailwind CSS | Material UI | JavaScript | ES6</p>
      </div>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>React JS | Node JS | Express JS | MongoDB | MySQL</p>
      </div>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>Git | GitHub | Context API | React Router | Redux Toolkit | NPM | Axios</p>
      </div>
      <div className='flex mb-3'>
        <CheckIcon sx={{ color: 'gray' }} />
        <p className='ml-2'>JSON | RESTful API | CRUD | JWT | DSA | OOP | Vercel</p>
      </div>
    </div>
  )
}

export default Expertise
