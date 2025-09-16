import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  // coba ambil dari berbagai header
  const xff = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const cfIp = req.headers.get("cf-connecting-ip");

  let ip: string | null = null;

  if (xff) {
    ip = xff.split(",")[0].trim(); // kalau ada banyak IP, ambil yang pertama
  } else if (realIp) {
    ip = realIp;
  } else if (cfIp) {
    ip = cfIp;
  }

  const userAgent = req.headers.get("user-agent");

  console.log("Client IP:", ip);
  console.log("User Agent:", userAgent);

  return NextResponse.json({ ip, userAgent });
}
