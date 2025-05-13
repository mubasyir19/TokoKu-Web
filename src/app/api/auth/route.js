import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("authToken");

  const isLoggedIn = !!token;

  return Response.json({
    isLoggedIn,
  });
}
