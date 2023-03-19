import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="h-full w-full flex flex-col">
      <Link to={`/products/${props._id}`}>
        <img className=" h-96 w-full mb-8" src={props.images[0]} alt="product" />
      </Link>
      <div className="flex flex-row justify-between items-center font-thin text-2xl mb-2">
        <Link to={`/products/${props._id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h2>${props.price}</h2>
      </div>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;
