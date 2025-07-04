"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Sidebar = () => {
    const [isClick, setIsClick] = useState(false)
    const path = usePathname()
    console.log(path)

  return (
    <div className={`${isClick ? 'w-[400px]' : 'w-[90px]'} relative overflow- p-2 main-sidebar md:h-[90%] transition-all ease-in-out bg-gray-800 rounded-2xl`}>
        <div className={` absolute start-0  pl-5 h-full `} style={{fontSize: '23px', zIndex: 999}}>
            <div className='flex flex-col w-full h-full justify-center itemce relative'>
                {
                    isClick ? (
                        <div className='absolute top-0 cursor-pointer mt-5 bg-indigo-600 p-3 rounded-xl bg-opacity-30 w-[45px] flex items-center justify-center'>
                            <i className="fa fa-bars" onClick={() => setIsClick(!isClick)} />
                        </div>
                    ) : (
                        <div className='absolute top-0 cursor-pointer mt-5 bg-indigo-600 p-3 rounded-xl bg-opacity-30 w-[45px] flex items-center justify-center'>
                            <i className="fa fa-bars" onClick={() => setIsClick(!isClick)} />
                        </div>
                    )
                }
                <div className="flex flex-col items-center gap-5 mt-5 -ml-1">
                    <div className="flex group items-center relative w-full" onClick={() => window.location.href = '/'}>
                        <i className={`fa fa-home p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Beranda</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Beranda</span>
                        </div>
                    </div>
                    <div className="flex group items-center w-full" onClick={() => window.location.href = '/tentang'}>
                        <i className={`fa fa-user p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/tentang' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Tentang</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Tentang</span>
                        </div>
                    </div>
                    <div className="flex group items-center w-full" onClick={() => window.location.href = '/skillset'}>
                        <i className={`fa fa-code p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/skillset' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Keahlian</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Keahlian</span>
                        </div>
                    </div>
                    <div className="flex group items-center w-full" onClick={() => window.location.href = '/services'}>
                        <i className={`fa fa-briefcase p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/services' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Layanan</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Layanan</span>
                        </div>
                    </div>
                    <div className="flex group items-center w-full" onClick={() => window.location.href = '/portofolio'}>
                        <i className={`fa fa-book p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/portofolio' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Portofolio</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Portofolio</span>
                        </div>
                    </div>
                    <div className="flex group items-center w-full" onClick={() => window.location.href = '/comunity'}>
                        <i className={`fa fa-comment p-3 cursor-pointer w-[50px] icon-sidebars ${path === '/comunity' ? 'text-indigo-500' : ''}`} />
                        <span className={`${isClick ? 'flex' : 'hidden'} ml-2 text-sm`}>Komunitas</span>
                        <div className={`span-menu hidden ${isClick ? '' : 'group-hover:flex'} transition-all ease-in-out absolute w-20 h-auto justify-center items-center py-1 rounded-xl bg-gray-700 bg-opacity-70 -right-20`} style={{zIndex: 99999, backdropFilter: 'blur(2px)'}}>
                            <span className={` m-0 text-sm`}>Komunitas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`p-5 absolute ${isClick ? 'flex' : 'hidden'} flex-col end-0 w-[77%] h-full`}>
            <div className=''>
                <h1>Selamat Datang !</h1>
                <span className='text-gray-500 text-sm'>Website Justine 2025.</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar