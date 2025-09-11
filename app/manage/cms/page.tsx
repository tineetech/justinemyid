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
import { Textarea } from "@/components/ui/textarea"

interface Cms {
  id: number
  name: string
  content: string
  status: string
  createdAt: string
  updatedAt: string
}

export default function Page() {
  const [data, setData] = useState<Cms[]>([])
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Cms | null>(null)
  const [form, setForm] = useState<Partial<Cms>>({
    name: "",
    content: "",
    status: "active",
  })
  const [saving, setSaving] = useState(false)

  async function fetchData() {
    setLoading(true)
    const res = await fetch("/api/cms", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()
    const mapped = json.map((item: Cms, index: number) => ({
      ...item,
      no: index + 1,
    }))
    setData(mapped)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleSave() {
    setSaving(true)
    const method = editing ? "PUT" : "POST"
    const body = editing ? { ...form, id: editing.id } : form

    await fetch("/api/cms", {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })

    setOpen(false)
    setEditing(null)
    setForm({ name: "", content: "", status: "active" })
    fetchData()
    setSaving(false)
  }

  async function handleDelete(row: Cms) {
    await fetch("/api/cms", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: row.id }),
    })
    fetchData()
  }

  const columns = [
    { key: "no", header: "No" },
    { key: "name", header: "Judul" },
    { key: "content", header: "Konten" },
    { key: "status", header: "Status" },
    {
      key: "createdAt",
      header: "Dibuat",
      render: (row: Cms) => <span>{row.createdAt.slice(0, 10)}</span>,
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
                <h1 className="text-2xl font-bold">CMS Management</h1>
                <Button
                  onClick={() => {
                    setEditing(null)
                    setForm({ name: "", content: "", status: "active" })
                    setOpen(true)
                  }}
                >
                  + Tambah
                </Button>
              </div>

              <DataTable
                columns={columns}
                data={data}
                rowKey="id"
                loading={loading}
                onEdit={(row: Cms) => {
                  setEditing(row)
                  setForm(row)
                  setOpen(true)
                }}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </SidebarInset>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent forceMount>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit CMS" : "Tambah CMS"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Judul</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Judul CMS"
              />
            </div>

            <div>
              <Label>Konten</Label>
              <Textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Isi konten CMS..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Menyimpan..." : editing ? "Update" : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}
