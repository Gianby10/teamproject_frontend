import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logout } from "./app/actions/auth";

export async function middleware(req: NextRequest) {
  const backendHealthCheckUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/healthcheck`;

  try {
    // Effettua una richiesta al backend per verificare se è online
    const res = await fetch(backendHealthCheckUrl, { method: "GET" });

    if (res.status !== 200) {
      await logout();
    }
  } catch (error) {
    await logout();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|api|.*\\..*).*)"],
};
