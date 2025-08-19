"use client"

import LayoutMain from "@/components/LayoutMain"
import SectionMain from "@/components/SectionMain"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaCode, FaPalette, FaCube, FaLayerGroup } from "react-icons/fa"

const categories = [
  { key: "all", label: "Semua", icon: <FaLayerGroup /> },
  { key: "code", label: "Kode", icon: <FaCode /> },
  { key: "uiux", label: "UI/UX", icon: <FaPalette /> },
  { key: "design", label: "Desain", icon: <FaPalette /> },
  { key: "product", label: "Produk", icon: <FaCube /> },
]

const projects = [
  {
    title: "Personal Portfolio",
    desc: "My Personal web portfolio is built with Fullstack Next.js framework as the...",
    category: "code",
    type: "Proyek Sumber Terbuka",
    featured: true,
    link: "https://dwiwijaya.vercel.app",
    image: "/images/bgheader.jpg",
  },
  {
    title: "Lazyplay",
    desc: "A web application for creating and playing a dynamic playlist.",
    category: "product",
    type: "Proyek Pribadi",
    featured: true,
    link: "#",
    image: "/portfolio2.png",
  },
  {
    title: "myLink",
    desc: "Linktree clone with some customization features.",
    category: "code",
    type: "Proyek Sumber Terbuka",
    featured: true,
    link: "#",
    image: "/portfolio3.png",
  },
  {
    title: "Personal Portfolio",
    desc: "My Personal web portfolio is built with Fullstack Next.js framework as the...",
    category: "code",
    type: "Proyek Sumber Terbuka",
    featured: true,
    link: "https://dwiwijaya.vercel.app",
    image: "/portfolio1.png",
  },
  {
    title: "Lazyplay",
    desc: "A web application for creating and playing a dynamic playlist.",
    category: "product",
    type: "Proyek Pribadi",
    featured: true,
    link: "#",
    image: "/portfolio2.png",
  },
  {
    title: "myLink",
    desc: "Linktree clone with some customization features.",
    category: "code",
    type: "Proyek Sumber Terbuka",
    featured: true,
    link: "#",
    image: "/portfolio3.png",
  },
]

const PageClient = () => {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Card
              key={i}
              className="overflow-hidden bg-gray-800 border-gray-700 hover:bg-gray-700 transition rounded-2xl"
            >
              <div className="relative">
                <img
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
          ))}
        </div>
      </SectionMain>
    </LayoutMain>
  )
}

export default PageClient