import React from 'react'

function Footer(props) {
    const { dark } = props;

    return (
        <div className='border-t flex justify-center'>
            <div className={`m-5 ${dark ? 'text-gray-200' : 'text-gray-500'} text-sm`}>
                <p>&copy; Developed by Md. Nazirul Mobin Ahamed (B.Sc. in CSE)</p>
                <p>Contact: <a href='https://www.linkedin.com/in/nazirulmobin' target='_balnk' className='font-semibold'>Click to Message me in Linkedin</a></p>
            </div>
        </div>
    )
}

export default Footer
