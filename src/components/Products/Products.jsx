import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

const BACKEND_URL = "https://nika-gold-back-fe0ff35469d7.herokuapp.com";
console.log(BACKEND_URL);
const Products = ({ type }) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");
  const productsPerPage = 18;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log(
          "Fetching data from:",
          `${BACKEND_URL}/api/products?type=${type}&category=${activeCategory}`
        );
        const response = await fetch(
          `${BACKEND_URL}/api/products?type=${type}&category=${activeCategory}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data: " + response.statusText);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        let filteredProducts = data;

        if (type !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === type
          );
        }

        if (activeCategory !== "all") {
          filteredProducts = filteredProducts.filter(
            (product) => product.subcategory === activeCategory
          );
        }

        const sortByDate = (a, b) => {
          const dateA = new Date(a.createdAt || Date.now());
          const dateB = new Date(b.createdAt || Date.now());
          return dateB - dateA;
        };

        const sortedProducts = filteredProducts.sort(sortByDate);

        setProducts(sortedProducts);
        setErrorMessage("");
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setErrorMessage("Failed to fetch products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
          ? t("all_products")
          : t(`${type}_products`.toLowerCase())}
      </WelcomeHeader>

      {(type === "gold" || type === "silver") && (
        <Tabs>
          {[
            "all",
            "chains",
            "earrings",
            "bracelets",
            "rings",
            "pendants",
            "crosses",
            "incense",
          ].map((category) => (
            <TabButton
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {t(category)}
            </TabButton>
          ))}
        </Tabs>
      )}

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductsGrid>
            {currentProducts.map((product) => (
              <ProductCard key={product._id}>
                <ProductsHeader>{product.name}</ProductsHeader>
                {product.photoUrl ? (
                  <ProductImageWithLightbox
                    src={product.photoUrl}
                    alt={product.name}
                  />
                ) : (
                  <div>{t("no_image")}</div>
                )}
                <p>
                  {isAuthenticated
                    ? `Price: $${product.price}`
                    : t("login_to_view_price")}
                </p>
              </ProductCard>
            ))}
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
