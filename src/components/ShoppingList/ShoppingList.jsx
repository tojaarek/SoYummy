import {
  List,
  Item,
  ImageBox,
  Image,
  Title,
  Amount,
  Remove,
} from './ShoppingList.styled';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/selectors/shoppingList.selectors';
const ShoppingList = () => {
  const ingredients = useSelector(selectShoppingList);

  return (
    <List>
      {ingredients.map(({ _id, title, thumb, measure }) => (
        <Item key={_id}>
          <ImageBox>
            <Image src={thumb} alt={title} />
          </ImageBox>
          <Title>{title}</Title>
          <Amount>{measure}</Amount>
          <Remove />
        </Item>
      ))}
    </List>
  );
};

export default ShoppingList;
