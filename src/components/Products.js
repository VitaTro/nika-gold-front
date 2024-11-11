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
    <div>
      <h1>
        {type ? type.charAt(0).toUpperCase() + type.slice(1) : "All"} Products
      </h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <img src={product.photoUrl} alt={product.name} />
            <p>{product.description}</p>
            {isAuthenticated && <p>Price: ${product.price}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
