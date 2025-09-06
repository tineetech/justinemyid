"use client"

import LayoutMain from "@/components/LayoutMain"
import SectionMain from "@/components/SectionMain"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FaCode, FaPalette, FaCube, FaLayerGroup } from "react-icons/fa"
import Image from "next/image"

const categories = [
  { key: "all", label: "Semua", icon: <FaLayerGroup /> },
  { key: "code", label: "Kode", icon: <FaCode /> },
  { key: "uiux", label: "UI/UX", icon: <FaPalette /> },
  { key: "design", label: "Desain", icon: <FaPalette /> },
  { key: "product", label: "Produk", icon: <FaCube /> },
]

interface PortoJenisResponse {
  name: string;
}

interface PortoResponse {
  no: number;
  title: string;
  description: string;
  category: string;
  type: string;
  isPrimary: boolean;
  PortoJenis: PortoJenisResponse;
  url: string;
  image: string;
}

interface Porto {
  no: number;
  title: string;
  desc: string;
  category: string;
  type: string;
  featured: boolean;
  link: string;
  image: string;
}

const PageClient = () => {
  const [filter, setFilter] = useState("all")
  const [porto, setPorto] = useState<Porto[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPorto = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/portofolios')

      const json = await res.json()
      
      const mapped = json.map((item: PortoResponse, index: number) => ({
        ...item,
        no: index++,
        title: item.title,
        desc: item.description,
        category: item.category,
        type: item.PortoJenis.name,
        featured: item.isPrimary,
        link: item.url,
        image: item.image
      }))
      setPorto(mapped)

      setLoading(false)
    } catch {
      console.error('Error while fetching portofolio')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPorto()
  }, [])

  const filteredProjects =
    filter === "all" ? porto : porto.filter((p) => p.category === filter)

  return (
    <LayoutMain>
      <SectionMain className="p-5">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Portofolio</h2>
          <p className="text-gray-400">
            Jelajahi proyek dan karya terbaru saya.
          </p>
          <hr className="mt-4 border-gray-700" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = filter === cat.key
            return (
              <Button
                key={cat.key}
                // variant={isActive ? "default" : "outline"}
                className={`
                  gap-2 bg-gray-700
                  ${isActive 
                    ? " text-indigo-400 " 
                    : " text-gray-500"}
                `}
                onClick={() => setFilter(cat.key)}
              >
                {cat.icon}
                {cat.label}
              </Button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid relative gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <>
              <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[300px]"></div>
              <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[300px]"></div>
              <div className="overflow-hidden bg-gray-200 bg-opacity-30 animate-pulse border-gray-700 hover:bg-gray-700 transition rounded-2xl w-[100%] h-[300px]"></div>
            </>
          ) : filteredProjects.length > 0 ? filteredProjects.map((project, i) => (
            <Card
              key={i}
              onClick={() => window.open(project.link)}
              className="overflow-hidden bg-gray-800 border-gray-700 hover:bg-gray-700 transition rounded-2xl"
            >
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-amber-500 text-black">
                    Unggulan
                  </Badge>
                )}
              </div>
              <CardHeader>
                <p className="text-sm text-gray-400">{project.type}</p>
                <CardTitle className="text-lg text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </CardContent>
            </Card>
          )) : (
            <div className="bg-gray-700 w-full h-[400px] absolute rounded-xl flex justify-center items-center text-center">
              Tidak ada data.
            </div>
          )}
        </div>
      </SectionMain>
    </LayoutMain>
  )
}

export default PageClient