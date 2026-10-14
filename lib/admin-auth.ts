import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/** Same cookie /api/login has always set; /visitors/gang only checks that it exists. */
export const ADMIN_COOKIE = "auth";

/**
 * Cookie value proving the password was entered. Derived from ROUTE_PASSWORD
 * so it can't be forged by setting `auth=true` by hand, and it rotates if the
 * password does.
 */
export function adminToken(): string | null {
  const secret = process.env.ROUTE_PASSWORD;
  if (!secret) return null;
  return createHmac("sha256", secret).update("mitul.ca:admin").digest("hex");
}

export async function isAdmin(): Promise<boolean> {
  const token = adminToken();
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token || !value || value.length !== token.length) return false;
  return timingSafeEqual(Buffer.from(value), Buffer.from(token));
}
