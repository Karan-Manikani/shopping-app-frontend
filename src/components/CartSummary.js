import axios from "axios";
import React, { useEffect, useState } from "react";

function CartSummary() {
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.cart.length !== 0) {
        axios
          .post("http://localhost:8000/api/products/multiple", { ids: user.cart })
          .then((response) => {
            setItemsInCart(response.data.response);
          })
          .catch((error) => console.log(error));
      }
    }

    fetchData();
  }, []);

  function getTotal() {
    console.log(itemsInCart);
    let total = 0;
    itemsInCart.map((product) => (total += product.price));

    return total;
  }

  return (
    <div>
      <h2 className="font-thin text-2xl mb-8">Cart Summary</h2>
      <div className="flex flex-row justify-between mb-1 text-lg">
        <span>Total</span>
        <span className="font-thin">${getTotal()}</span>
      </div>
      <div className="flex flex-row justify-between text-lg">
        <span>Taxes</span>
        <span className="font-thin">Calculated at Checkout</span>
      </div>
      <hr className="my-4 border-1 border-black border-opacity-30" />
      <div className="flex flex-row justify-between mb-8">
        <span>Subtotal</span>
        <span className="font-thin">${getTotal()}</span>
      </div>
      {getTotal() === 0 ? (
        <button
          disabled
          className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black disabled:cursor-not-allowed disabled:hover:text-black disabled:hover:bg-white"
        >
          Place Order
        </button>
      ) : (
        <button className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black">
          Place Order
        </button>
      )}
    </div>
  );
}

export default CartSummary;
