import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme.isDarkMode ? "#333" : "#fff")};
    color: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
    transition: all 0.3s linear;
  }
  .no-theme {
    background-color: #fff !important;
    color: #000 !important;
  }
`;
