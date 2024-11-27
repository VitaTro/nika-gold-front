import axios from "axios";
import { useEffect, useState } from "react";
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

const GoldProducts = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const productsPerPage = 24;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      try {
        const endpoint =
          activeCategory === "all"
            ? "products/gold"
            : `products/gold?subcategory=${activeCategory}`;
        const response = await axios.get(
          `http://localhost:5000/api/${endpoint}`
        );
        console.log("Fetched gold products:", response.data);

        // Сортування продуктів за датою створення, нові на початку
        const sortedProducts = response.data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA; // нові продукти на початку
        });

        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching gold data", error);
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
  }, [type, activeCategory]);

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
        {currentProducts.map((product) => {
          console.log("Product photoUrl: ", product.photoUrl);
          return (
            <Card key={product._id}>
              <h2>{product.name}</h2>
              <img
                src={product.photoUrl}
                alt={product.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {isSlowConnection && <p>{product.description}</p>}
              {isAuthenticated && <p>Price: ${product.price}</p>}
            </Card>
          );
        })}
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
    </ProductsContainer>
  );
};

export default GoldProducts;
