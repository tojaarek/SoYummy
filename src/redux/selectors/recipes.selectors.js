export const selectAddRecipeIsLoading = state => state.ownRecipes.isLoading;
export const selectAddRecipeIsSuccess = state => state.ownRecipes.isSuccess;
export const selectUserRecipes = state => state.ownRecipes.recipes;

export const selectBreakfastRecipes = state =>
  state.recipes.categories.Breakfast;
export const selectMiscellaneousRecipes = state =>
  state.recipes.categories.Miscellaneous;
export const selectChickenRecipes = state => state.recipes.categories.Chicken;
export const selectDessertRecipes = state => state.recipes.categories.Dessert;
export const selectCategoriesList = state => state.recipes.categoriesList;
export const selectRecipe = state => state.recipes.recipe;
