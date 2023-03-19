import axios from "axios";
import React, { useEffect, useState } from "react";

function CartItem(props) {
  const [product, setProduct] = useState({});
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:8000/api/products/" + props.id);
      setProduct(result.data.response);
    }
    fetchData();
  }, []);

  function handleClick() {
    if (localStorage.getItem("loggedIn")) {
      axios
        .patch(
          "http://localhost:8000/api/users/cart/remove",
          { productId: props.id },
          { headers: { Authorization: localStorage.getItem("token") } }
        )
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("user", JSON.stringify(response.data.response));
          }
          setRemoved(true);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }

  return (
    <div className="flex flex-row mb-8 border rounded-lg py-4 px-8">
      <img className="h-48 w-48" src={product.images} alt="product" />
      <div className="flex flex-col ml-8 w-full justify-between my-4">
        <div className="flex flex-row justify-between font-thin text-xl w-full">
          <p className="">{product.name}</p>
          <p>${product.price}</p>
        </div>
        {removed ? (
          <button
            onClick={handleClick}
            disabled
            className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black disabled:cursor-not-allowed disabled:hover:text-black disabled:hover:bg-white"
          >
            Removed
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
