import css from './RecipePageHero.module.css';
import { ReactComponent as Clock } from '../../../images/RecepiePage/clock.svg';
import { useDispatch } from 'react-redux';
import { addToFavorites } from 'redux/actions/favorites.actions';

export default function RecipePageHero({ description, title, time, _id }) {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites({ recipeId: _id }));
  };

  return (
    <div className={css.recepieDiv}>
      <span className={css.recepieTitle}>{title}</span>

      <span className={css.recepieDescription}>{description}</span>
      <button className={css.recepieTitleButton} onClick={handleAddToFavorites}>
        Add to favorite recipes
      </button>
      <div className={css.recepieTitleClockAndTime}>
        <Clock className={css.recepieTitleClock} />
        <span className={css.recepieTitleTime}>{time} min</span>
      </div>
    </div>
  );
}