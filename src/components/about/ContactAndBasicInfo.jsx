import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LanguageIcon from '@mui/icons-material/Language';

function ContactAndBasicInfo() {
  return (
    <div className=''>
      <h1 className='text-lg font-semibold mb-2'>Contact info</h1>
      <div className='flex items-center mb-3'>
        <PhoneIcon fontSize='medium' sx={{ color: 'gray' }} />
        <div className='ml-3'>
          <p>+8801876678984</p>
          <p className='text-sm text-gray-500'>Phone</p>
        </div>
      </div>
      <div className='flex items-center mb-5'>
        <EmailIcon fontSize='medium' sx={{ color: 'gray' }} />
        <div className='ml-3'>
          <p>mdnazirulmobinahamed@gmail.com</p>
          <p className='text-sm text-gray-500'>Email</p>
        </div>
      </div>

      <h1 className='text-lg font-semibold mb-2'>Websites and social links</h1>
      <a href='https://www.linkedin.com/in/nazirulmobin' target='_blank'>
        <div className='flex items-center mb-3'>
          <LinkedInIcon fontSize='medium' sx={{ color: 'gray' }} />
          <div className='ml-3'>
            <p>https://www.linkedin.com/in/nazirulmobin</p>
            <p className='text-sm text-gray-500'>Linkedin</p>
          </div>
        </div>
      </a>
      <a href='https://github.com/AntoAhamed' target='_blank'>
        <div className='flex items-center mb-3'>
          <GitHubIcon fontSize='medium' sx={{ color: 'gray' }} />
          <div className='ml-3'>
            <p>https://github.com/AntoAhamed</p>
            <p className='text-sm text-gray-500'>Github</p>
          </div>
        </div>
      </a>
      <a href='https://www.facebook.com/profile.php?id=100006235186089' target='_blank'>
        <div className='flex items-center mb-5'>
          <FacebookIcon fontSize='medium' sx={{ color: 'gray' }} />
          <div className='ml-3'>
            <p>Anto Ahamed</p>
            <p className='text-sm text-gray-500'>Facebook</p>
          </div>
        </div>
      </a>
      <a href='https://www.beecrowd.com.br/judge/en/profile/394069' target='_blank'>
        <div className='flex items-center mb-5'>
          <LanguageIcon fontSize='medium' sx={{ color: 'gray' }} />
          <div className='ml-3'>
            <p>Anto_Ahamed007</p>
            <p className='text-sm text-gray-500'>Beecrowd</p>
          </div>
        </div>
      </a>
      <a href='https://codeforces.com/profile/Anto_A01' target='_blank'>
        <div className='flex items-center mb-5'>
          <LanguageIcon fontSize='medium' sx={{ color: 'gray' }} />
          <div className='ml-3'>
            <p>Anto_A01</p>
            <p className='text-sm text-gray-500'>Codeforces</p>
          </div>
        </div>
      </a>

      <h1 className='text-lg font-semibold mb-2'>Basic info</h1>
      <div className='flex items-center mb-3'>
        <PersonIcon fontSize='medium' sx={{ color: 'gray' }} />
        <div className='ml-3'>
          <p>Male</p>
          <p className='text-sm text-gray-500'>Gender</p>
        </div>
      </div>
      <div className='flex items-center mb-3'>
        <CakeIcon fontSize='medium' sx={{ color: 'gray' }} />
        <div className='ml-3'>
          <p>July 5</p>
          <p className='text-sm text-gray-500'>Birth date</p>
        </div>
      </div>
      <div className='flex items-center mb-3'>
        <GTranslateIcon fontSize='medium' sx={{ color: 'gray' }} />
        <div className='ml-3'>
          <p>Bangla and English language</p>
          <p className='text-sm text-gray-500'>Languages</p>
        </div>
      </div>
    </div>
  )
}

export default ContactAndBasicInfo
