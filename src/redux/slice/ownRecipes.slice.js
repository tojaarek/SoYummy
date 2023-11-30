import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipe,
  getUserRecipes,
  deleteUserRecipe,
} from 'redux/actions/recipes.actions';

const initialState = {
  recipes: [],
  isLoading: false,
  isSuccess: false,
  isDeleting: false,
  totalPages: 0,
};

const addRecipeSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.recipes.unshift(action.payload.recipe.newRecipe);
    });
    builder.addCase(addRecipe.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addRecipe.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getUserRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload.recipes.data;
      state.totalPages = action.payload.recipes.totalPages;
      state.isLoading = false;
    });
    builder.addCase(getUserRecipes.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUserRecipes.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteUserRecipe.pending, state => {
      state.isDeleting = true;
    });
    builder.addCase(deleteUserRecipe.fulfilled, (state, action) => {
      state.isDeleting = false;
      const index = state.recipes.findIndex(
        recipe => recipe.id === action.payload.id
      );
      state.recipes.splice(index, 1);
    });
  },
});

export const addRecipeReducer = addRecipeSlice.reducer;
