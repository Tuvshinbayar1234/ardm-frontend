import React from 'react'
import Logo from '../../assets/ardm-icon.png'
import Hamburger from './Component/hamburger'

const Nav = () => {
    return (
        <div className=' bg-Mont-blue-100 w-full py-5 fixed z-50 px-5 xl:px-0'>
            <div className='container mx-auto'>
                <div className='flex items-center'>
                    <div className='flex items-center w-full lg:w-1/6 space-x-2'>
                        <img className='w-[34px] h-[34px]' src={Logo} />
                        <h1 className='font-bold text-white'>ArdMoney</h1>
                    </div>
                    <div className='text-white w-full hidden xl:block'>
                        
                        <ul className='flex space-x-12'>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                DAO
                            </li>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                АрдМааний
                            </li>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                Төлөвлөгөө
                            </li>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                Экосистем
                            </li>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                Баг
                            </li>
                            <li className='hover:text-Mont-Hover-blue-100 transition-all duration-300 cursor-pointer'>
                                FAQ
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-end space-x-2 xl:space-x-0 xl:justify-evenly items-center w-full xl:w-2/12'>
                        <div className='p-2 cursor-pointer font-semibold bg-Mont-white-100 text-black hover:text-white hover:bg-Mont-Hover-blue-100 transition-all duration-300 rounded-lg text-center flex items-center'>
                            <a href='#'>Litepaper</a>
                        </div>
                        <div className=' border rounded-md p-2 cursor-pointer border-Mont-white-100 hover:bg-Mont-Hover-blue-100 transition-all duration-300'>
                            <h1 className='text-white '>EN</h1>
                        </div>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav 