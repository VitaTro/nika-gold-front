import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      products: "Products",
      contact: "Contact Us",
      about: "About Us",
      login: "Log In",
    },
  },
  ua: {
    translation: {
      products: "Продукти",
      contact: "Контакти",
      about: "Про нас",
      login: "Увійти",
    },
  },
  pl: {
    translation: {
      products: "Wyroby",
      contact: "Kontakty",
      about: "O nas",
      login: "Zaloguj się",
    },
  },
  de: {
    translation: {
      products: "Produkte",
      contact: "Kontakt",
      about: "Über uns",
      login: "Anmelden",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl", // Мова за замовчуванням
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false, // React вже екранує значення
  },
});

export default i18n;
