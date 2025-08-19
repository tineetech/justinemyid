// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_PATHS = ["/login"]

export function middleware(req: NextRequest) {
    
  console.log("📢 Middleware Executing for:", req.nextUrl.pathname);
  const { pathname } = req.nextUrl
  const token = req.cookies.get("token")?.value

  // --- Jika sudah login, jangan boleh akses /login lagi ---
  if (token && PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  // --- Jika akses /dashboard atau /manage tanpa login ---
  if (!token && (pathname.startsWith("/dashboard") || pathname.startsWith("/manage"))) {
    console.log('belum login')
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // --- Jika login tapi bukan admin ---
  if (token && (pathname.startsWith("/dashboard") || pathname.startsWith("/manage"))) {
    // try {
    //   const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { email: string }
    //   if (decoded.email !== "admin@gmail.com") {
    //     return NextResponse.redirect(new URL("/not-authorized", req.url))
    //   }
    // } catch (error) {
    //     console.log(error)
    //   // Token tidak valid → redirect login
    //   return NextResponse.redirect(new URL("/login", req.url))
    // }
  }

  return NextResponse.next()
}

// Tentukan halaman/path yang kena middleware
export const config = {
  matcher: ["/login", "/dashboard/:path*", "/manage/:path*"],
}
