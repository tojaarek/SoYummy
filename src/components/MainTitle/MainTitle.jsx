import PropTypes from 'prop-types';
import { Container, Dot1, Dot2, Dot3, Title } from './MainTitle.styled';

const MainTitle = ({ title }) => {
  return (
    <Container>
      <Dot1></Dot1>
      <Dot2></Dot2>
      <Dot3></Dot3>
      <Title>{title}</Title>
    </Container>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string,
};

export default MainTitle;
