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
          <WelcomeItem>
            {/* link */}
            <BoxContainer>
              <ImageBox
                src={Gold}
                alt="gold earrings"
                style={{ width: "220px" }}
              />
              <BoxHeader> Chirurgiczne ZŁOTO</BoxHeader>
            </BoxContainer>
          </WelcomeItem>
          <WelcomeItem>
            <BoxContainer>
              <ImageBox
                src={Silver}
                alt="silver earrings"
                style={{ width: "220px" }}
              />
              <BoxHeader> Chirurgiczne ŚREBRO</BoxHeader>
            </BoxContainer>
          </WelcomeItem>
          <WelcomeItem>
            <BoxContainer>
              <ImageBox
                src={Set}
                alt="set gold and silver earrings"
                style={{ width: "220px" }}
              />
              <BoxHeader>Nabory</BoxHeader>
            </BoxContainer>
          </WelcomeItem>
          <WelcomeItem>
            <BoxContainer>
              <ImageBox
                src={Box}
                alt="box on the gold and silver earrings"
                style={{ width: "220px" }}
              />
              <BoxHeader> Pakowanie prezentów</BoxHeader>
            </BoxContainer>
          </WelcomeItem>
        </WelcomeList>
      </WelcomeContainer>
    </div>
  );
};
