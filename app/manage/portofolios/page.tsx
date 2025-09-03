"use client"

import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
import Swal from "sweetalert2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

interface Portfolio {
  id: number
  title: string
  image: string
  portoJenisId: number
  status: string
  description: string
  isPrimary: boolean
  category: string
  url: string
  createdAt: string
  updatedAt: string
}

interface PortoJenis {
  id: number
  name: string
}

export default function Page() {
  const [data, setData] = useState<Portfolio[]>([])
  const [portoJenisList, setPortoJenisList] = useState<PortoJenis[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Portfolio | null>(null)
  const [form, setForm] = useState({
    title: "",
    image: "",
    portoJenisId: 0,
    status: "active",
    description: "",
    isPrimary: false,
    category: "",
    url: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  async function fetchData() {
    setLoading(true)
    const res = await fetch("/api/portofolios", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()
    const mapped = json.map((item: Portfolio, index: number) => ({
      ...item,
      no: index + 1,
    }))
    setData(mapped)
    setLoading(false)
  }

  async function fetchPortoJenis() {
    const res = await fetch("/api/porto-jenis", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()
    setPortoJenisList(json)
  }

  useEffect(() => {
    fetchData()
    fetchPortoJenis()
  }, [])

  async function handleSave() {
    setUploading(true)
    try {
      let imageUrl = form.image
      if (file) {
        const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
          method: "POST",
          body: file,
        })
        const blob = await res.json()
        imageUrl = blob.url
      }

      const method = editing ? "PUT" : "POST"
      const body = editing ? { ...form, id: editing.id, image: imageUrl } : { ...form, image: imageUrl }

      const res = await fetch("/api/portofolios", {
        method,
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: json.error || "Terjadi kesalahan!",
          footer: json.fields ? `Missing: ${json.fields.join(", ")}` : "",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Data berhasil disimpan",
        });
      }

      setOpen(false)
      setEditing(null)
      setForm({
        title: "",
        image: "",
        portoJenisId: 0,
        status: "active",
        description: "",
        isPrimary: false,
        category: "",
        url: "",
      })
      setFile(null)
      fetchData()
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(row: Portfolio) {
    await fetch("/api/portofolios", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: row.id }),
    })
    fetchData()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFile(e.target.files?.[0] ?? null)
  }

  const columns = [
    { key: "no", header: "No" },
    { key: "title", header: "Judul" },
    {
      key: "image",
      header: "Image",
      render: (row: Portfolio) => (
        <Image width={40} height={40} src={row.image} alt={row.title} className="h-12 w-12 object-cover rounded" />
      ),
    },
    {
      key: "portoJenisId",
      header: "Jenis",
      render: (row: Portfolio) => {
        const jenis = portoJenisList.find((j) => j.id === row.portoJenisId)
        return <span>{jenis ? jenis.name : "-"}</span>
      },
    },
    { key: "description", header: "Deskripsi" },
    { key: "url", header: "URL", render: (row: Portfolio) => <a className="text-blue-600" target="_blank" href={row.url}>Klik disini.</a>, },
    {
      key: "isPrimary",
      header: "IsPrimary",
      render: (row: Portfolio) => <span>{row.isPrimary ? "Ya" : "Tidak"}</span>,
    },
    { key: "category", header: "Kategori" },
    { key: "status", header: "Status" },
    {
      key: "createdAt",
      header: "Dibuat",
      render: (row: Portfolio) => <span>{row.createdAt.slice(0, 10)}</span>,
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="px-5 mt-10">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <Button onClick={() => setOpen(true)}>+ Tambah</Button>
          </div>
          <DataTable
            columns={columns}
            data={data}
            rowKey="id"
            loading={loading}
            onEdit={(row: Portfolio) => {
              setEditing(row)
              setForm({
                title: row.title,
                image: row.image,
                portoJenisId: row.portoJenisId,
                status: row.status,
                description: row.description,
                isPrimary: row.isPrimary,
                category: row.category,
                url: row.url,
              })
              setOpen(true)
            }}
            onDelete={handleDelete}
          />
        </div>
      </SidebarInset>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent forceMount className="!h-[80vh] !overflow-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Portofolio" : "Tambah Portofolio"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Judul</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Judul portofolio"
              />
            </div>

            <div>
              <Label>Jenis Portofolio</Label>
              <Select
                value={form.portoJenisId.toString()}
                onValueChange={(val) => setForm({ ...form, portoJenisId: Number(val) })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jenis portofolio" />
                </SelectTrigger>
                <SelectContent>
                  {portoJenisList.map((jenis) => (
                    <SelectItem key={jenis.id} value={jenis.id.toString()}>
                      {jenis.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Deskripsi</Label>
              <Input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Deskripsi portofolio"
              />
            </div>

            <div>
              <Label>URL</Label>
              <Input
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                placeholder="URL portofolio"
              />
            </div>

            <div>
              <Label>Apakah Utama?</Label>
              <Select
                value={form.isPrimary == true ? "true" : "false"}
                onValueChange={(val) => setForm({ ...form, isPrimary: val == "true" ? true : false })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Ya</SelectItem>
                  <SelectItem value="false">Tidak</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Kategori</Label>
              <Input
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="Kategori portofolio"
              />
            </div>

            <div>
              <Label>Upload Gambar</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
              {!file && form.image && (
                <Image width={60} height={60} src={form.image} alt="preview" className="mt-2 rounded border" />
              )}
            </div>

            <div>
              <Label>Status</Label>
              <Select value={form.status} onValueChange={(val) => setForm({ ...form, status: val })}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleSave} disabled={uploading}>
              {uploading ? "Menyimpan..." : editing ? "Update" : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}
