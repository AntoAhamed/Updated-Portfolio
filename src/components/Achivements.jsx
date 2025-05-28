import React from 'react'
import cirtificate1 from '../assets/cirtificate1.jpg'
import cirtificate2 from '../assets/cirtificate2.jpg'

function Achivements(props) {
    const {dark} = props;

    return (
        <div className={`border rounded-lg ${dark ? 'text-white' : 'bg-white'} p-5 shadow-md shadow-purple-300`}>
            <p className="text-xl font-bold mb-3 border-b pb-3">Achivements</p>
            <div className='border rounded-lg p-5 my-5'>
                <img src={cirtificate1} alt='Cirtificate 1' className='lg:h-96 md:h-80 sm:h-72 w-full' />
                <p className='text-center font-semibold'>Cirtificate 1</p>
            </div>
            <div className='border rounded-lg p-5'>
                <img src={cirtificate2} alt='Cirtificate 2' className='lg:h-96 md:h-80 sm:h-72 w-full' />
                <p className='text-center font-semibold'>Cirtificate 2</p>
            </div>
        </div>
    )
}

export default Achivements
