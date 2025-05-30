import React, { useState } from 'react'
import cover from '../assets/cover.jpeg'
import user from '../assets/Nazirul Mobin.jpg'
import { Button } from '@mui/material'
import { Outlet, Link } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Switch from '@mui/material/Switch';

function Navbar(props) {
    const { dark, setDark } = props;
    const [activeComponent, setActiveComponent] = useState("home");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSwitchChange = (event) => {
        setDark(event.target.checked);
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className={`lg:px-56 md:px-4 ${dark ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg shadow-lg`}>
                <div>
                    <img src={cover} alt='Cover' className='rounded-b-lg' />
                </div>
                <div className='px-5'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 border-b py-2'>
                        <div className='flex lg:flex-row flex-col items-center md:justify-center'>
                            <img src={user} alt='User' className='w-32 h-32 rounded-full border-4 mr-1' />
                            <div>
                                <p className='text-3xl font-bold mb-2'>Md. Nazirul Mobin Ahamed</p>
                                <p className={`${dark ? 'text-white' : 'text-gray-500'} lg:text-left text-center`}>{`<Software Engineer />`}</p>
                            </div>
                        </div>
                        <div className='flex lg:justify-end justify-center items-end lg:my-0 md:my-1 my-3'>
                            <div className='mr-3'>
                                <Button variant='contained' sx={{ bgcolor: '#1a53ff', fontWeight: '600' }}>
                                    <FileCopyIcon />
                                    <span className='ml-1'><a href='https://drive.google.com/file/d/1R6sYsuBHzBTubpJ7amUPs4EZSrvmpjup/view?usp=sharing' target='_blank'>Download Resume</a></span>
                                </Button>
                            </div>
                            <div>
                                <Button variant='contained' sx={{ bgcolor: '#e6e6e6', color: 'black', fontWeight: '600' }}><a href='https://drive.google.com/file/d/1R6sYsuBHzBTubpJ7amUPs4EZSrvmpjup/view?usp=sharing' target='_blank'>View Resume</a></Button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <div className='flex justify-between'>
                            <button className={`lg:hidden font-medium px-4 py-2 ${dark ? "border-slate-200 border-2" : "bg-slate-200"} rounded-md`} onClick={toggleDropdown}>
                                {activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1)}
                            </button>
                            <button className={`lg:hidden font-medium px-4 py-2  ${dark ? "border-slate-200 border-2" : "bg-slate-200"} rounded-md`} onClick={toggleDropdown}>
                                <MoreHorizIcon fontSize='small' />
                            </button>
                        </div>
                        <ul className={`lg:flex lg:items-center lg:justify-between lg:space-x-4 lg:py-0 py-2 lg:mt-0 mt-2 ${dropdownOpen ? "block" : "hidden"} lg:block`}>
                            <div className='lg:flex flex-wrap lg:items-center lg:justify-between lg:space-x-4 lg:py-0 py-2 lg:mt-0 mt-2'>
                                <Link to='/'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "home" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("home"); toggleDropdown(); }}
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link to='/about'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "about" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("about"); toggleDropdown(); }}
                                    >
                                        About
                                    </li>
                                </Link>
                                <Link to='/education'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "education" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("education"); toggleDropdown(); }}
                                    >
                                        Education
                                    </li>
                                </Link>
                                <Link to='/skills'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "skills" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("skills"); toggleDropdown(); }}
                                    >
                                        Skills
                                    </li>
                                </Link>
                                <Link to='/problem-solving'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "problem-solving" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("problem-solving"); toggleDropdown(); }}
                                    >
                                        Problem Solving
                                    </li>
                                </Link>
                                <Link to='/projects'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "projects" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("projects"); toggleDropdown(); }}
                                    >
                                        Projects
                                    </li>
                                </Link>
                                <Link to='/achivements'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "achivements" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("achivements"); toggleDropdown(); }}
                                    >
                                        Achivements
                                    </li>
                                </Link>
                                <Link to='/experiences'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "experiences" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("experiences"); toggleDropdown(); }}
                                    >
                                        Experiences
                                    </li>
                                </Link>
                                <Link to='/contacts'>
                                    <li className={`py-3 px-3 hover:bg-slate-100 rounded-md ${dark ? "text-white hover:text-black" : ""} ${activeComponent === "contacts" ? "text-blue-600 border-b-4 border-b-blue-600 rounded-b-sm hover:bg-white" : "text-gray-500"}`}
                                        onClick={() => { setActiveComponent("contacts"); toggleDropdown(); }}
                                    >
                                        Contacts
                                    </li>
                                </Link>
                            </div>
                            <Switch
                                checked={dark}
                                onChange={handleSwitchChange}
                                color="primary"
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='lg:px-56 md:px-4 py-4'>
                <Outlet />
            </div>

        </>
    )
}

export default Navbar
