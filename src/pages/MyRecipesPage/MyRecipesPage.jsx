import { Section, Container } from './MyRecipesPage.styled';
import MainTitle from 'components/MainTitle/MainTitle';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserRecipes } from 'redux/actions/recipes.actions';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRecipes());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <MainTitle title="My recipes" />
        <MyRecipesList />
      </Container>
    </Section>
  );
};

export default MyRecipesPage;
