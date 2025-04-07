import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://source.unsplash.com/random/1920x1080"); // Заміна на власний фон
  background-size: cover;
  background-position: center;
  color: #fff;
`;

export const Logo = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  border: 2px solid #fff;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
