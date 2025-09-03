import { NextResponse } from "next/server";
import { PrismaClient } from "../../../lib/generated/prisma";
import { verifyToken } from "@/lib/auth";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  return verifyToken(token);
}

// GET /api/users
export async function GET(req: Request) {
  const user = checkAuth(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, role, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        role: role ?? 'guest',
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "User creation failed", message : error }, { status: 500 });
  }
}

// PUT /api/users?id=123
export async function PUT(req: Request) {
  const auth = checkAuth(req);
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, ...data } = body;
  const user = await prisma.user.update({ where: { id }, data });
  return NextResponse.json(user);
}

// DELETE /api/users body:id
export async function DELETE(req: Request) {
  const user = checkAuth(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { id } = body;
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ success: true });
}