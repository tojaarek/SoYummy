import { Container, Position, Wrapper } from './ListBar.styled';

const ListBar = () => {
  return (
    <Container>
      <Position>Product</Position>
      <Wrapper>
        <Position $isProduct>Amount</Position>
        <Position>Remove</Position>
      </Wrapper>
    </Container>
  );
};

export default ListBar;
