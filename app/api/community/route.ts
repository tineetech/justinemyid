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

// GET /api/community
export async function GET() {
  // const user = checkAuth(req)
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const community = await prisma.community.findMany({
    include: { User: true },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(community)
}

// POST /api/community
export async function POST(req: Request) {
  // const user = checkAuth(req)
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { user_id, message } = body

  if (!message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const community = await prisma.community.create({
    data: { userId: user_id ?? null, message, updatedAt: new Date() },
  })

  return NextResponse.json(community)
}

// PUT /api/community
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  const community = await prisma.community.update({
    where: { id },
    data: { ...data, updatedAt: new Date() },
  })

  return NextResponse.json(community)
}

// DELETE /api/community
export async function DELETE(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  await prisma.community.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
