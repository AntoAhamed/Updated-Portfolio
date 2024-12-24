import React, { useState } from 'react'
import cover from '../assets/cover.jpeg'
import user from '../assets/Nazirul Mobin.jpg'
import { Button } from '@mui/material'
import { Outlet, Link, useNavigate } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';

function Navbar() {
    const navigate = useNavigate()
    const [activeComponent, setActiveComponent] = useState("home");

    const renderComponent = () => {
        switch (activeComponent) {
            case "home":
                return navigate('/');
            case "about":
                return navigate('/about');
            case "education":
                return navigate('/education');
            case "skills":
                return navigate('/skills');
            case "projects":
                return navigate('/projects');
            case "achivements":
                return navigate('/achivements');
            case "experiences":
                return navigate('/experiences');
            case "contacts":
                return navigate('/contacts');
            default:
                return navigate('/');
        }
    };

    return (
        <>
            <div className='px-52 border bg-white'>
                <div>
                    <img src={cover} alt='Cover' className='rounded-b-lg' />
                </div>
                <div className='px-5'>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 border-b py-2'>
                        <div className='flex lg:flex-row items-center md:justify-center md:flex-col'>
                            <img src={user} alt='User' width={'25%'} style={{ borderRadius: '50%' }} className='border-4 mr-1' />
                            <div>
                                <p className='text-3xl font-bold mb-2'>Md. Nazirul Mobin Ahamed</p>
                                <p className='text-lg text-gray-500'>Passionate Software Developer (MERN)</p>
                            </div>
                        </div>
                        <div className='flex lg:justify-end md:justify-center items-end md:my-3'>
                            <div className='mr-3'>
                                <Button variant='contained' sx={{ bgcolor: '#1a53ff', fontWeight: '600' }}>
                                    <FileCopyIcon />
                                    <span className='ml-1'>Download Resume</span>
                                </Button>
                            </div>
                            <div>
                                <Button variant='contained' sx={{ bgcolor: '#e6e6e6', color: 'black', fontWeight: '600' }}><a href='https://drive.google.com/file/d/1R6sYsuBHzBTubpJ7amUPs4EZSrvmpjup/view?usp=sharing' target='_blank'>View Resume</a></Button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <ul className='lg:flex flex-wrap font-medium'>
                            <Link to='/'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "home" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("home")}
                                >
                                    Home
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "about" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("about")}
                                >
                                    About
                                </li>
                            </Link>
                            <Link to='/education'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "education" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("education")}
                                >
                                    Education
                                </li>
                            </Link>
                            <Link to='/skills'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "skills" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("skills")}
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link to='/projects'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "projects" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("projects")}
                                >
                                    Projects
                                </li>
                            </Link>
                            <Link to='/achivements'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "achivements" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("achivements")}
                                >
                                    Achivements
                                </li>
                            </Link>
                            <Link to='/experiences'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "experiences" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("experiences")}
                                >
                                    Experiences
                                </li>
                            </Link>
                            <Link to='/contacts'>
                                <li className={`py-3 px-5 hover:bg-slate-100 rounded-md ${activeComponent === "contacts" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-sm hover:bg-white" : "text-gray-500"}`}
                                    onClick={() => setActiveComponent("contacts")}
                                >
                                    Contacts
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-56 py-4'>
                <Outlet />
            </div>

        </>
    )
}

export default Navbar
