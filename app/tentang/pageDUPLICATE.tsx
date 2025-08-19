import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React from 'react'

const page = () => {
  return (
    <LayoutMain>
    <SectionMain className='container px-5 py-5'>
        <div className='border-b border-gray-400 pb-5'>
            <div className='w-full group transition-all ease-in-out flex justify-center items-center h-[250px] overflow-hidden rounded-lg mb-5' style={{background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%), url('images/justine2.png') center center"}}>
                <div className='group-hover:flex hidden'>
                    <button className='bg-gray-600 py-2 px-4 bg-opacity-60 hover:bg-indigo-600 transition-all ease-in-out rounded-xl' style={{backdropFilter: 'blur(2px)'}}>
                        <span>Lihat Portofolio Ku</span>
                        <i className='fa fa-arrow-right ml-2'></i>
                    </button>
                </div>
            </div>
            <h1 className='text-3xl flex' style={{fontWeight: 700}}>Tentang <div className="text-indigo-400 ml-2">Saya</div></h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non possimus dolorem libero quidem voluptas iure facilis sequi. Accusantium natus sequi dolores deleniti numquam. Tempore aperiam praesentium nihil officiis iste.</p>
        </div>

        <div className='mt-5'>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laudantium nostrum quisquam vel? Consequatur aliquid cumque ratione minus rem perferendis illum. Vero aliquid, libero nihil nisi fugit, porro similique, expedita ullam quasi et dolore labore quidem. Qui voluptate eligendi a error itaque expedita nihil sequi dicta, recusandae magni facere totam distinctio! Perferendis consectetur optio assumenda dicta, deserunt explicabo quae possimus obcaecati ex nihil eaque dignissimos, consequuntur ratione soluta sunt tempore? Doloribus est dolor autem quis amet laboriosam facere corrupti nihil.</p>
        </div>
    </SectionMain>
    </LayoutMain>
  )
}

export default page