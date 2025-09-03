import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") ?? "file";

  // baca body sebagai ArrayBuffer
  const arrayBuffer = await request.arrayBuffer();

  const blob = await put(filename, arrayBuffer, {
    access: "public",
    token: process.env.BLOB_READ_WRITE_TOKEN, // harus ada di env
    addRandomSuffix: true,
  });

  return NextResponse.json(blob);
}
