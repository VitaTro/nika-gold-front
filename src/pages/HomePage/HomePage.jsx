import {
  ButtonContainer,
  Container,
  Logo,
  StyledLink,
} from "./HomePage.styled";
const HomePage = () => {
  return (
    <Container>
      <Logo
        src={
          "https://res.cloudinary.com/dblh78pvc/image/upload/v1733218461/logoLigth_zer4gb.png"
        }
        alt="My brand logo"
      />
      <ButtonContainer>
        <StyledLink to="/auth/login">Log In</StyledLink>
        <StyledLink to="/auth/register">Register</StyledLink>
      </ButtonContainer>
    </Container>
  );
};
export default HomePage;
