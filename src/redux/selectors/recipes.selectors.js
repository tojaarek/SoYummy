export const selectAddRecipeIsLoading = state => state.ownRecipes.isLoading;
export const selectAddRecipeIsSuccess = state => state.ownRecipes.isSuccess;
export const selectOwnRecipesIsDeleting = state => state.ownRecipes.isDeleting;
export const selectUserRecipes = state => state.ownRecipes.recipes;
export const selectTOwnRecipesTotalPages = state => state.ownRecipes.totalPages;

export const selectBreakfastRecipes = state =>
  state.recipes.categories.Breakfast;
export const selectMiscellaneousRecipes = state =>
  state.recipes.categories.Miscellaneous;
export const selectChickenRecipes = state => state.recipes.categories.Chicken;
export const selectDessertRecipes = state => state.recipes.categories.Dessert;
export const selectCategoriesList = state => state.recipes.categoriesList;
export const selectRecipe = state => state.recipes.recipe;
