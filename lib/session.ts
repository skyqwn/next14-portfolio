import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionData {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionData>(cookies(), {
    cookieName: "next14-portfolio",
    password: process.env.SESSION_SECRET!,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });
}
