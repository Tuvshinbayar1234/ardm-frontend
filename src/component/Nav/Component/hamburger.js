import React, { useState } from 'react';
import Logo from '../../../assets/ardm-icon.png'
import { FaTimes, FaAlignJustify, FaBars } from "react-icons/fa";


export default function Hamburger() {

    const [navOpen, setNavOpen] = useState(false);
   
    const handleToggle = () => {
        setNavOpen(!navOpen);
    };

    return (
        <>
            <div className=''>
                <div className="relative flex items-center justify-between">
                    <div className="xl:hidden block space-x-3">
                        <button onClick={handleToggle} className="flex items-center text-blue-600">
                            <FaAlignJustify className="text-white w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="navbar-menu">
                    <nav
                        className={` bg-Mont-blue-150 fixed top-0 h-screen  w-full max-w-full overflow-y-auto  ${
                            navOpen
                                ? 'fixed right-0 transition-all duration-200 ease-in '
                                : 'fixed -right-full transition-all duration-200 ease-in '
                        }`}>
                        <div className={'flex items-center justify-between pt-6 mr-5'}>
                            <div className="">
                                <img className='w-24' src={Logo.src} />
                            </div>
                            <button onClick={handleToggle} className="navbar-close">
                                <FaTimes className="h-7 w-7 text-Mont-white-100 text-brand-black" />
                            </button>
                        </div>
                        <div className="mx-5">
                            <ul className="z-20">
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#feature">Benefit</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#service">Service</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#team">ProjectTeam</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#company">Partners</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#faq">FAQ</a>
                                </li>
                                <li onClick={handleToggle} className="mb-1">
                                    <a className="block p-4 text-sm font-semibold text-Mont-white-100 hover:bg-blue-50 hover:text-blue-600 rounded" href="#contact">ContactUs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto z-20">
                        <div className="pt-6 mx-5">
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" >White Paper</a>
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

