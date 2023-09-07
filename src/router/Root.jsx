import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerdata } from "./routerdata";
const router = createBrowserRouter(routerdata);

export default function Root() {
  return <RouterProvider router={router} />;
}
