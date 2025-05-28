import React from 'react'

function Experiences(props) {
  const {dark} = props;

  return (
    <div className={`border rounded-lg ${dark ? 'text-white' : 'bg-white'} p-5 shadow-md shadow-purple-300`}>
      <p className="text-xl font-bold mb-3 border-b pb-3">Experiences</p>
      <div>
        <p className='font-semibold'>Sep 2023 - Present</p>
        <p>Works as a freelancer for local clients</p>
      </div>
    </div>
  )
}

export default Experiences
