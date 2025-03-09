import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { Loader } from "../Loader/Loader";
import PaginationComponent from "../Pagination/Pagination";
import ProductImageWithLightbox from "../ProductImageWithLightbox";
import {
  ProductCard,
  ProductsContainer,
  ProductsGrid,
  ProductsHeader,
  TabButton,
  Tabs,
  WelcomeHeader,
} from "./Products.styled";
const Products = ({ type }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(true);
      try {
        // const endpoint = "products";
        // const response = await axios.get(
        //   `http://localhost:5000/api/${endpoint}`
        // );
        // console.log("Fetched products:", response.data);    //тимчасово маю відключити від API

        // let filteredProducts = response.data;

        console.log("Using local JSON data instead of API:", data);
        let filteredProducts = data;

        // Фільтрування продуктів за категорією
        if (type !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === type
          );
        }

        // Фільтрування продуктів за підкатегорією
        if (activeCategory !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.subcategory === activeCategory
          );
        }

        // Сортування продуктів за датою створення, нові на початку
        const sortByDate = (a, b) => {
          // const dateA = new Date(a.createdAt);
          // const dateB = new Date(b.createdAt);
          // return dateB - dateA; // нові продукти на початку
          const dateA = new Date(a.createdAt || Date.now());
          const dateB = new Date(b.createdAt || Date.now());
          return dateB - dateA;
        };

        const sortedProducts = filteredProducts.sort(sortByDate);

        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error prosessing local JSON data", error);
      } finally {
        setIsLoading(false);
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <ProductsContainer>
      <WelcomeHeader>
        {type === "all"
          ? "Wszystkie wyroby"
          : `${type.charAt(0).toUpperCase() + type.slice(1)} Products`}
      </WelcomeHeader>
      {(type === "gold" || type === "silver") && (
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
            Łańcuchи
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
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsGrid>
            {currentProducts.map((product, index) => {
              console.log(`Rendering product ${index}: `, product);
              return (
                <ProductCard key={product._id}>
                  <ProductsHeader>{product.name}</ProductsHeader>
                  {product.photoUrl ? (
                    <ProductImageWithLightbox
                      src={product.photoUrl}
                      alt={product.name}
                    />
                  ) : (
                    <div>No image available</div>
                  )}
                  {isSlowConnection && <p>{product.description}</p>}
                  {isAuthenticated && <p>Price: ${product.price}</p>}
                </ProductCard>
              );
            })}
          </ProductsGrid>
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </>
      )}
    </ProductsContainer>
  );
};

export default Products;
