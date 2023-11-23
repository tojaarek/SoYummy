import {
  Section,
  Container,
  ImageWrapper,
  Notice,
  Description,
  ErrorImage,
} from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <ErrorImage />
          <Notice>We are sorry,</Notice>
          <Description>
            but the page you were looking for can't be found...
          </Description>
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default ErrorPage;
