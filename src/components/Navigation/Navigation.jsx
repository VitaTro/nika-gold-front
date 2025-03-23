import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import MobileMenuNavigation from "./MobileMenuNavigation";
import {
  Container,
  HamburgerButton,
  Header,
  LogoImage,
  NavItem,
  NavLinkStyled,
  NavList,
  Option,
  Select,
  Slider,
  ThemeIcon,
  ThemeToggle,
  UtilityContainer,
} from "./Navigation.styled";

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("pl");
  const [menuOpen, setMenuOpen] = useState(false); // Стан гамбургер-меню

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <Header>
        <NavLinkStyled to="/">
          <LogoImage
            src={
              isDarkMode
                ? "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218509/logoDark_d2zgpc.png"
                : "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218461/logoLigth_zer4gb.png"
            }
            alt="My brand logo"
          />
        </NavLinkStyled>

        {/* Гамбургер-кнопка (для мобільних) */}
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
        </HamburgerButton>

        {/* Меню для планшетів та десктопів */}
        <NavList>
          <NavItem>
            <NavLinkStyled to="/products">{t("products")}</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/contact">{t("contact")}</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about">{t("about")}</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/auth">{t("login")}</NavLinkStyled>
          </NavItem>
        </NavList>
      </Header>

      {/* Мови та перемикач тем */}
      <UtilityContainer>
        <ThemeToggle onClick={() => dispatch(toggleTheme())}>
          <Slider isDarkMode={isDarkMode}>
            <ThemeIcon
              src="https://res.cloudinary.com/dblh78pvc/image/upload/v1741275631/sun_prnb60.jpg"
              alt="Sun icon"
              $position="right"
              $visible={!isDarkMode}
            />
            <ThemeIcon
              src="https://res.cloudinary.com/dblh78pvc/image/upload/v1741275631/moon_krwywm.jpg"
              alt="Moon icon"
              $position="left"
              $visible={isDarkMode}
            />
          </Slider>
        </ThemeToggle>

        <Select
          id="language-select"
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <Option value="pl">PL</Option>
          <Option value="ua">UA</Option>
          <Option value="en">EN</Option>
          <Option value="de">DE</Option>
        </Select>
      </UtilityContainer>

      {/* Передача стану до MobileMenuNavigation */}
      <MobileMenuNavigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isDarkMode={isDarkMode}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
        t={t}
      />
    </Container>
  );
};

export default Navigation;
