import React from 'react'
import CP from '../assets/cp.jpg'
import CF from '../assets/codeforces.png'
import BC from '../assets/beecrowd.png'
import GH from '../assets/github.png'
import { Button } from '@mui/material'

function ProblemSolving() {
    return (
        <div className='border rounded-lg bg-white p-5'>
            <p className="text-xl font-bold mb-3 border-b pb-3">Problem Solving</p>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-1/2 flex items-center'>
                    <img src={CP} alt="Problem Solving" className='rounded-lg w-full h-auto' />
                </div>
                <div className='lg:w-1/2 lg:ml-5'>
                    <p className='mb-2'><span className='text-3xl'>I</span> have been solving problems on various online judges <span className='text-xl font-semibold'>since 2019</span>. I have solved <span className='text-xl font-semibold'>more than 250</span> problems on different platforms. I am familiar with various data structures and algorithms. I have participated in several contests and have achieved good ranks.</p>
                    <p className='mb-2 font-medium'>Problem solving profiles:</p>
                    <div className='grid grid-cols-2 gap-2 p-2'>
                        <img src={CF} alt="Codeforces" className='rounded-lg' />
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-gray-500'>Anto_A01</p>
                            <Button variant='contained' size='small' sx={{ bgcolor: '#e6e6e6', color: 'black', fontWeight: '600' }}>
                                <a href='https://codeforces.com/profile/Anto_A01' target='_blank' rel='noopener noreferrer'>View Profile</a>
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 p-2 lg:mt-2'>
                        <img src={BC} alt="Beecrowd" className='rounded-lg h-14 w-80' />
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-gray-500'>Anto_Ahamed007</p>
                            <Button variant='contained' size='small' sx={{ bgcolor: '#e6e6e6', color: 'black', fontWeight: '600' }}>
                                <a href='https://www.beecrowd.com.br/judge/en/profile/394069' target='_blank' rel='noopener noreferrer'>View Profile</a>
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 p-2'>
                        <img src={GH} alt="GitHub" className='rounded-lg h-12 w-80' />
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-gray-500'>AntoAhamed</p>
                            <Button variant='contained' size='small' sx={{ bgcolor: '#e6e6e6', color: 'black', fontWeight: '600' }}>
                                <a href='https://github.com/AntoAhamed' target='_blank' rel='noopener noreferrer'>View Profile</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProblemSolving