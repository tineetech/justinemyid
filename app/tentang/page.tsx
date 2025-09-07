import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React from 'react'

const page = () => {
  return (
    <LayoutMain>
    <SectionMain className='container px-5 py-5'>
        <div className='border-b border-gray-400 pb-5'>
            <h1 className='text-3xl flex' style={{fontWeight: 700}}>Tentang Saya</h1>
            <p className='text-gray-400'>Beberapa pengalaman yang saya tempuh sampai saat ini.</p>
        </div>
        
        
    </SectionMain>
    </LayoutMain>
  )
}

export default page