import RecipePageHero from 'components/Recipe/RecipeHero/RecipePageHero';
import React, { useEffect } from 'react';
import RecipeIngredientsList from 'components/Recipe/RecipeList/RecipeList';
import css from './RecipesPage.module.css';
import RecipePreparation from 'components/Recipe/RecipePreparation/RecipePreparation';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from 'redux/actions/recipes.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecipe } from 'redux/selectors/recipes.selectors';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchRecipeById(recipeId));
  }, [recipeId, dispatch]);

  const recipe = useSelector(selectRecipe);

  return (
    <div className={css.General}>
      <div className={css.RecipesPageBackgroundImange}>
        <RecipePageHero
          title={recipe?.title}
          description={recipe?.description}
          time={recipe?.time}
          thumb={recipe?.thumb}
          _id={recipe?._id}
        />
      </div>
      {!!recipe?.ingredients && (
        <RecipeIngredientsList requiredIngredients={recipe?.ingredients} />
      )}
      {!!recipe?.instructions && (
        <div className={css.RecipePreparation}>
          <RecipePreparation
            thumb={recipe?.thumb}
            instructions={recipe?.instructions}
            title={recipe?.title}
          />
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
