import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import {
  Container,
  Header,
  LogoImage,
  NavItem,
  NavLinkStyled,
  NavList,
  ThemeToggle,
} from "./Navigation.styled";
const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const logoLightUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218461/logoLigth_zer4gb.png";
  const logoDarkUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218509/logoDark_d2zgpc.png";
  const logoUrl = isDarkMode ? logoDarkUrl : logoLightUrl;
  return (
    <Container>
      <Header>
        <NavLinkStyled to="/">
          <LogoImage src={logoUrl} alt="My brand logo" />
        </NavLinkStyled>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/products">Wyroby</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/contact">Kontakty</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about">O nas</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/auth">Log In</NavLinkStyled>
          </NavItem>
          <ThemeToggle onClick={() => dispatch(toggleTheme())}>
            {isDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
          </ThemeToggle>
        </NavList>
      </Header>
    </Container>
  );
};

export default Navigation;
