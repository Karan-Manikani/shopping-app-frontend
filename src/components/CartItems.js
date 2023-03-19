import React, { useState } from "react";
import CartItem from "./CartItem";

function CartItems() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div>
      <h2 className="font-thin text-2xl mb-8">Cart Items</h2>
      {cart.cart.map((product) => {
        return <CartItem id={product} />;
      })}
    </div>
  );
}

export default CartItems;
