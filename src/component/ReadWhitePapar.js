import React from 'react'
import Hand from '../assets/hand.png'
import {FaCheckCircle} from 'react-icons/fa'

const ReadWhitePapar = () => {
    return (
        <div className=' bg-Mont-blue-100 p-10 px-5'>
            <div className='container mx-auto'>
                <div className='rounded-lg bg-Mont-blue-150 p-2 lg:p-20'>
                    <div className='pt-10 flex flex-col lg:flex lg:flex-row justify-evenly'>
                        <div className='w-full lg:w-2/4'>
                            <div className='flex items-center space-x-0 lg:space-x-5 pt-10 pb-10'>
                                <div className=' bg-Mont-white-100 w-[73px] h-[2px]'></div>
                                <h1 className='text-white'>WHY CHOOSE OUR TOKEN</h1>
                            </div>
                            <h1 className='text-6xl text-white'>Read Our Documents </h1>
                            <p className='w-full lg:w-2/4 text-white pt-5'>Here is our full documents that help you to understand deeply about us and our operation</p>
                            <div className='flex space-x-20'>
                                <div className='pt-10 flex items-center space-x-5'>
                                    <FaCheckCircle className='text-white text-4xl' />
                                    <h1 className='text-xl text-white'>White Paper</h1>
                                </div>
                                <div className='pt-10 flex items-center space-x-5'>
                                    <FaCheckCircle className='text-white text-4xl' />
                                    <h1 className='text-xl text-white'>White Paper</h1>
                                </div>
                            </div>
                            <div className='flex space-x-20'>
                                <div className='pt-10 flex items-center space-x-5'>
                                    <FaCheckCircle className='text-white text-4xl' />
                                    <h1 className='text-xl text-white'>White Paper</h1>
                                </div>
                                <div className='pt-10 flex items-center space-x-5'>
                                    <FaCheckCircle className='text-white text-4xl' />
                                    <h1 className='text-xl text-white'>White Paper</h1>
                                </div>
                            </div>
                            <div className='mt-20'>
                            <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Download
                                </span>
                            </a>
                            </div>
                        </div>
                        <div className='w-full lg:w-2/4 pt-10 lg:pt-0'>
                            <img src={Hand} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadWhitePapar