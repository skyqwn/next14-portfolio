import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicUrls: Routes = {
  "/": true,
  "/signin": true,
  "/signup": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
