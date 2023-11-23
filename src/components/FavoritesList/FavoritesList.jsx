import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors/favorites.selectors';
import { List } from './FavoritesList.styled';
import FavoritesItem from 'components/FavoritesItem/FavoritesItem';

const FavoritesList = () => {
  const recipes = useSelector(selectFavorites);
  return (
    <List>
      {recipes.map(recipe => (
        <FavoritesItem key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};

export default FavoritesList;
