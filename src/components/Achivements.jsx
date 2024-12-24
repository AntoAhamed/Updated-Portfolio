import React from 'react'
import cirtificate1 from '../assets/cirtificate1.jpg'
import cirtificate2 from '../assets/cirtificate2.jpg'

function Achivements() {
    return (
        <div className="border rounded-lg bg-white p-5">
            <p className="text-xl font-bold mb-3 border-b pb-3">Achivements</p>
            <div className='border rounded-lg p-5 my-5'>
                <img src={cirtificate1} alt='Cirtificate 1' />
                <p className='text-center font-semibold'>Cirtificate 1</p>
            </div>
            <div className='border rounded-lg p-5'>
                <img src={cirtificate2} alt='Cirtificate 2' />
                <p className='text-center font-semibold'>Cirtificate 2</p>
            </div>
        </div>
    )
}

export default Achivements
