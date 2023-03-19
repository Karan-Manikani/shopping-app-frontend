import React from "react";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

function OrderScreen() {
  return localStorage.getItem("loggedIn") ? (
    <div className="mx-auto w-2/3 mt-20">
      <h1 className="font-thin text-5xl mb-10">My Order</h1>
      <div className="flex flex-row justify-between">
        <div className="basis-3/5">
          <CartItems />
        </div>
        <div className="basis-2/5 ml-20">
          <CartSummary />
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto w-2/3 mt-20">
      <h1 className="font-thin text-5xl mb-10">My Order</h1>
      <div className="flex flex-row justify-between">
        <div className="basis-3/5">
          <h1>Login to view order</h1>
        </div>
        <div className="basis-2/5 ml-20"></div>
      </div>
    </div>
  );
}

export default OrderScreen;
