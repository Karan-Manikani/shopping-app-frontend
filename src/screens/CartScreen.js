import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";

function CartScreen() {
  return localStorage.getItem("loggedIn") ? (
    <div className="mx-auto w-2/3 mt-20">
      <h1 className="font-thin text-5xl mb-10">Cart</h1>
      <div className="basis-3/5">
        <CartItems />
      </div>
      <Link to={"/order"}>
        <button className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black mb-20">
          Checkout
        </button>
      </Link>
    </div>
  ) : (
    <div className="mx-auto w-2/3 mt-20">
      <h1 className="font-thin text-5xl mb-10">Cart</h1>
      <div className="flex flex-row justify-between">
        <div className="basis-3/5">
          <h1>Login to view cart</h1>
        </div>
        <div className="basis-2/5 ml-20"></div>
      </div>
    </div>
  );
}

export default CartScreen;
