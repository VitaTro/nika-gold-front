import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
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
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { isLoggedIn, userName, userPhoto } = useSelector(
    (state) => state.auth
  );
  console.log("Navigation Redux State:", { isLoggedIn, userName, userPhoto });

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("pl");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      dispatch(toggleTheme()); // Встановлюємо темну тему
    }
  }, [dispatch]);
  const handleThemeToggle = () => {
    const newTheme = !isDarkMode; // Перемикання теми
    dispatch(toggleTheme()); // Оновлюємо стан Redux
    localStorage.setItem("theme", newTheme ? "dark" : "light"); // Зберігаємо тему
  };
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

        {/* Гамбургер-кнопка */}
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
          <div style={{ backgroundColor: isDarkMode ? "#0c0" : "#333" }} />
        </HamburgerButton>

        {/* Меню для планшетів і десктопів */}
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
          {isLoggedIn ? (
            <>
              <NavItem>
                <span>{userName}</span>
              </NavItem>
              <NavItem>
                <button
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    color: "gray",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => dispatch(logout())}
                >
                  {t("logout")} {/* Відображає "Wyloguj się" */}
                </button>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLinkStyled to={isAdmin ? "/auth/admin/login" : "/auth/login"}>
                {t("login")}
              </NavLinkStyled>
            </NavItem>
          )}
        </NavList>
      </Header>

      {/* Мови та перемикач тем */}
      <UtilityContainer>
        {isLoggedIn && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={userPhoto || "https://via.placeholder.com/50"} // Фото користувача
              alt={`${userName}'s avatar`}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid #ccc",
              }}
            />
          </div>
        )}
        <ThemeToggle onClick={handleThemeToggle}>
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

      {/* Мобільне меню */}
      <MobileMenuNavigation
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isDarkMode={isDarkMode}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
        t={t}
        isLoggedIn={isLoggedIn}
        userName={userName}
        userPhoto={userPhoto}
      />
    </Container>
  );
};

export default Navigation;
