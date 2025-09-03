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

interface PortoJenis {
  id: number
  name: string
  status: string
  createdAt: string
  updatedAt: string
}

export default function Page() {
  const [data, setData] = useState<PortoJenis[]>([])
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<PortoJenis | null>(null)
  const [form, setForm] = useState({ name: "", status: "active" })
  const [saving, setSaving] = useState(false)

  async function fetchData() {
    setLoading(true)
    const res = await fetch("/api/porto-jenis", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()
    const mapped = json.map((item: PortoJenis, index: number) => ({
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

    await fetch("/api/porto-jenis", {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })

    setOpen(false)
    setEditing(null)
    setForm({ name: "", status: "active" })
    fetchData()
    setSaving(false)
  }

  async function handleDelete(row: PortoJenis) {
    await fetch("/api/porto-jenis", {
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
    { key: "name", header: "Nama Jenis" },
    { key: "status", header: "Status" },
    {
      key: "createdAt",
      header: "Dibuat",
      render: (row: PortoJenis) => <span>{row.createdAt.slice(0, 10)}</span>,
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
                <h1 className="text-2xl font-bold">Jenis Portofolio</h1>
                <Button onClick={() => setOpen(true)}>+ Tambah</Button>
              </div>

              <DataTable
                columns={columns}
                data={data}
                rowKey="id"
                loading={loading}
                onEdit={(row: PortoJenis) => {
                  setEditing(row)
                  setForm({ name: row.name, status: row.status })
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
            <DialogTitle>{editing ? "Edit Jenis" : "Tambah Jenis"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Nama Jenis</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama jenis portofolio"
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
