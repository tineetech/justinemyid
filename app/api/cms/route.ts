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

// GET /api/cms
export async function GET() {
  // const user = checkAuth(req)
  // // if (!user)
  // //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const cms = await prisma.cms.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(cms)
}

// POST /api/cms
export async function POST(req: Request) {
  try {
    const user = checkAuth(req)
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = await req.json()
    const { name, content, status } = body

    if (!name || !content) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const cms = await prisma.cms.create({
      data: {
        name,
        content,
        status: status ?? 'active',
        updatedAt: new Date(),
      },
    })

    return NextResponse.json(cms)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "cms creation failed", message: String(error) },
      { status: 500 }
    )
  }
}

// PUT /api/cms
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, name, content, status } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const cms = await prisma.cms.update({
    where: { id },
    data: {
      ...(name && { name }),
      ...(content && { content }),
      ...(status && { status }),
      updatedAt: new Date(),
    },
  })

  return NextResponse.json(cms)
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

  // cari dulu cms di DB untuk ambil image url
  const cms = await prisma.cms.findUnique({ where: { id } })
  if (!cms) {
    return NextResponse.json({ error: "cms not found" }, { status: 404 })
  }

  try {
    await prisma.cms.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json(
      { error: "Failed to delete cms", message: String(err) },
      { status: 500 }
    )
  }
}
