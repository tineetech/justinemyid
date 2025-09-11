"use client"

import LayoutMain from '@/components/LayoutMain'
import SectionMain from '@/components/SectionMain'
import React, { useEffect, useState } from 'react'

interface Experience {
  id: number
  type: "work" | "competition"
  title: string
  institution: string
  startDate: string
  endDate?: string | null
  description?: string
  status: string
}

const Page = () => {
  const [workExperience, setWorkExperience] = useState<Experience[]>([])
  const [competitionExperience, setCompetitionExperience] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch("/api/experience")
        const data: Experience[] = await res.json()

        // pisahkan berdasarkan type
        const work = data.filter(exp => exp.type === "work")
        const comp = data.filter(exp => exp.type === "competition")

        setWorkExperience(work)
        setCompetitionExperience(comp)
      } catch (err) {
        console.error("Failed to fetch experiences:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchExperience()
  }, [])


  return (
    <LayoutMain>
      <SectionMain className='container pt-[100px] px-5 py-5'>
        <div className='border-b border-gray-400 pb-5'>
          <h1 className='text-3xl flex font-bold'>Tentang Saya</h1>
          <p className='text-gray-400'>
            Beberapa pengalaman yang saya tempuh sampai saat ini.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">💼 Pengalaman Kerja</h2>
          {loading ? (
            <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px]"></div>
          ) : workExperience.length === 0 ? (
            <div className="overflow-hidden bg-gray-700 border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px] flex justify-center items-center">
                Tidak Ada Data.
            </div>
          ) : (
            <div className="space-y-4">
              {workExperience.map((exp) => (
                <div key={exp.id} className="p-4 border rounded-lg shadow-sm bg-gray-700">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400">
                    {exp.institution} — {exp.startDate.slice(0, 10)} {exp.endDate ? `s/d ${exp.endDate.slice(0, 10)}` : ""}
                  </p>
                  {exp.description && (
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Competition Experience */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">🏆 Pengalaman Lomba</h2>
          {loading ? (
            <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px]"></div>
          ) : competitionExperience.length === 0 ? (
            <div className="overflow-hidden bg-gray-700 border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[200px] flex justify-center items-center">
                Tidak Ada Data.
            </div>
          ) : (
            <div className="space-y-4">
              {competitionExperience.map((exp) => (
                <div key={exp.id} className="p-4 border rounded-lg shadow-sm bg-gray-700">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400">
                    {exp.institution} — {exp.startDate.slice(0, 10)} {exp.endDate ? `s/d ${exp.endDate.slice(0, 10)}` : ""}
                  </p>
                  {exp.description && (
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionMain>
    </LayoutMain>
  )
}

export default Page
