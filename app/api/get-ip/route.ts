import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest) {
  // Coba ambil dari header X-Forwarded-For (umum di Vercel, Netlify, Proxy)
  const xff = req.headers["x-forwarded-for"] as string | undefined;
  let ip = null;

  if (xff) {
    // x-forwarded-for bisa berisi daftar ip: "client, proxy1, proxy2"
    ip = xff.split(",")[0].trim();
  } else if (req.socket && req.socket.remoteAddress) {
    ip = req.socket.remoteAddress;
  }

  const userAgent = req.headers["user-agent"] ?? null;
  console.log(ip)
  console.log(userAgent)

  return NextResponse.json({ ip, userAgent })
}
