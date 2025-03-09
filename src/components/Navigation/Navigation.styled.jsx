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

export const ThemeToggle = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: 0.4s;
  border-radius: 34px;
  border: 1px solid #ccc;
  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: ${(props) => (props.isDarkMode ? "30px" : "4px")};
    bottom: 4px;
    background-color: #333;
    transition: 0.6s;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
`;

export const ThemeIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.$position === "left" ? "4px" : "unset")};
  right: ${(props) => (props.$position === "right" ? "4px" : "unset")};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: left 0.6s, right 0.6s;
  width: 22px;
  height: 22px;
`;
