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
};

const addRecipeSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(addRecipe.fulfilled, state => {
      state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addCase(addRecipe.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addRecipe.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getUserRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload;
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
    builder.addCase(deleteUserRecipe.fulfilled, state => {
      state.isDeleting = false;
    });
  },
});

export const addRecipeReducer = addRecipeSlice.reducer;
