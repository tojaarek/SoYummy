import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorites,
  getUserFavorites,
  deleteFromFavorites,
} from 'redux/actions/favorites.actions';

const initialState = {
  recipes: [],
  isLoading: false,
  isDeleting: false,
  totalPages: 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipes.unshift(action.payload.data);
    });
    builder.addCase(addToFavorites.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addToFavorites.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(getUserFavorites.fulfilled, (state, action) => {
      state.recipes = action.payload.data;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    });
    builder.addCase(getUserFavorites.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUserFavorites.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteFromFavorites.fulfilled, (state, action) => {
      state.isDeleting = false;
      const index = state.recipes.findIndex(
        recipe => recipe.id === action.payload.id
      );
      state.recipes.splice(index, 1);
    });
    builder.addCase(deleteFromFavorites.pending, state => {
      state.isDeleting = true;
    });
    builder.addCase(deleteFromFavorites.rejected, state => {
      state.isDeleting = false;
    });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
