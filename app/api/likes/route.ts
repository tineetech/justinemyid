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

// GET /api/likes
export async function GET() {
  // const user = checkAuth(req)
  // // if (!user)
  // //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const likes = await prisma.likes.findMany({
    orderBy: { created_at: "desc" },
  })
  return NextResponse.json(likes)
}

// POST /api/likes
export async function POST(req: Request) {
  try {
    // const user = checkAuth(req)
    // if (!user)
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = await req.json()
    const { user_id, device_name, user_argent, ip_address } = body


    const likes = await prisma.likes.create({
      data: {
        userId: user_id,
        device_name,
        user_argent,
        ip_address,
      },
    })
    console.log(likes)
    return NextResponse.json(likes)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "likes creation failed", message: String(error) },
      { status: 500 }
    )
  }
}

// PUT /api/likes
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, ...data } = body

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const likes = await prisma.likes.update({
    where: { id },
    data: { ...data, updatedAt: new Date() },
  })

  return NextResponse.json(likes)
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

  // cari dulu likes di DB untuk ambil image url
  const likes = await prisma.likes.findUnique({ where: { id } })
  if (!likes) {
    return NextResponse.json({ error: "likes not found" }, { status: 404 })
  }

  try {
    await prisma.likes.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json(
      { error: "Failed to delete likes", message: String(err) },
      { status: 500 }
    )
  }
}
