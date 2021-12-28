import React from 'react'
import { FaInstagram , FaFacebookF , FaLinkedinIn } from 'react-icons/fa'

const Team = () => {

    const teamMembers = [
        {
            name: 'М. Энх-Амгалан',
            src: '/profile-1.jpg',
            rolePosition: 'Төслийн ерөнхий удирдагч'
        },
        {
            name: 'Г. Мөнх-Од',
            src: '/profile-2.jpg',
            rolePosition: 'Төслийн ахлах хөгжүүлэгч'
        },
        {
            name: 'Д. Анхбаясгалан',
            src: '/profile-3.jpg',
            rolePosition: 'Төслийн инновацийн блокчэйн ахлах'
        },
        {
            name: 'М. Энx-Улирал',
            src: '/profile-4.jpg',
            rolePosition: 'Блокчэйн судалгааны ахлах'
        },
        {
            name: 'А. Ундрал',
            src: '/profile-5.jpg',
            rolePosition: 'Хамтын ажиллагаа'
        },
        {
            name: 'Г. Нарангариг ',
            src: '/profile.jpg',
            rolePosition: 'Ахлах блокчэйн хөгжүүлэгч'
        },
        {
            name: 'М. Болортоль',
            src: '/profile-6.jpg',
            rolePosition: 'Хөгжүүлэгч'
        },
        {
            name: 'Б. Баттулга',
            src: '/profile-7.jpg',
            rolePosition: 'Хөгжүүлэгч'
        },
        {
            name: 'А. Амартүвшин',
            src: '/profile-8.jpg',
            rolePosition: 'Блокчэйн судалгааны баг'
        },
        {
            name: 'Г. Ууганбат',
            src: '/profile-9.jpg',
            rolePosition: 'Хөгжүүлэгч'
        },
    ]

    return (
        <div id='teamMembers' className=' bg-Mont-blue-100 w-screen py-10 px-5'>
            <div className='container mx-auto'>
                <h2 className='lg:text-5xl lg:text-left text-3xl font-semibold text-center text-white'>Менежментийн баг</h2>
                <div className='flex flex-wrap justify-center mt-5 lg:mt-10'>
                    {
                        teamMembers.map((member, index) => (
                            <div key={index} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col justify-center items-center py-5 lg:py-14'>
                                <div className='w-2/3 lg:w-3/5 rounded-full ' style={{ boxShadow: '5px 3px 3px 0px #3772ff' }}>
                                    <img className='rounded-full' src={member.src} alt="member" />
                                </div>
                                <div className='mt-5 text-center'>
                                    <p className='text-2xl font-medium text-white'>{member.name}</p>
                                    <p className='text-gray-200 text-sm font-thin'>{member.rolePosition}</p>
                                    <div className='flex space-x-5 justify-center text-white'>
                                        <div className=' w-7 h-7 cursor-pointer rounded-lg flex justify-center items-center' style={{backgroundColor: 'rgba(72, 220, 168, 0.2)'}}>
                                            <FaInstagram className='text-sm' />
                                        </div>
                                        <div className=' w-7 h-7 cursor-pointer rounded-lg flex justify-center items-center' style={{backgroundColor: 'rgba(72, 220, 168, 0.2)'}}>
                                            <FaFacebookF className='text-sm' /> 
                                        </div>
                                        <div className=' w-7 h-7 cursor-pointer rounded-lg flex justify-center items-center' style={{backgroundColor: 'rgba(72, 220, 168, 0.2)'}}>
                                            <FaLinkedinIn  className='text-sm' /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Team