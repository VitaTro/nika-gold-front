import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  height: 140px;
  display: flex;
  align-items: center;
  padding: 5px 60px 10px 5px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 608px) {
    justify-content: space-between;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  margin-left: 100px;
  transition: all 0.5s linear;
  @media (max-width: 768px) {
    margin-left: 60px;
  }
  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 608px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLinkStyled = styled(Link)`
  color: ${(props) => (props.theme.$isDarkMode ? "#E0E0E0" : "gray")};
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 36px;
  text-decoration: none;
  list-style: none;
  &:hover {
    color: darkgray;
  }
`;

export const ThemeToggle = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
export const Slider = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode", // Заборона передачі в DOM
})`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.theme.$isDarkMode ? "#222" : "#fff")};
  transition: 0.4s;
  border-radius: 34px;
  border: 1px solid #ccc;

  &::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: ${(props) =>
      props.isDarkMode ? "30px" : "4px"}; // Позиція змінюється залежно від теми
    bottom: 4px;
    background-color: #333; // Стабільний колір, не залежить від теми
    transition: 0.6s;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
`;

export const ThemeIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.$position === "left" ? "4px" : "unset")};
  right: ${(props) => (props.$position === "right" ? "4px" : "unset")};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: left 0.6s, right 0.6s;
  width: 22px;
  height: 22px;
`;

export const Select = styled.select``;

export const Label = styled.label``;

export const Option = styled.option``;

export const LanguageSelector = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const LanguageSelected = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};

  img {
    width: 24px;
    height: 24px;
  }
`;

export const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.$isDarkMode ? "#444" : "#f7f7f7")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isDarkMode ? "#555" : "#e2e2e2")};
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${(props) => (props.$isDarkMode ? "#fff" : "blue")};
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: none;

  ${LanguageSelector}:hover & {
    display: block;
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => (theme.$isDarkMode ? "#0c0" : "#333")};
    transition: background-color 0.3s ease-in-out;
  }

  @media (max-width: 608px) {
    display: flex;
  }
`;

export const UtilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  // @media (max-width: 768px) {
  //   justify-content: flex-end;
  //   flex-direction: column;
  //   margin-top: 10px;
  // }

  @media (max-width: 608px) {
    // flex-direction: column;
    // align-items: flex-start;
    // gap: 10px;
    // margin-top: 15px;
    // width: 100%;
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  position: fixed;
  list-style: none;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  background-color: ${(props) => (props.theme.$isDarkMode ? "#333" : "#fff")};
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out; /* Плавна анімація кольору */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MobileUtilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) =>
    props.theme.$isDarkMode
      ? "green"
      : "red"}; /* Хрестик зелений у темному режимі */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: limegreen; /* Зелений колір при наведенні */
  }
`;
