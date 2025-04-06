import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://nika-gold-back-fe0ff35469d7.herokuapp.com/api/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Products Audit</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Price (Purchase)</th>
            <th>Price (Retail)</th>
            <th>Price (Wholesale)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>
                <img
                  src={product.photo}
                  alt={product.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.purchasePrice}</td>
              <td>{product.retailPrice}</td>
              <td>{product.wholesalePrice}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminDashboard;
