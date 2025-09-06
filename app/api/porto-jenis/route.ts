import { NextResponse } from "next/server"
import { PrismaClient } from "../../../lib/generated/prisma"
import { verifyToken } from "@/lib/auth"

const prisma = new PrismaClient()

function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) return null
  const token = authHeader.split(" ")[1]
  return verifyToken(token)
}

// GET /api/porto-jenis
export async function GET() {
  // const user = checkAuth(req)
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const portoJenis = await prisma.portoJenis.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(portoJenis)
}

// POST /api/porto-jenis
export async function POST(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { name, status } = body

  if (!name || !status) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const portoJenis = await prisma.portoJenis.create({
    data: { name, status, updatedAt: new Date() },
  })

  return NextResponse.json(portoJenis)
}

// PUT /api/porto-jenis
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  const portoJenis = await prisma.portoJenis.update({
    where: { id },
    data: { ...data, updatedAt: new Date() },
  })

  return NextResponse.json(portoJenis)
}

// DELETE /api/porto-jenis
export async function DELETE(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  await prisma.portoJenis.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
