import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import {
  Container,
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
} from "./Navigation.styled";

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("pl"); // Польська за замовчуванням

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang); // Зміна мови
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

          {/* Вибір мови */}

          <Select
            id="language-select"
            value={selectedLanguage} // Поточна мова
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <Option value="pl">PL</Option>
            <Option value="ua">UA</Option>
            <Option value="en">EN</Option>
            <Option value="de">DE</Option>
          </Select>
        </NavList>
      </Header>
    </Container>
  );
};

export default Navigation;
