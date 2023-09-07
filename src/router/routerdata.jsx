import Home from "../pages/home/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import CartPage from "../pages/cart/CartPage";
export const routerdata = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "cart",
    element: <CartPage />,
    name: "Cart",
  },
  {
    path: "shop",
    element: <ShopPage />,
    name: "Shop",
  },
];
