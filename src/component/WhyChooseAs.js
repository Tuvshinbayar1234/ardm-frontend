import React from 'react'
import Background from '../assets/bg-banner.png'
import {FaMobileAlt, FaWallet , FaShieldAlt , FaBraille} from 'react-icons/fa'


const WhyChooseAs = () => {
    return (
        <div className=' bg-Mont-blue-100 pt-10 pb-10 px-5 xl:px-0' style={{ backgroundImage: `url(${Background})` }}>
            <div className='container mx-auto'>
                <div className=''>
                    <div className='flex space-x-5 items-center'>
                        <div className=' bg-Mont-white-100 w-[73px] h-[2px]'></div>
                        <h1 className='text-white'>WHY CHOOSE OUR TOKEN</h1>
                    </div>
                    <div className='xl:block hidden'>
                        <div className='flex flex-col items-center xl:flex xl:flex-row pt-24 space-x-5'> 
                            <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                <div className='flex flex-col'>
                                    <FaMobileAlt className='text-6xl text-Mont-Hover-blue-100' />
                                    <h1 className='text-4xl pt-5 w-3/4'>
                                        Mobile Payment make Easy
                                    </h1>
                                    <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                </div>
                            </div>
                            <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                <div className='flex flex-col'>
                                    <FaWallet className='text-6xl text-Mont-pink-100' />
                                    <h1 className='text-4xl pt-5 w-3/4'>
                                        Mobile Payment make Easy
                                    </h1>
                                    <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                </div>
                            </div>
                            <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                <div className='flex flex-col'>
                                    <FaShieldAlt className='text-6xl text-Mont-Green-100' />
                                    <h1 className='text-4xl pt-5 w-3/4'>
                                        Mobile Payment make Easy
                                    </h1>
                                    <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                </div>
                            </div>
                            <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                <div className='flex flex-col'>
                                    <FaBraille className='text-6xl text-Mont-Yellow-100' />
                                    <h1 className='text-4xl pt-5 w-3/4'>
                                        Mobile Payment make Easy
                                    </h1>
                                    <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className='lg:block sm:hidden xl:hidden hidden'>
                        <div className='flex flex-col items-center xl:flex xl:flex-row pt-24 space-x-5'> 
                            <div className='flex flex-row w-full'>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaMobileAlt className='text-6xl text-Mont-Hover-blue-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaWallet className='text-6xl text-Mont-pink-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-row'>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaShieldAlt className='text-6xl text-Mont-Green-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaBraille className='text-6xl text-Mont-Yellow-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:block lg:hidden'>
                            <div className='flex flex-col items-center xl:flex xl:flex-row pt-24 space-x-5'> 
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaMobileAlt className='text-6xl text-Mont-Hover-blue-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaWallet className='text-6xl text-Mont-pink-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaShieldAlt className='text-6xl text-Mont-Green-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                                <div className='w-full xl:w-1/4 h-96 p-5 text-white hover:bg-Mont-Card-100 transition-all duration-300 rounded-xl'>
                                    <div className='flex flex-col'>
                                        <FaBraille className='text-6xl text-Mont-Yellow-100' />
                                        <h1 className='text-4xl pt-5 w-3/4'>
                                            Mobile Payment make Easy
                                        </h1>
                                        <p className='w-3/4 pt-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio?</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseAs