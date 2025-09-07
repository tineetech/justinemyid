import { NextResponse } from "next/server";
import { PrismaClient } from "../../../lib/generated/prisma";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

// 🔒 Cek Auth
function checkAuth(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  return verifyToken(token); // harus return payload { id, email }
}

// GET /api/me
export async function GET(req: Request) {
  try {
    const payload = checkAuth(req);
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // return NextResponse.json({ payload }, { status: 401 });
    console.log("PAYLOAD : " + payload.id)
    // ambil user dari DB
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error in /api/me:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
