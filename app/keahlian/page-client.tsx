'use client'
import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React from 'react'
// Import komponen dari Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Import modul yang dipakai (opsional: Navigation, Pagination, Autoplay, dll)
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import style bawaan Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const skills = [
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "CodeIgniter", icon: "/icons/codeigniter.svg" },
  { name: "Yii", icon: "/icons/yii.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "jQuery", icon: "/icons/jquery.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React.js", icon: "/icons/react.svg" },
  { name: "Prisma.js", icon: "/icons/prisma.svg" },
  { name: "Firebase", icon: "/icons/firebase.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  { name: "PWA", icon: "/icons/pwa.svg" },
  { name: "Ngrok", icon: "/icons/ngrok.svg" },
  { name: "Gitlab", icon: "/icons/gitlab.svg" },
  { name: "DBeaver", icon: "/icons/dbeaver.svg" },
]

const sertifikasi = [
    { id: 1, img: "images/sertifikat1.jpg" },
    { id: 2, img: "images/sertifikat2.jpg" },
    { id: 3, img: "images/sertifikat3.jpg" },
    { id: 4, img: "images/sertifikat4.jpg" },
    { id: 5, img: "images/sertifikat5.jpg" },
];

const PageClient = () => {
  return (
    <LayoutMain>
      <SectionMain className='p-5'>
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
            <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 hover:border-gray-600 transition-all ease-in-out bg-gray-800/80 border border-gray-700 rounded-lg min-w-[140px] text-gray-200"
                        >
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span className="text-sm">{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="relative overflow-hidden mt-3">
                <div className="flex gap-4 animate-marquee-miss whitespace-nowrap">
                    {skills.concat(skills).map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 hover:border-gray-600 transition-all ease-in-out bg-gray-800/80 border border-gray-700 rounded-lg min-w-[140px] text-gray-200"
                        >
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span className="text-sm">{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
            <div className="relative overflow-hidden mt-3">
                <div className="flex gap-4 animate-marquee whitespace-nowrap">
                    {skills.concat(skills).map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 hover:border-gray-600 transition-all ease-in-out bg-gray-800/80 border border-gray-700 rounded-lg min-w-[140px] text-gray-200"
                        >
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span className="text-sm">{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <hr className="mt-8 border-gray-700" />

        
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white">Sertifikasi</h2>
          <p className="text-gray-400">
            Beberapa Sertifikat yang saya raih dalam mata lomba maupun pembelajaran/kelas.
          </p>
           <div className="w-full max-w-4xl mx-auto py-8">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                    delay: 2000, // jeda 2 detik
                    disableOnInteraction: false, // tetap jalan walau dihover
                    }}
                    loop={true} // looping terus
                    breakpoints={{
                    640: { slidesPerView: 1 }, // HP
                    768: { slidesPerView: 2 }, // Tablet
                    1024: { slidesPerView: 3 }, // Laptop
                    }}
                >
                    {sertifikasi.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex justify-center">
                        <img
                            src={item.img}
                            alt={`Sertifikat ${item.id}`}
                            className="rounded-xl shadow-lg w-full max-h-80 object-contain"
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
          <hr className="mt-4 border-gray-700" />
        </div>

      </SectionMain>
    </LayoutMain>
  )
}

export default PageClient
