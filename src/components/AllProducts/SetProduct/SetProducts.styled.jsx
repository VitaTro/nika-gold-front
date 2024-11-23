import styled from "styled-components";
export const Container = styled.div`
  text-align: center;
`;
export const WelcomeHeader = styled.h2`
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: gray;
  text-shadow: 0 0 5px rgb(167, 182, 208);
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
`;
export const ImageBox = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
export const Pagination = styled.div`
  margin-top: 20px;
`;
export const PageButton = styled.button`
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
