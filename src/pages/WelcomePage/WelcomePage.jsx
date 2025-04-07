import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SliderWelcome } from "../../components/Slider/SliderWelcome";
import Box from "./box.png";
import Gold from "./gold.png";
import Set from "./set.png";
import Silver from "./silver.png";
import {
  BoxContainer,
  BoxHeader,
  ImageBox,
  WelcomeContainer,
  WelcomeGeneral,
  WelcomeItem,
  WelcomeList,
} from "./WelcomePage.styled";

export const WelcomePage = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Перевірка залогування
  const navigate = useNavigate();
  const handleProductClick = (route) => {
    if (!isLoggedIn) {
      alert(t("please_login")); // Повідомлення для незалогованих користувачів
    } else {
      navigate(route); // Перехід до продуктів
    }
  };
  return (
    <div>
      <SliderWelcome />
      <WelcomeGeneral>{t("catalog")}</WelcomeGeneral>
      <WelcomeContainer>
        <WelcomeList>
          <WelcomeItem className="no-theme">
            <div onClick={() => handleProductClick("/products/gold")}>
              <BoxContainer>
                <ImageBox
                  src={Gold}
                  alt="gold earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("gold")}</BoxHeader>
              </BoxContainer>
            </div>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <div onClick={() => handleProductClick("/products/silver")}>
              <BoxContainer>
                <ImageBox
                  src={Silver}
                  alt="silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("silver")}</BoxHeader>
              </BoxContainer>
            </div>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <div onClick={() => handleProductClick("/products/set")}>
              <BoxContainer>
                <ImageBox
                  src={Set}
                  alt="set gold and silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("set")}</BoxHeader>
              </BoxContainer>
            </div>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <div onClick={() => handleProductClick("/products/box")}>
              <BoxContainer>
                <ImageBox
                  src={Box}
                  alt="box on the gold and silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("packaging")}</BoxHeader>
              </BoxContainer>
            </div>
          </WelcomeItem>
        </WelcomeList>
      </WelcomeContainer>
    </div>
  );
};
