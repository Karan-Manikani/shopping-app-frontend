import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:8000/api/products?page_size=10&page=1");
      setProducts(result.data.response.products);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-32 mx-auto mt-20 w-2/3 min-h-screen">
      {products.map((product) => {
        return <Product {...product} />;
      })}
    </div>
  );
}

export default HomeScreen;
