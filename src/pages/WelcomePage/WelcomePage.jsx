import {
  Section,
  Container,
  Logo,
  Title,
  Description,
  Register,
  Login,
} from './WelcomePage.styled';
import { Helmet } from 'react-helmet';

const WelcomePage = () => {
  return (
    <>
      <Helmet>
        <title>SoYummy | Welcome</title>
      </Helmet>
      <Section>
        <Container>
          <Logo />
          <Title>Welcome to the app!</Title>
          <Description>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Description>
          <div>
            <Register to="register">Registration</Register>
            <Login to="signin">Sign In</Login>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default WelcomePage;
