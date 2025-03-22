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

const Products = ({ type }) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const productsPerPage = 18;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://back-fcdq.onrender.com/api/products?type=${type}&category=${activeCategory}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
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
      } catch (error) {
        console.error("Error fetching data from API", error);
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
          <TabButton
            onClick={() => handleCategoryChange("all")}
            className={activeCategory === "all" ? "active" : ""}
          >
            {t("all")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("chains")}
            className={activeCategory === "chains" ? "active" : ""}
          >
            {t("chains")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("earrings")}
            className={activeCategory === "earrings" ? "active" : ""}
          >
            {t("earrings")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("bracelets")}
            className={activeCategory === "bracelets" ? "active" : ""}
          >
            {t("bracelets")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("rings")}
            className={activeCategory === "rings" ? "active" : ""}
          >
            {t("rings")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("pendants")}
            className={activeCategory === "pendants" ? "active" : ""}
          >
            {t("pendants")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("crosses")}
            className={activeCategory === "crosses" ? "active" : ""}
          >
            {t("crosses")}
          </TabButton>
          <TabButton
            onClick={() => handleCategoryChange("incense")}
            className={activeCategory === "incense" ? "active" : ""}
          >
            {t("incense")}
          </TabButton>
        </Tabs>
      )}
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
                {isSlowConnection && <p>{product.description}</p>}
                {isAuthenticated && <p>Price: ${product.price}</p>}
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
