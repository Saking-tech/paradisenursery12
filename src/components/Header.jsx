import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-700">
          Paradise Nursery
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-green-700 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-green-700 transition-colors">
            Shop
          </Link>
          <Link to="/cart">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span>{itemCount}</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;