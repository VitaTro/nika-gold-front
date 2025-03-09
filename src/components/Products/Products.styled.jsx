import styled from "styled-components";

export const ProductsContainer = styled.div`
  text-align: center;
  padding: 20px 40px;
`;
export const ProductsHeader = styled.h3`
  font-size: 18px;
  text-shadow: 0 0 5px rgb(167, 182, 208);
`;
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

export const Pagination = styled.div`
  margin-top: 20px;
`;

export const PageLink = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f5f5f5;
  &:hover {
    background-color: #ddd;
  }
`;

export const WelcomeHeader = styled.h2`
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: ${(props) => (props.theme.isDarkMode ? "#fff" : "gray")};
  text-shadow: ${(props) =>
    props.theme.isDarkMode
      ? "0 0 5px rgba(255, 255, 255, 0.8)"
      : "0 0 5px rgb(167, 182, 208)"};
`;

export const Tabs = styled.div`
  margin-bottom: 40px;
`;

export const TabButton = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(135deg, #add8e6, #4682b4);
  color: white;
  font-size: 18px;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #4682b4, #add8e6);
  }
  &.active {
    background: linear-gradient(135deg, #4682b4, #add8e6);
  }
`;
