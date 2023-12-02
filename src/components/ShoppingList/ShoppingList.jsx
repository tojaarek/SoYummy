import {
  List,
  Item,
  ImageBox,
  Image,
  Title,
  Amount,
  Remove,
  ProductBox,
  AmountBox,
} from './ShoppingList.styled';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/selectors/shoppingList.selectors';
const ShoppingList = () => {
  const ingredients = useSelector(selectShoppingList);

  return (
    <List>
      {ingredients.map(({ _id, title, thumb, measure }) => (
        <Item key={_id}>
          <ProductBox>
            <ImageBox>
              <Image src={thumb} alt={title} />
            </ImageBox>
            <Title>{title}</Title>
          </ProductBox>
          <AmountBox>
            <Amount>{measure}</Amount>
            <Remove />
          </AmountBox>
        </Item>
      ))}
    </List>
  );
};

export default ShoppingList;
