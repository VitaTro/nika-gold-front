// NavigationPersonal.js
import React from "react";
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

const NavigationPersonal = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const logoUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/f_auto,q_auto/v1/My%20Brand/logo_smqqi7?_a=BAMCkGRg0";

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
            {isDarkMode ? "🌙" : "☀️"}
          </ThemeToggle>
        </NavList>
      </Header>
    </Container>
  );
};

export default NavigationPersonal;
