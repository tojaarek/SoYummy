import css from './RecipePageHero.module.css';
import { ReactComponent as Clock } from '../../../images/RecepiePage/clock.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  deleteFromFavorites,
} from 'redux/actions/favorites.actions';
import formatTime from 'const/formatTime';
import { selectFavorites } from 'redux/selectors/favorites.selectors';
import { useState } from 'react';

export default function RecipePageHero({ description, title, time, _id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isRecipeInFavorites = favorites.some(favorite => favorite.id === _id);
  const [isFavorite, setIsFavorite] = useState(isRecipeInFavorites);

  const handleAdd = () => {
    dispatch(addToFavorites({ recipeId: _id }));
    setIsFavorite(true);
  };
  const handleDelete = () => {
    dispatch(deleteFromFavorites({ recipeId: _id }));
    setIsFavorite(false);
  };

  const formattedTime = time !== undefined ? formatTime(time) : '';

  return (
    <div className={css.recepieDiv}>
      <span className={css.recepieTitle}>{title}</span>
      <span className={css.recepieDescription}>{description}</span>
      {isFavorite ? (
        <button className={css.recepieTitleButton} onClick={handleDelete}>
          Remove from favorites
        </button>
      ) : (
        <button className={css.recepieTitleButton} onClick={handleAdd}>
          Add to favorite recipes
        </button>
      )}
      <div className={css.recepieTitleClockAndTime}>
        <Clock className={css.recepieTitleClock} />
        <span className={css.recepieTitleTime}>{formattedTime}</span>
      </div>
    </div>
  );
}
