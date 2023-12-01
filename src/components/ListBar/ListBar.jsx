import { Container, Position } from './ListBar.styled';

const ListBar = () => {
  return (
    <Container>
      <Position $isProduct>Product</Position>
      <Position>Amount</Position>
      <Position>Remove</Position>
    </Container>
  );
};

export default ListBar;
