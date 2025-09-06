import { NextResponse } from "next/server";
import { PrismaClient } from "../../../lib/generated/prisma";
import { verifyToken } from "@/lib/auth";
import { del } from "@vercel/blob";

const prisma = new PrismaClient();

function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  return verifyToken(token);
}

// GET /api/sertifikats
export async function GET() {
  // const user = checkAuth(req);
  // if (!user)
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sertifikats = await prisma.sertifikat.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(sertifikats);
}

// POST /api/sertifikats
export async function POST(req: Request) {
  try {
    const user = checkAuth(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { name, image, status } = body;

    if (!name || !image || !status) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const sertifikat = await prisma.sertifikat.create({
      data: {
        name,
        image,
        status,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(sertifikat);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Sertifikat creation failed", message: String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/sertifikats
export async function PUT(req: Request) {
  const user = checkAuth(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...data } = body;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const sertifikat = await prisma.sertifikat.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(sertifikat);
}

// DELETE /api/sertifikats
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

  // cari dulu sertifikat untuk ambil url image
  const sertifikat = await prisma.sertifikat.findUnique({ where: { id } })
  if (!sertifikat) {
    return NextResponse.json({ error: "Sertifikat not found" }, { status: 404 })
  }

  try {
    // hapus image dari blob jika ada
    if (sertifikat.image) {
      await del(sertifikat.image, {
        token: process.env.BLOB_READ_WRITE_TOKEN,
      })
    }

    // hapus data di DB
    await prisma.sertifikat.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Delete error:", err)
    return NextResponse.json(
      { error: "Failed to delete sertifikat", message: String(err) },
      { status: 500 }
    )
  }
}