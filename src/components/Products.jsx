import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    //fetch products from api
    axios
      .get("https://mern-integration-backend.onrender.com/store")
      .then((res) => setproducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product._id}
            className="main"
           
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="img"
              
            />
            <h3>{product.Description}</h3>

            <p className="price" > {"\u20B9"}  {product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
