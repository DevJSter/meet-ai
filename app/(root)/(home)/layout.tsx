import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React, { ReactNode } from 'react'

const HomeLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='relative'>
        <NavBar />
        <div className='flex'>
            <SideBar />                                                 
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
            <div className='w-full'></div>
                 {children}
            </section>
        </div>
      <Footer />
    </div>
  )
}

export default HomeLayout