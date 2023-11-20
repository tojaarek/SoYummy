import { useSelector } from 'react-redux';
import { selectUserRecipes } from 'redux/selectors/recipes.selectors';
import { List } from './MyRecipesList.styled';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

const MyRecipesList = () => {
  const recipes = useSelector(selectUserRecipes);
  return (
    <List>
      {recipes.map(recipe => (
        <MyRecipesItem key={recipe._id} recipe={recipe} />
      ))}
    </List>
  );
};

export default MyRecipesList;
