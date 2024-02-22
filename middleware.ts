/**
 * app protected , a couple of routes to be accessed for non-authorized users
 */
import { auth } from "./auth";

export default auth((req) => {
  // req.auth
  const isLoggedIn = !!req.auth;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("IS LOGGEDIN: ", isLoggedIn);
});

// Optionally, don't invoke Middleware on some paths
// 在 matcher 匹配的路由中启用 middleware 的以上规则
export const config = {
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  //   下一行来自 clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
