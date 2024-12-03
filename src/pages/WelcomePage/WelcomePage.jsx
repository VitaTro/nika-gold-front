import { Link } from "react-router-dom";
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
  return (
    <div>
      <SliderWelcome />
      <WelcomeGeneral>Katalog</WelcomeGeneral>
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
                <BoxHeader> Chirurgiczne ZŁOTO</BoxHeader>
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
                <BoxHeader> Chirurgiczne ŚREBRO</BoxHeader>
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
                <BoxHeader>Nabory</BoxHeader>
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
                <BoxHeader> Pakowanie prezentów</BoxHeader>
              </BoxContainer>
            </Link>
          </WelcomeItem>
        </WelcomeList>
      </WelcomeContainer>
    </div>
  );
};
