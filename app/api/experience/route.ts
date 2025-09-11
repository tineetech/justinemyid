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

// GET /api/experience
export async function GET() {
  // const user = checkAuth(req)
  // // if (!user)
  // //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const experiences = await prisma.experience.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(experiences)
}

// POST /api/experience
export async function POST(req: Request) {
  try {
    const user = checkAuth(req)
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = await req.json()
    const { type, title, institution, startDate, endDate, description, status } = body

    if (!type || !title || !institution || !startDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const experience = await prisma.experience.create({
      data: {
        type,
        title,
        institution,
        startDate,
        endDate,
        description,
        status: status ?? 'active',
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(experience)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "experience creation failed", message: String(error) },
      { status: 500 }
    )
  }
}

// PUT /api/experience
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const experience = await prisma.experience.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  })

  return NextResponse.json(experience)
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

  // cari dulu experience di DB untuk ambil image url
  const experience = await prisma.experience.findUnique({ where: { id } })
  if (!experience) {
    return NextResponse.json({ error: "experience not found" }, { status: 404 })
  }

  try {
    await prisma.experience.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json(
      { error: "Failed to delete experience", message: String(err) },
      { status: 500 }
    )
  }
}
