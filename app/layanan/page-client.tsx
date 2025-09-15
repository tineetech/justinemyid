'use client'
import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import { FaCode, FaPaintBrush, FaBullhorn, FaComments } from "react-icons/fa";
import React from 'react'

// Shadcn UI components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Web/App Development",
    desc: "Membangun situs web responsif dan aplikasi mobile yang cepat serta mudah digunakan.",
    icon: <FaCode className="text-4xl text-indigo-400" />,
  },
  {
    title: "Desain UI/UX",
    desc: "Saya mendesain antarmuka yang memukau dan intuitif, meningkatkan pengalaman pengguna secara maksimal.",
    icon: <FaPaintBrush className="text-4xl text-indigo-400" />,
  },
  {
    title: "Digital Business",
    desc: "Meningkatkan bisnis dengan strategi digital modern dan solusi teknologi yang tepat.",
    icon: <FaBullhorn className="text-4xl text-indigo-400" />,
  },
  {
    title: "IoT Development",
    desc: "Membangun solusi IoT yang menghubungkan perangkat fisik dengan sistem digital untuk otomatisasi cerdas.",
    icon: <FaComments className="text-4xl text-indigo-400" />,
  },
]

// Data untuk FAQ
const faqs = [
  {
    question: "Bagaimana proses kerja dengan Anda?",
    answer: "Prosesnya dimulai dari konsultasi awal, perencanaan, pengembangan, hingga launching. Saya akan selalu berkomunikasi secara terbuka untuk memastikan proyek berjalan lancar dan sesuai ekspektasi Anda.",
  },
  {
    question: "Berapa biaya untuk layanan Anda?",
    answer: "Biaya sangat bervariasi tergantung pada ruang lingkup dan kompleksitas proyek. Setelah konsultasi awal dan memahami kebutuhan Anda, saya akan menyusun proposal dan estimasi biaya yang transparan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
    answer: "Durasi proyek tergantung pada jenis dan kompleksitasnya. Proyek sederhana mungkin memakan waktu beberapa minggu, sementara proyek yang lebih besar bisa memakan waktu beberapa bulan. Saya akan memberikan estimasi waktu yang jelas setelah kita mendiskusikan semua detail.",
  },
  {
    question: "Apakah Anda juga menawarkan dukungan pasca-peluncuran?",
    answer: "Ya, saya menyediakan dukungan pasca-peluncuran untuk memastikan semuanya berjalan dengan baik. Layanan ini mencakup pemeliharaan, pembaruan, dan perbaikan bug, jika diperlukan.",
  },
];

const PageClient = () => {
  return (
    <LayoutMain>
      <SectionMain className='p-5 pt-[100px] md:pt-5'>
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Layanan</h2>
          <p className="text-gray-400">
            Temukan layanan khusus yang saya tawarkan untuk klien.
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

        {/* Services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-gray-700/60 border border-gray-700 rounded-xl hover:bg-gray-800 transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>


        {/* Accordion Q&A Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tanya Jawab (FAQ)
          </h2>
          <div className='w-full bg-gray-700 px-6 rounded-xl'>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} >
                  <AccordionTrigger className="text-left text-white hover:text-indigo-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SectionMain>
    </LayoutMain>
  )
}

export default PageClient