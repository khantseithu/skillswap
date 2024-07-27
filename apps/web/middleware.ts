export { auth as middleware } from "./app/server/auth";
export const runtime = "experimental-edge";

export const config = {
  matcher: "/dashboard/:path*",
};
