import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contacts(props) {
    const {dark} = props;
    const message = () => {
        alert("You can send me a message via email through the email address provided.");
    }

    return (
        <div className={`border rounded-lg ${dark ? 'text-white' : 'bg-white'} p-5 shadow-md shadow-purple-300`}>
            <p className="text-xl font-bold mb-3 border-b pb-3">Contacts</p>
            <div>
                <div className='mb-5'>
                    <p>Feel free to reach out. I'm available through various channels.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 mb-5'>
                    <div className={`flex flex-col items-center hover:bg-gray-100 ${dark && 'hover:text-black'} rounded-lg py-2`}>
                        <PhoneAndroidIcon fontSize='large' sx={{ color: '#6663C6' }} />
                        <span>+8801876678984</span>
                    </div>
                    <div className={`flex flex-col items-center hover:bg-gray-100 ${dark && 'hover:text-black'} rounded-lg py-2`}>
                        <EmailIcon fontSize='large' sx={{ color: '#6663C6' }} />
                        <span>mdnazirulmobinahamed@gmail.com</span>
                    </div>
                    <div className={`flex flex-col items-center hover:bg-gray-100 ${dark && 'hover:text-black'} rounded-lg py-2`}>
                        <LocationOnIcon fontSize='large' sx={{ color: '#6663C6' }} />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>
                <div className='grid mb-3'>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                </div>
                <div className='grid mb-3'>
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" />
                </div>
                <div className='grid mb-3'>
                    <TextField id="outlined-basic" label="Your Message" variant="outlined" multiline rows={5} />
                </div>
                <div className='grid'>
                    <Button variant="contained" sx={{ bgcolor: '#1a53ff' }} onClick={message}>Send Message</Button>
                </div>
            </div>
        </div>
    )
}

export default Contacts
