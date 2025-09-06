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

// GET /api/portofolios
export async function GET() {
  // const user = checkAuth(req)
  // if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const portofolios = await prisma.portofolio.findMany({
    include: { PortoJenis: true },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(portofolios)
}

// POST /api/portofolios
export async function POST(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { portoJenisId, title, image, url, description, isPrimary, category, status } = body

  const missingFields: string[] = [];

  if (!portoJenisId) missingFields.push("portoJenisId");
  if (!title) missingFields.push("title");
  if (!image) missingFields.push("image");
  if (!status) missingFields.push("status");
  if (!url) missingFields.push("url");
  if (!isPrimary) missingFields.push("isPrimary");
  if (!category) missingFields.push("category");
  if (!description) missingFields.push("description");

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "Required fields missing", fields: missingFields },
      { status: 400 }
    );
  }

  try {
    const portofolio = await prisma.portofolio.create({
      data: {
        portoJenisId,
        title,
        image,
        url,
        description,
        isPrimary,
        category,
        status,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(portofolio);
  } catch (error) {
    console.error("Error create portofolio:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/portofolios
export async function PUT(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id, image, ...data } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  // ambil data lama buat hapus image lama kalau diganti
  const oldData = await prisma.portofolio.findUnique({ where: { id } })
  if (!oldData) return NextResponse.json({ error: "Not found" }, { status: 404 })

  // kalau ada image baru, hapus image lama
  if (image && oldData.image && image !== oldData.image) {
    await del(oldData.image, { token: process.env.BLOB_READ_WRITE_TOKEN })
  }

  const portofolio = await prisma.portofolio.update({
    where: { id },
    data: { ...data, image: image ?? oldData.image, updatedAt: new Date() },
  })

  return NextResponse.json(portofolio)
}

// DELETE /api/portofolios
export async function DELETE(req: Request) {
  const user = checkAuth(req)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { id } = body

  if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 })

  const portofolio = await prisma.portofolio.findUnique({ where: { id } })
  if (!portofolio) return NextResponse.json({ error: "Not found" }, { status: 404 })

  try {
    if (portofolio.image) {
      await del(portofolio.image, { token: process.env.BLOB_READ_WRITE_TOKEN })
    }

    await prisma.portofolio.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json({ error: "Failed to delete", message: String(err) }, { status: 500 })
  }
}
