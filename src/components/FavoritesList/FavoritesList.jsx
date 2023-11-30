import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors/favorites.selectors';
import { List } from './FavoritesList.styled';
import FavoritesItem from 'components/FavoritesItem/FavoritesItem';
import NoResults from 'components/NoResults/NoResults';

const FavoritesList = () => {
  const recipes = useSelector(selectFavorites);

  if (recipes.length === 0) {
    return (
      <NoResults
        contents={`You haven't added any recipes to your favorites yet`}
        buttonText={'Browse recipes'}
        goTo={'/main/categories'}
      />
    );
  }

  return (
    <List>
      {recipes.map(recipe => (
        <FavoritesItem key={recipe.id} recipe={recipe} />
      ))}
    </List>
  );
};

export default FavoritesList;
