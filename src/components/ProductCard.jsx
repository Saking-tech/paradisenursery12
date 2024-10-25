import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/cartSlice";
import { Button } from "./ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-2">{product.description}</CardDescription>
        <p className="mt-2 text-lg font-semibold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;