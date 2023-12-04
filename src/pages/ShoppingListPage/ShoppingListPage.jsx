import { Section, Container } from './ShoppingListPage.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import { Loader } from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { selectShoppingListIsLoading } from 'redux/selectors/shoppingList.selectors';
import { getShoppingList } from 'redux/actions/shoppingList.actions';
import ListBar from 'components/ListBar/ListBar';
import { useEffect } from 'react';
import ShoppingList from 'components/ShoppingList/ShoppingList';
import { Helmet } from 'react-helmet';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectShoppingListIsLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getShoppingList());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>SoYummy | Shopping list</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          <Container>
            <MainTitle title="Shopping list" />
            <ListBar />
            <ShoppingList />
          </Container>
        </Section>
      )}
    </>
  );
};

export default ShoppingListPage;
