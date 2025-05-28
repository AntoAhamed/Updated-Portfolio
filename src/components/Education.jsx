import React from 'react'

function Education(props) {
  const {dark} = props;
  return (
    <div className={`border rounded-lg ${dark ? 'text-white' : 'bg-white'} p-5 shadow-md shadow-purple-300`}>
      <p className="text-xl font-bold mb-3 border-b pb-3">Education</p>
      <div>
        <h1 className='text-lg font-semibold mb-2'>University</h1>
        <p className='mb-2'>Studied at <span className='font-semibold'>University of Information Technology and Sciences (UITS)</span></p>
        <p className='mb-2'>Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)</p>
        <p className='mb-2'>Graduation Year: 2023 (July)</p>
        <p className='mb-3'>CGPA: 3.50 out of 4.00</p>
      </div>
      <div className='lg:grid grid-cols-2'>
        <div>

        </div>
        <div>
          <h1 className='text-lg font-semibold mb-2'>College</h1>
          <p className='mb-2'>Went to <span className='font-semibold'>Siddheswari College</span></p>
          <p className='mb-2'>Higher Secondary School Certificate (HSC)</p>
          <p className='mb-3'>Passing Year: 2019</p>
        </div>
      </div>
      <div>
        <h1 className='text-lg font-semibold mb-2'>School</h1>
        <p className='mb-2'>Went to <span className='font-semibold'>Motijheel Model School and College</span></p>
        <p className='mb-2'>Secondary School Certificate (SSC)</p>
        <p className='text-md'>Passing Year: 2017</p>
      </div>
    </div>
  )
}

export default Education
