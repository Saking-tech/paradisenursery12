import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CartSummary = ({ total, onCheckout }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button className="w-full" onClick={onCheckout}>
        Checkout
      </Button>
      <Link to="/products">
        <Button variant="outline" className="w-full mt-4">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default CartSummary;