import axios from "axios";
import { useEffect, useState } from "react";
import ImageComponent from "../../ImageComponent";
import {
  Card,
  Grid,
  PageButton,
  Pagination,
  ProductsContainer,
  TabButton,
  Tabs,
  WelcomeHeader,
} from "./GoldProducts.styled";
const GoldProducts = () => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const productsPerPage = 24;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/gold"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // filter products
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.subcategory === activeCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };
  return (
    <ProductsContainer>
      <WelcomeHeader>Gold Products</WelcomeHeader>
      <Tabs>
        <TabButton
          onClick={() => handleCategoryChange("all")}
          className={activeCategory === "all" ? "active" : ""}
        >
          Wszystkie
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("chains")}
          className={activeCategory === "chains" ? "active" : ""}
        >
          Łańcuchy
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("earrings")}
          className={activeCategory === "earrings" ? "active" : ""}
        >
          Kolczyki
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("bracelets")}
          className={activeCategory === "bracelets" ? "active" : ""}
        >
          Bransoletki
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("rings")}
          className={activeCategory === "rings" ? "active" : ""}
        >
          Pierścienie
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("pendants")}
          className={activeCategory === "pendants" ? "active" : ""}
        >
          Zawieszki
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("tic")}
          className={activeCategory === "tic" ? "active" : ""}
        >
          Krzyży
        </TabButton>
        <TabButton
          onClick={() => handleCategoryChange("incense")}
          className={activeCategory === "incense" ? "active" : ""}
        >
          Kadzidło
        </TabButton>
      </Tabs>
      <Grid>
        {currentProducts.map((product) => (
          <Card key={product._id}>
            <h2>{product.name}</h2>
            <ImageComponent src={product.photoUrl} alt={product.name} />
            <p>{product.description}</p>
            {isAuthenticated && <p>Price: ${product.price}</p>}
          </Card>
        ))}
      </Grid>
      <Pagination>
        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, index) => (
            <PageButton key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </PageButton>
          )
        )}
      </Pagination>
    </ProductsContainer>
  );
};
export default GoldProducts;
