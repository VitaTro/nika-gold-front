import axios from "axios";
import { useEffect, useState } from "react";

import {
  Card,
  Container,
  Grid,
  ImageBox,
  PageButton,
  Pagination,
  WelcomeHeader,
} from "./SetProducts.styled";

const SetProducts = () => {
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
          "http://localhost:5000/api/products/set"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <WelcomeHeader>Set Products</WelcomeHeader>
      <Grid>
        {currentProducts.map((product) => (
          <Card key={product._id}>
            <h2>{product.name}</h2>
            <ImageBox src={product.photoUrl} alt={product.name} />
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
export default SetProducts;
