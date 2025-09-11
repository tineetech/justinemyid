'use client'
import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React, { useEffect, useState } from 'react'

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoLoop from '@/components/LogoLoop';
import Image from 'next/image';

interface Skill {
  id: number
  name: string
  image: string
  status: string
  bagan: number
}

const PageClient = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [sertifikasi, setSertifikasi] = useState<Skill[]>([])
  const [loadingSkils, setLoadingSkils] = useState(false)
  const [loadingSertif, setLoadingSertif] = useState(false)

  const fetchSkils = async () => {
    setLoadingSkils(true)
    try {
      const res = await fetch('/api/skils')
      const json = await res.json()
      setSkills(json)
      setLoadingSkils(false)
    } catch (err) {
      setLoadingSkils(false)
      console.log("Error fetching skills:", err)
    }
  }

  const fetchSertifikat = async () => {
    setLoadingSertif(true)
    try {
      const res = await fetch('/api/sertifikats')
      const json = await res.json()
      setSertifikasi(json)
      setLoadingSertif(false)
    } catch (err) {
      setLoadingSertif(false)
      console.log("Error fetching sertifikat:", err)
    }
  }

  useEffect(() => {
    fetchSkils()
    fetchSertifikat()
  }, [])

  // Kelompokkan berdasarkan bagan
  const bagan1 = skills.filter((s) => s.bagan === 1)
  const bagan2 = skills.filter((s) => s.bagan === 2)
  const bagan3 = skills.filter((s) => s.bagan === 3)
  const renderMarquee = (data: Skill[]) => {
    console.log(data ? data[0] : '')
    return (
    <div className='mt-5'>
      <LogoLoop
        logos={data.map((skill) => ({
          node: <img src={skill.image} alt={skill.name} className="h-6 w-6" />,
          title: skill.name,
          href: "#", // kalau mau link
        }))}
        speed={30}
        direction={data.length > 0 && data[0].bagan == 2 ? 'right' : 'left'}
        logoHeight={32}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="rgb(31,41,55)"
        ariaLabel="Skills"
      />
    </div>
  )}


  return (
    <LayoutMain>
      <SectionMain className='p-5 pt-[100px]'>
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Keahlian</h2>
          <p className="text-gray-400">
            Jelajahi terkait keahlian teknis dan alat profesional saya.
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

        {/* Skillset Auto Scroll */}
        <div>
          {
            loadingSkils ? (
              <>
                <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[50px]"></div>
                <div className="mt-3 overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[50px]"></div>
                <div className="mt-3 overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[50px]"></div>
              </>
            ) : skills.length > 0 ? (
              <>
              {renderMarquee(bagan1)}
              {renderMarquee(bagan2)}
              {renderMarquee(bagan3)}
              </>
            ) : (
              <div className="overflow-hidden bg-gray-700 border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[180px] flex justify-center items-center">
                Tidak Ada Data.
              </div>
            )
          }
        </div>

        <hr className="mt-8 border-gray-700" />

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white">Sertifikasi</h2>
          <p className="text-gray-400">
            Beberapa Sertifikat yang saya raih dalam mata lomba maupun pembelajaran/kelas.
          </p>
          <div className="w-full py-8">
            {
              loadingSertif ? (
                <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px]"></div>
              ) : sertifikasi.length > 0 ? (
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className=""
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {sertifikasi.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex rounded-xl mb-10 justify-center w-full h-[200px]">
                      <Image
                        width={100}
                        height={100}
                        src={item.image}
                        alt={item.name}
                        className="w-full rounded-xl shadow-lg object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              ) : (
              <div className="overflow-hidden bg-gray-700 border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px] flex justify-center items-center">
                Tidak Ada Data.
              </div>
              )
            }

          </div>
          <hr className="mt-4 border-gray-700" />
        </div>
      </SectionMain>
    </LayoutMain>
  )
}

export default PageClient
