import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductScreen() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [productInCart, setProductInCart] = useState(localStorage.getItem("loggedIn") && checkProductInCart(id));

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://shopping-app-backend-umber.vercel.app/api/products/" + id);
      setProduct(result.data.response);
    }
    fetchData();
  }, []);

  function checkProductInCart(id) {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.cart.indexOf(id) !== -1;
  }

  function handleClick() {
    if (localStorage.getItem("loggedIn")) {
      axios
        .patch(
          "https://shopping-app-backend-umber.vercel.app/api/users/cart/add",
          { productId: id },
          { headers: { Authorization: localStorage.getItem("token") } }
        )
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("user", JSON.stringify(response.data.response));
            setProductInCart(true);
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="mx-auto w-10/12 mt-20 flex items-center justify-center">
      <img className="w-[30rem] h-[30rem] basis-2/5" src={product.images} alt="product" />
      <div className="basis-2/5 ml-20">
        <h2 className="text-5xl font-thin mb-8">{product.name}</h2>
        <p className="font-thin mb-8">{product.description}</p>
        <div className="flex justify-between">
          <p className="mb-8 text-4xl">
            Price: <span className="font-thin">${product.price}</span>
          </p>
          <p className="mb-8 text-4xl">
            Rating: <span className="font-thin">{product.rating}</span>
          </p>
        </div>
        {productInCart ? (
          <button
            onClick={handleClick}
            disabled
            className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black disabled:cursor-not-allowed disabled:hover:text-black disabled:hover:bg-white"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductScreen;
