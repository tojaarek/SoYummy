import MainTitle from '../../components/MainTitle/MainTitle';
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm';
import { Section, Container, Wrapper } from './AddRecipePage.styled';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import FollowUs from 'components/FollowUs/FollowUs';
import { useSelector } from 'react-redux';
import { selectAddRecipeIsLoading } from 'redux/selectors/recipes.selectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

const AddRecipePage = () => {
  const isLoading = useSelector(selectAddRecipeIsLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader text="Adding recipe" />
      ) : (
        <Section>
          <Container>
            <MainTitle title="Add recipe" />
            <Wrapper>
              <FollowUs />
              <AddRecipeForm />
            </Wrapper>
            <PopularRecipe />
          </Container>
        </Section>
      )}
    </>
  );
};

export default AddRecipePage;
