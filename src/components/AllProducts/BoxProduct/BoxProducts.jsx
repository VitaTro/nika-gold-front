import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageComponent from "../../ImageComponent";
import {
  Card,
  Container,
  Grid,
  PageButton,
  Pagination,
  WelcomeHeader,
} from "./BoxProducts.styled";

const BoxProducts = () => {
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
        const response = await axios.get(
          "http://localhost:5000/api/products/box"
        );
        console.log("Fetched products:", response.data); // Дебаг-інформація
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Залежності масиву повинні бути порожніми, щоб викликати useEffect лише один раз

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <WelcomeHeader>Box Products</WelcomeHeader>
      <Grid>
        {currentProducts.map((product) => (
          <Card key={product._id}>
            <h2>{product.name}</h2>
            {console.log(
              "Rendering ImageComponent with publicID:",
              product.photoUrl
            )}{" "}
            {/* Дебаг-інформація */}
            <ImageComponent publicID={product.photoUrl} />
            <p>{product.description}</p>
            {isAuthenticated && <p>Price: ${product.price}</p>}
          </Card>
        ))}
      </Grid>
      <Pagination>
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <PageButton key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </PageButton>
          )
        )}
      </Pagination>
    </Container>
  );
};

export default BoxProducts;
