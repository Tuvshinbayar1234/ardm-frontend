import React from 'react'
import { Disclosure } from '@headlessui/react'
import FAqs from '../assets/faq.png'
import {FaChevronCircleDown} from 'react-icons/fa'

const FAQ = () => {
    return (
        <div className=' bg-Mont-blue-100 pb-20 px-5'>
            <div className='container mx-auto'>
                <div className='flex space-x-5 items-center'>
                    <div className=' bg-Mont-white-100 w-[73px] h-[2px]'></div>
                    <h1 className='text-white text-xl'>WHY CHOOSE OUR TOKEN</h1>
                </div>
                <h1 className='text-white text-4xl pt-5 pb-5'>Frenquently Questions</h1>
                <div className='flex flex-col-reverse lg:flex lg:flex-row w-full justify-between'>
                    <div className='w-full lg:w-2/4 flex flex-col justify-start items-start pt-5'>
                        <Disclosure>
                            <Disclosure.Button className="py-5 w-full text-white text-xl flex items-center justify-between">
                                Is team pricing available?
                                <FaChevronCircleDown className='text-white text-2xl' />
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-300 text-sm">
                                Yes! You can purchase a license that you can share with your entire
                                team.
                            </Disclosure.Panel>
                        </Disclosure>
                        <Disclosure>
                            <Disclosure.Button className="py-5 w-full text-white text-xl flex items-center justify-between">
                                Is team pricing available?
                                <FaChevronCircleDown className='text-white text-2xl' />
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-300 text-sm">
                                Yes! You can purchase a license that you can share with your entire
                                team.
                            </Disclosure.Panel>
                        </Disclosure>
                        <Disclosure>
                            <Disclosure.Button className="py-5 w-full text-white text-xl flex items-center justify-between">
                                Is team pricing available?
                                <FaChevronCircleDown className='text-white text-2xl' />
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-300 text-sm">
                                Yes! You can purchase a license that you can share with your entire
                                team.
                            </Disclosure.Panel>
                        </Disclosure>
                        <Disclosure>
                            <Disclosure.Button className="py-5 w-full text-white text-xl flex items-center justify-between">
                                Is team pricing available?
                                <FaChevronCircleDown className='text-white text-2xl' />
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-300 text-sm">
                                Yes! You can purchase a license that you can share with your entire
                                team.
                            </Disclosure.Panel>
                        </Disclosure>
                    </div>
                    <div className='w-full lg:w-2/4 flex justify-end items-end'>
                        <img className='w-[545px] h-[399px]' src={FAqs} />
                    </div>
                </div>
                
            </div>            
        </div>
    )
}

export default FAQ;
