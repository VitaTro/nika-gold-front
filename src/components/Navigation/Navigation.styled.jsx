import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  height: 140px;

  display: flex;
  align-items: center;
  padding: 5px 120px 10px 5px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  margin-left: 180px;
  transition: all 0.3s linear;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLinkStyled = styled(Link)`
  color: gray;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 26px;
  text-decoration: none;
  &:hover {
    color: darkgray;
  }
`;
export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  color: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${(props) => (props.theme.isDarkMode ? "#ddd" : "#333")};
  }
`;
