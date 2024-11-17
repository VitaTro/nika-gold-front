import axios from "axios";
import React, { useEffect, useState } from "react";
import { WelcomeGeneral } from "../../pages/WelcomePage/WelcomePage.styled";
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
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [type]);

  // pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <ProductsContainer>
      <WelcomeGeneral>
        {type ? type.charAt(0).toUpperCase() + type.slice(1) : "All"} Products
      </WelcomeGeneral>
      <ProductsGrid>
        {currentProduct.map((product) => (
          <ProductCard key={product._id}>
            <h2>{product.name}</h2>
            <ProductImage
              src={product.photoUrl}
              alt={product.name}
              // onError={(e) => {
              //   e.target.src = "placeholder.jpg";
              // }}
            />
            <p>{product.description}</p>
            {isAuthenticated && <p>Price: ${product.price}</p>}
          </ProductCard>
        ))}
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
