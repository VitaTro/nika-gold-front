import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";

import {
  CloseButton,
  Container,
  HamburgerButton,
  Header,
  LogoImage,
  MobileMenu,
  MobileUtilityContainer,
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
        {/* Логотип */}
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

      {/* Меню для мобільних */}
      <MobileMenu
        style={{
          backgroundColor: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "gray" : "#E0E0E0",
          transition: "background-color 0.3s ease-in-out",
        }}
        $isOpen={menuOpen}
        className="mobile-menu"
        onClick={(e) => e.stopPropagation()} // Запобігаємо закриттю при кліку всередині
      >
        <CloseButton
          style={{
            color: isDarkMode ? "green" : "black", // Зелений у темному режимі
            transition: "color 0.3s ease-in-out",
          }}
          onClick={() => setMenuOpen(false)}
        >
          ×
        </CloseButton>
        <MobileUtilityContainer>
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
        </MobileUtilityContainer>
        <NavItem>
          <NavLinkStyled
            to="/products"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isDarkMode ? "#E0E0E1" : "gray",
            }}
          >
            {t("products")}
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isDarkMode ? "#E0E0E1" : "gray",
            }}
          >
            {t("contact")}
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isDarkMode ? "#E0E0E1" : "gray",
            }}
          >
            {t("about")}
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled
            to="/auth"
            onClick={() => setMenuOpen(false)}
            style={{
              color: isDarkMode ? "#E0E0E1" : "gray",
            }}
          >
            {t("login")}
          </NavLinkStyled>
        </NavItem>
      </MobileMenu>
    </Container>
  );
};

export default Navigation;
