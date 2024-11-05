import {
  Container,
  Header,
  LogoImage,
  NavItem,
  NavLinkStyled,
  NavList,
} from "./Navigation.styled";
import logoUrl from "./logo.png";

const Navigation = () => {
  return (
    <Container>
      <Header>
        <NavLinkStyled to="/">
          <LogoImage src={logoUrl} alt="logo" />
        </NavLinkStyled>
        <NavList>
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

export default Navigation;
