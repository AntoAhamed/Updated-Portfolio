import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import HouseIcon from '@mui/icons-material/House';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { TypeAnimation } from 'react-type-animation';
import RecommendIcon from '@mui/icons-material/Recommend';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import user from '../assets/Nazirul Mobin.jpg'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

function Home() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
      <div>
        <div className='flex items-center font-semibold border rounded-lg bg-white p-5 mb-4'>
          <RecommendIcon fontSize='large' sx={{ color: '#0066ff' }} />
          <div className='ml-3'>
            <p className='text-lg'>Welcome To My Portfolio Everyone</p>
            <p className='text-blue-700 cursor-pointer'>Learn More</p>
          </div>
        </div>

        <div className='border rounded-lg bg-white p-5'>
          <p className='text-xl font-bold mb-3'>Intro</p>
          <p className='text-center border-b-2 pb-3 mb-3'>
            Self-learner | Problem Solver | MERN Stack Dev
          </p>
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
          <div className='flex mb-3'>
            <FavoriteIcon sx={{ color: 'gray' }} />
            <p className='ml-2'>Status Single</p>
          </div>
          <div className='flex mb-3'>
            <PhoneAndroidIcon sx={{ color: 'gray' }} />
            <p className='ml-2'>+8801876678984</p>
          </div>
          <div className='flex mb-3'>
            <EmailIcon sx={{ color: 'gray' }} />
            <p className='ml-2'>mdnazirulmobinahamed@gmail.com</p>
          </div>
          <div className='flex'>
            <RssFeedIcon sx={{ color: 'gray' }} />
            <p className='ml-2'>Followed by <span className='font-semibold'>500+ people</span></p>
          </div>
        </div>
      </div>

      <div>
        {/*<div className='font-semibold'>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Hello, I am Md. Nazirul Mobin Ahamed',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am a passionate software developer',
              1000,
              'I have experience with real world MERN stack applications like',
              1000,
              'Ecommerce website and Social Media website etc.',
              1000,
              'If you are interested then feel free to reach me',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>*/}
        <div className='border rounded-lg bg-white p-3 mb-4'>
          <div className='flex border-b pb-3'>
            <img src={user} alt='User' width={'7.5%'} style={{ borderRadius: '50%', border: '1px solid gray' }} />
            <input type='text' className='bg-gray-200 hover:bg-gray-300 w-full ml-3 text-lg pl-3 rounded-full cursor-pointer' disabled placeholder='Write something to Md. Nazirul...' />
          </div>
          <div className='grid grid-cols-3 pt-3'>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <AddPhotoAlternateIcon sx={{ color: '#00cc44' }} />
              <p className='ml-1'>Photo/video</p>
            </div>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <LocalOfferIcon sx={{ color: '#0066ff' }} />
              <p className='ml-1'>Tag people</p>
            </div>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <InsertEmoticonIcon sx={{ color: '#ffd633' }} />
              <p className='ml-1'>Feeling/activity</p>
            </div>
          </div>
        </div>

        <div className='border rounded-lg bg-white p-3'>
          <div className='flex pb-3'>
            <img src={user} alt='User' width={'7.5%'} style={{ borderRadius: '50%', border: '1px solid gray' }} />
            <div className='ml-3'>
              <p className='font-semibold'>Md. Nazirul Mobin Ahamed</p>
              <p className='text-gray-500 font-semibold' style={{ fontSize: '12px' }}>December 1 of 2025 at 12:01 AM</p>
            </div>
          </div>
          <div className='border-b pb-2'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hello, I am Md. Nazirul Mobin Ahamed',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I am a passionate software developer',
                1000,
                'I have experience with real world MERN stack applications like',
                1000,
                'Ecommerce website and Social Media website etc.',
                1000,
                'If you are interested then feel free to reach me',
                1000
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
          <div className='grid grid-cols-3 pt-2'>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <ThumbUpOffAltIcon sx={{ color: 'gray' }} />
              <p className='ml-1'>Like</p>
            </div>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <CommentIcon sx={{ color: 'gray' }} />
              <p className='ml-1'>Comment</p>
            </div>
            <div className='flex  justify-center cursor-pointer hover:bg-gray-200 p-2 rounded w-full'>
              <ShareIcon sx={{ color: 'gray' }} />
              <p className='ml-1'>Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
