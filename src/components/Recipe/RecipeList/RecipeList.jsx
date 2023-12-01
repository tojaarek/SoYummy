import ingredientsData from '../list/soyummy.ingredients.json';
import css from '../RecipeList/RecipeList.module.css';
import { useDispatch } from 'react-redux';
import { addToShoppingList } from 'redux/actions/shoppingList.actions';

export default function RecipeIngredientsList({ requiredIngredients }) {
  const allIngredient = ingredientsData;
  const dispatch = useDispatch();

  const handleCheckboxClick = (_id, title, thumb, measure) => {
    dispatch(addToShoppingList({ _id, title, thumb, measure }));
  };

  return (
    <>
      <div className={css.RecipeListHead}>
        <span className={css.RecipeListHeadText}>Ingredients</span>
        <div>
          <span className={css.RecipeListHeadText}>Number</span>
          <span className={css.RecipeListHeadText}>Add to list</span>
        </div>
      </div>
      <ul className={css.RecipeListList}>
        {requiredIngredients?.map(indegrient => {
          const id = indegrient.id ?? indegrient.ingredientId;
          const ingredientMeasure =
            indegrient.measure ?? indegrient.ingredientMeasure;
          const { title, thumb, description } = allIngredient.find(
            ({ _id }) => _id.$oid === id
          ) ?? { title: '', thumb: '', description: '' };
          return (
            <li className={css.RecipeListListLi} key={id}>
              <div className={css.RecipeListListLiDiv}>
                <img
                  className={css.RecipeListListLiDivImg}
                  src={thumb}
                  alt={description}
                />
                <span className={css.RecipeListListLiDivTitle}>{title}</span>
              </div>
              <div className={css.RecipeListListLiInpiut}>
                <span className={css.RecipeListListLiInpiutMesure}>
                  {`${ingredientMeasure}`}
                </span>
                <input
                  className={css.RecipeListListLiInpiutInput}
                  type="checkbox"
                  onClick={() =>
                    handleCheckboxClick(id, title, thumb, ingredientMeasure)
                  }
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
