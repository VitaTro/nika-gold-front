import React from "react";
import {
  Container,
  Header,
  LogoImage,
  NavItem,
  NavLinkStyled,
  NavList,
} from "./Navigation.styled";

const NavigationPersonal = () => {
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
            <NavLinkStyled to="/auth">Log In / Registracja</NavLinkStyled>
          </NavItem>
        </NavList>
      </Header>
    </Container>
  );
};

export default NavigationPersonal;
