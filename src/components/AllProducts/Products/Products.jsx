import axios from "axios";
import React, { useEffect, useState } from "react";

import { WelcomeHeader } from "../BoxProduct/BoxProducts.styled";
import {
  PageLink,
  Pagination,
  ProductCard,
  ProductImage,
  ProductsContainer,
  ProductsGrid,
} from "./Products.styled";

const Products = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [goldProducts, setGoldProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const productsPerPage = 24;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const endpoint = "products";
        const response = await axios.get(
          `http://localhost:5000/api/${endpoint}`
        );
        console.log("Fetched products:", response.data);

        // Розділяємо продукти на загальні і золоті
        const allProducts = response.data;
        const goldProducts = allProducts.filter(
          (product) => product.category === "gold"
        );

        // Сортування продуктів за датою створення, нові на початку
        const sortedAllProducts = allProducts.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA; // нові продукти на початку
        });

        const sortedGoldProducts = goldProducts.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

        setProducts(sortedAllProducts);
        setGoldProducts(sortedGoldProducts);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();

    const updateConnectionStatus = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (connection) {
        const slowConnectionTypes = ["slow-2g", "2g", "3g"];
        setIsSlowConnection(
          slowConnectionTypes.includes(connection.effectiveType)
        );
      }
    };

    updateConnectionStatus();
    navigator.connection.addEventListener("change", updateConnectionStatus);

    return () => {
      navigator.connection.removeEventListener(
        "change",
        updateConnectionStatus
      );
    };
  }, [type]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductsContainer>
      <WelcomeHeader>Wszystkie wyroby</WelcomeHeader>
      <ProductsGrid>
        {currentProducts.map((product, index) => {
          console.log(`Rendering product ${index}: `, product);
          return (
            <ProductCard key={product._id}>
              <h2>{product.name}</h2>
              {product.photoUrl ? (
                <ProductImage src={product.photoUrl} alt={product.name} />
              ) : (
                <div>No image available</div>
              )}
              {isSlowConnection && <p>{product.description}</p>}
              {isAuthenticated && <p>Price: ${product.price}</p>}
            </ProductCard>
          );
        })}
      </ProductsGrid>
      <Pagination>
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <PageLink key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </PageLink>
          )
        )}
      </Pagination>
    </ProductsContainer>
  );
};

export default Products;
