import { useTranslation } from "react-i18next";
import { FooterItem } from "./Footer.styled";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <FooterItem>
      © 2025
      <a href="https://github.com/VitaTro"> Vita Tro </a>.{t("reserved")}.
    </FooterItem>
  );
};
export default Footer;
