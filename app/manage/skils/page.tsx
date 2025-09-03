"use client"

import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DataTable from "@/components/data-table"
import { Button } from "@/components/ui/button"
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

interface Skill {
  id: number
  name: string
  image: string
  bagan: number
  status: string
  createdAt: string
  updatedAt: string
}

export default function Page() {
  const [data, setData] = useState<Skill[]>([])
  const [loading, setLoading] = useState(false)

  // dialog state
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Skill | null>(null)
  const [form, setForm] = useState({ name: "", image: "", bagan: 0, status: "active" })
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  // ambil data
  async function fetchData() {
    setLoading(true)
    const res = await fetch("/api/skils", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()

    const mapped = json.map((item: Skill, index: number) => ({
      ...item,
      no: index + 1,
    }))
    setData(mapped)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // create / update
  async function handleSave() {
    setUploading(true)

    try {
      let imageUrl = form.image

      if (file) {
        const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
          method: "POST",
          body: file,
        })
        if (!res.ok) throw new Error("Upload gagal")
        const blob = await res.json()
        imageUrl = blob.url
      }

      const method = editing ? "PUT" : "POST"
      const body = editing
        ? { ...form, id: editing.id, image: imageUrl }
        : { ...form, image: imageUrl }

      await fetch("/api/skils", {
        method,
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      })

      setOpen(false)
      setEditing(null)
      setForm({ name: "", image: "", bagan: 0, status: "active" })
      setFile(null)
      fetchData()
    } catch (err) {
      console.error("Save error:", err)
    } finally {
      setUploading(false)
    }
  }

  // delete
  async function handleDelete(row: Skill) {
    await fetch("/api/skils", {
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
    const f = e.target.files?.[0] ?? null
    setFile(f)
  }

  const columns = [
    { key: "no", header: "No" },
    { key: "name", header: "Nama Skill" },
    {
      key: "image",
      header: "Image",
      render: (row: Skill) => (
        <Image
          width={40}
          height={40}
          src={row.image}
          alt={row.name}
          className="h-12 w-12 object-cover rounded"
        />
      ),
    },
    { key: "bagan", header: "Bagan" },
    { key: "status", header: "Status" },
    {
      key: "createdAt",
      header: "Dibuat",
      render: (row: Skill) => <span>{row.createdAt.slice(0, 10)}</span>,
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-5">
              <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <Button onClick={() => setOpen(true)}>+ Tambah</Button>
              </div>

              <DataTable
                columns={columns}
                data={data}
                rowKey="id"
                loading={loading}
                onEdit={(row: Skill) => {
                  setEditing(row)
                  setForm({
                    name: row.name,
                    image: row.image,
                    bagan: row.bagan,
                    status: row.status,
                  })
                  setOpen(true)
                }}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </SidebarInset>

      {/* dialog create / edit */}
      <Dialog
        open={open}
        onOpenChange={(val) => {
          setOpen(val)
          if (!val) {
            setEditing(null)
            setForm({ name: "", image: "", bagan: 0, status: "active" })
            setFile(null)
          }
        }}
      >
        <DialogContent forceMount>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Skill" : "Tambah Skill"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Nama</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Skill"
              />
            </div>
            <div>
              <Label>Bagan</Label>
              <Input
                type="number"
                value={form.bagan}
                onChange={(e) => setForm({ ...form, bagan: Number(e.target.value) })}
                placeholder="Nomor bagan"
              />
            </div>
            <div>
              <Label>Upload Gambar</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
              {file && (
                <p className="text-sm text-gray-500 mt-1">
                  File siap diupload: {file.name}
                </p>
              )}
              {!file && form.image && (
                <Image
                  width={40}
                  height={40}
                  src={form.image}
                  alt="preview"
                  className="mt-2 rounded border"
                />
              )}
            </div>
            <div>
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(val) => setForm({ ...form, status: val })}
              >
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
