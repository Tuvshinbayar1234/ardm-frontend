import React from 'react'
import PieChart from './Component/PieChart'

const Chart = () => {

    return (
        <div className=' bg-Mont-blue-100 pt-10 pb-10 w-full px-5 xl:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex lg:flex-row items-start lg:items-center space-x-0 lg:space-x-10 pb-10'>
                    <h1 className='text-4xl text-white font-semibold'>1 MONT = 1 tugrik</h1>
                    <a href='#' class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Buy Now
                        </span>
                    </a>
                </div>
                <div className='bg-Mont-Gray-100 rounded-xl p-10 flex flex-col lg:flex lg:flex-row justify-center items-center lg:justify-around shadow-lg'>
                    <PieChart />
                    <div className='flex-col pt-20'>
                        <div className=''>
                            <h1 className='text-white pb-5'>Contingency: 5%</h1>
                            <div className=' w-72 lg:w-96 h-3  bg-pink-200 rounded-xl'>
                                <div className=' w-48 lg:w-72 h-3 bg-Mont-pink-100 rounded-xl' ></div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-white pb-5'>Contingency: 5%</h1>
                            <div className=' w-72 lg:w-96 h-3  bg-pink-200 rounded-xl'>
                                <div className='w-56 h-3 bg-Mont-pink-100 rounded-xl' ></div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-white pb-5'>Contingency: 5%</h1>
                            <div className=' w-72 lg:w-96 h-3  bg-pink-200 rounded-xl'>
                                <div className='w-32 h-3 bg-Mont-pink-100 rounded-xl' ></div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-white pb-5'>Contingency: 5%</h1>
                            <div className=' w-72 lg:w-96 h-3  bg-pink-200 rounded-xl'>
                                <div className='w-14 h-3 bg-Mont-pink-100 rounded-xl' ></div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-white pb-5'>Contingency: 5%</h1>
                            <div className=' w-72 lg:w-96 h-3  bg-pink-200 rounded-xl'>
                                <div className=' w-56 h-3 bg-Mont-pink-100 rounded-xl' ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart
