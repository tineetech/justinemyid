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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Experience {
  id: number
  type: "work" | "competition"
  title: string
  institution: string
  startDate: string
  endDate?: string | null
  description?: string | null
  status: string
  createdAt: string
  updatedAt: string
}

export default function Page() {
  const [data, setData] = useState<Experience[]>([])
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Experience | null>(null)
  const [form, setForm] = useState<Partial<Experience>>({
    type: "work",
    title: "",
    institution: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "active",
  })
  const [saving, setSaving] = useState(false)

  async function fetchData() {
    setLoading(true)
    const res = await fetch("/api/experience", {
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
    })
    const json = await res.json()
    const mapped = json.map((item: Experience, index: number) => ({
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
    const body = {
      ...form,
      startDate: form.startDate ? new Date(form.startDate).toISOString() : null,
      endDate: form.endDate ? new Date(form.endDate).toISOString() : null,
      id: editing ? editing.id : undefined,
    }

    await fetch("/api/experience", {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })

    setOpen(false)
    setEditing(null)
    setForm({ title: "", description: "", type: "work", startDate: "", endDate: "" })
    fetchData()
    setSaving(false)
  }


  async function handleDelete(row: Experience) {
    await fetch("/api/experience", {
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
    { key: "type", header: "Tipe" },
    { key: "title", header: "Judul / Posisi" },
    { key: "institution", header: "Institusi / Event" },
    {
      key: "startDate",
      header: "Periode",
      render: (row: Experience) => (
        <span>
          {row.startDate} {row.endDate ? `- ${row.endDate}` : ""}
        </span>
      ),
    },
    { key: "status", header: "Status" },
    {
      key: "createdAt",
      header: "Dibuat",
      render: (row: Experience) => <span>{row.createdAt.slice(0, 10)}</span>,
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
                <h1 className="text-2xl font-bold">Riwayat Experience</h1>
                <Button
                  onClick={() => {
                    setEditing(null)
                    setForm({
                      type: "work",
                      title: "",
                      institution: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                      status: "active",
                    })
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
                onEdit={(row: Experience) => {
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
            <DialogTitle>
              {editing ? "Edit Experience" : "Tambah Experience"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Tipe</Label>
              <Select
                value={form.type}
                onValueChange={(val) => setForm({ ...form, type: val as "work" | "competition" })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="work">Kerja</SelectItem>
                  <SelectItem value="competition">Lomba</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Judul / Posisi</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Contoh: Fullstack Developer / Juara 1 Hackathon"
              />
            </div>

            <div>
              <Label>Institusi / Event</Label>
              <Input
                value={form.institution}
                onChange={(e) =>
                  setForm({ ...form, institution: e.target.value })
                }
                placeholder="Nama perusahaan atau nama event"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={form.startDate || ""}
                  onChange={(e) =>
                    setForm({ ...form, startDate: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={form.endDate || ""}
                  onChange={(e) =>
                    setForm({ ...form, endDate: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <Label>Deskripsi</Label>
              <Textarea
                value={form.description || ""}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Ceritakan pengalaman ini..."
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving
                ? "Menyimpan..."
                : editing
                ? "Update"
                : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}
