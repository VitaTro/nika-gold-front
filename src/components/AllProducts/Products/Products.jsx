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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

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
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
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
        {currentProducts.map((product) => {
          console.log("Rendering product:", product);
          return (
            <ProductCard key={product._id}>
              <h2>{product.name}</h2>
              {product.photoUrl ? (
                <ProductImage src={product.photoUrl} alt={product.name} />
              ) : (
                <div>No image available</div>
              )}
              <p>{product.description}</p>
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
