import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Products",
    to: "/products",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <Products />,
  },
  {
    title: "Cart",
    to: "/cart",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <Cart />,
  },
];