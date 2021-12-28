import React from 'react'
import Global from '../assets/ilustrator.png'
import {FaGlobe , FaUsers, FaStar} from 'react-icons/fa'

const WhatIsCrypto = () => {
    return (
        <div className='bg-Mont-blue-100 pb-10 pt-10 px-5'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex lg:flex-row items-center justify-evenly w-full'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex space-x-5 items-center'>
                            <div className=' bg-Mont-white-100 w-[73px] h-[2px]'></div>
                            <h1 className='text-white'>WHAT IS STABLECOIN</h1>
                        </div>
                        <div className='pt-10'>
                            <h1 className='text-white text-4xl font-semibold w-full lg:w-7/12'>We’ve built a platform to buy and sell shares.</h1>
                        </div>
                        <div className='flex space-x-5 pt-10 relative'>
                            <div className='flex items-center justify-center z-10 bg-Mont-Hover-blue-100 rounded-full h-10 w-14 text-center'>
                                <FaUsers className='text-2xl text-white' />
                            </div>
                            <div className='border-2 absolute h-full w-0 top-10 left-[7px] border-dashed'></div>
                            <div className='text-white'>
                                <h1 className='text-xl'>Lorem ipsum</h1>
                                <p className='text-gray-300 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        
                        <div className='flex space-x-5 py-14 relative '>
                            <div className='flex items-center justify-center z-10 bg-Mont-Hover-blue-100 rounded-full h-10 w-14 text-center'>
                                <FaGlobe className='text-2xl text-white' />
                            </div>
                            <div className='border-2 absolute h-full w-0 top-10 left-[7px] border-dashed'></div>
                            <div className='text-white'>
                                <h1 className='text-xl'>Lorem ipsum</h1>
                                <p className='text-gray-300 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className='flex space-x-5'>
                            <div className='flex items-center justify-center z-10 bg-Mont-Hover-blue-100 rounded-full h-10 w-14 text-center'>
                                <FaStar className='text-2xl text-white' />
                            </div>
                            <div className='text-white'>
                                <h1 className='text-xl'>Lorem ipsum</h1>
                                <p className='text-gray-300 w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 lg:pt-0'>
                        <img src={Global} alt='Global' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIsCrypto
