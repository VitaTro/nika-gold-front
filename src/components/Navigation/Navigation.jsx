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
  Slider,
  ThemeIcon,
  ThemeToggle,
} from "./Navigation.styled";

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const logoLightUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218461/logoLigth_zer4gb.png";
  const logoDarkUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218509/logoDark_d2zgpc.png";
  const sunUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1741275631/sun_prnb60.jpg";
  const moonUrl =
    "https://res.cloudinary.com/dblh78pvc/image/upload/v1741275631/moon_krwywm.jpg";
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
            <Slider isDarkMode={isDarkMode}>
              <ThemeIcon
                src={sunUrl}
                alt="Sun icon"
                $position="right"
                $visible={!isDarkMode}
              />
              <ThemeIcon
                src={moonUrl}
                alt="Moon icon"
                $position="left"
                $visible={isDarkMode}
              />
            </Slider>
          </ThemeToggle>
        </NavList>
      </Header>
    </Container>
  );
};

export default Navigation;
