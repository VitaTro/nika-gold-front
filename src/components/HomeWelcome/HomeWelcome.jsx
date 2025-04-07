import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import {
  ButtonContainer,
  Container,
  Register,
  SignIn,
} from "./HomeWelcome.styled";
import HomeImage from "./gold_1.png";
const HomeWelcome = () => {
  return (
    <>
      <Helmet>Nika Gold | Welcome</Helmet>
      <Container>
        <img
          src={HomeImage}
          alt="General photo with gold jewelry"
          width={460}
          height={310}
        />
        <ButtonContainer>
          <SignIn to="/auth/login" as={RouterLink}>
            Log In
          </SignIn>
          <Register to="/auth/register" as={RouterLink}>
            Register
          </Register>
        </ButtonContainer>
      </Container>
    </>
  );
};
export default HomeWelcome;
