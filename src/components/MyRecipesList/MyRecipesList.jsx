import { useSelector } from 'react-redux';
import { selectUserRecipes } from 'redux/selectors/recipes.selectors';
import { List } from './MyRecipesList.styled';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
import NoResults from 'components/NoResults/NoResults';

const MyRecipesList = () => {
  const recipes = useSelector(selectUserRecipes);

  if (recipes.length === 0) {
    return (
      <NoResults
        contents={`You haven't created any recipes of your own yet`}
        buttonText={'Add recipe'}
        goTo={'/main/ownRecipes/add'}
      />
    );
  }

  return (
    <List>
      {recipes.map(recipe => (
        <MyRecipesItem key={recipe._id} recipe={recipe} />
      ))}
    </List>
  );
};

export default MyRecipesList;
