import axios from "axios";
import React, { useEffect, useState } from "react";
// import './Products.css';

const Products = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const endpoint = type ? `products/${type}` : "products";
        const response = await axios.get(
          `http://localhost:5000/api/${endpoint}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="products-container">
      <h1>
        {type ? type.charAt(0).toUpperCase() + type.slice(1) : "All"} Products
      </h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h2>{product.name}</h2>
            <img
              src={product.photoUrl}
              alt={product.name}
              onError={(e) => {
                e.target.src = "placeholder.jpg";
              }}
            />
            <p>{product.description}</p>
            {isAuthenticated && <p>Price: ${product.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
