import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SliderWelcome } from "../../components/Slider/SliderWelcome";
import {
  BoxContainer,
  BoxHeader,
  ImageBox,
  WelcomeContainer,
  WelcomeGeneral,
  WelcomeItem,
  WelcomeList,
} from "./WelcomePage.styled";
import Box from "./box.png";
import Gold from "./gold.png";
import Set from "./set.png";
import Silver from "./silver.png";
export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SliderWelcome />
      <WelcomeGeneral>{t("catalog")}</WelcomeGeneral>
      <WelcomeContainer>
        <WelcomeList>
          <WelcomeItem className="no-theme">
            <Link to="/products/gold" style={{ textDecoration: "none" }}>
              <BoxContainer>
                <ImageBox
                  src={Gold}
                  alt="gold earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("gold")}</BoxHeader>
              </BoxContainer>
            </Link>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <Link to="/products/silver" style={{ textDecoration: "none" }}>
              <BoxContainer>
                <ImageBox
                  src={Silver}
                  alt="silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("silver")}</BoxHeader>
              </BoxContainer>
            </Link>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <Link to="/products/set" style={{ textDecoration: "none" }}>
              <BoxContainer>
                <ImageBox
                  src={Set}
                  alt="set gold and silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("set")}</BoxHeader>
              </BoxContainer>
            </Link>
          </WelcomeItem>
          <WelcomeItem className="no-theme">
            <Link to="/products/box" style={{ textDecoration: "none" }}>
              <BoxContainer>
                <ImageBox
                  src={Box}
                  alt="box on the gold and silver earrings"
                  style={{ width: "220px" }}
                />
                <BoxHeader>{t("packaging")}</BoxHeader>
              </BoxContainer>
            </Link>
          </WelcomeItem>
        </WelcomeList>
      </WelcomeContainer>
    </div>
  );
};
