import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. Redirecting to login...");
        window.location.href = "/auth/login/admin";
        return;
      }

      try {
        const response = await axios.get(
          "https://nika-gold-back-fe0ff35469d7.herokuapp.com/api/products",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Додаємо токен до заголовків
            },
          }
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Unable to load products. Please try again later.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

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
