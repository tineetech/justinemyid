import { NextResponse } from "next/server"
import { PrismaClient } from "../../../lib/generated/prisma"
import { verifyToken } from "@/lib/auth"
import { del } from "@vercel/blob"

const prisma = new PrismaClient()

function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) return null

  const token = authHeader.split(" ")[1]
  return verifyToken(token)
}

// GET /api/skills
export async function GET() {
  // const user = checkAuth(req)
  // // if (!user)
  // //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(skills)
}

// POST /api/skills
export async function POST(req: Request) {
  try {
    const user = checkAuth(req)
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = await req.json()
    const { name, image, status, bagan } = body

    if (!name || !image || !status || bagan === undefined) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const skill = await prisma.skill.create({
      data: {
        name,
        image,
        status,
        bagan,
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(skill)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Skill creation failed", message: String(error) },
      { status: 500 }
    )
  }
}

// PUT /api/skills
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const skill = await prisma.skill.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  })

  return NextResponse.json(skill)
}

// DELETE /api/skils
export async function DELETE(req: Request) {
  const user = checkAuth(req)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()
  const { id } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  // cari dulu skill di DB untuk ambil image url
  const skill = await prisma.skill.findUnique({ where: { id } })
  if (!skill) {
    return NextResponse.json({ error: "Skill not found" }, { status: 404 })
  }

  try {
    // hapus image dari vercel blob (jika ada)
    if (skill.image) {
      await del(skill.image, {
        token: process.env.BLOB_READ_WRITE_TOKEN, // pastikan env sudah ada
      })
    }

    // hapus data di DB
    await prisma.skill.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json(
      { error: "Failed to delete skill", message: String(err) },
      { status: 500 }
    )
  }
}
