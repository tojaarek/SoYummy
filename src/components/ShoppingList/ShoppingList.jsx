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
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromShoppingList } from 'redux/actions/shoppingList.actions';
import { selectShoppingList } from 'redux/selectors/shoppingList.selectors';
const ShoppingList = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectShoppingList);

  const handleRemove = index => {
    dispatch(deleteFromShoppingList(index));
  };

  return (
    <List>
      {ingredients &&
        ingredients.map(({ title, thumb, measure }, index) => (
          <Item key={index}>
            <ProductBox>
              <ImageBox>
                <Image src={thumb} alt={title} />
              </ImageBox>
              <Title>{title}</Title>
            </ProductBox>
            <AmountBox>
              <Amount>{measure}</Amount>
              <Remove onClick={() => handleRemove(index)} />
            </AmountBox>
          </Item>
        ))}
    </List>
  );
};

export default ShoppingList;
