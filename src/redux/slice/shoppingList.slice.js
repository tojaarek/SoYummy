import { createSlice } from '@reduxjs/toolkit';
import {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
} from 'redux/actions/shoppingList.actions';

const initialState = {
  ingredients: [],
  isLoading: false,
  isDeleting: false,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: builder => {
    builder.addCase(getShoppingList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ingredients = action.payload.ingredients;
    });
    builder.addCase(getShoppingList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getShoppingList.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(addToShoppingList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ingredients.push(action.payload.newIngredient.ingredients);
    });
    builder.addCase(addToShoppingList.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addToShoppingList.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteFromShoppingList.fulfilled, (state, action) => {
      state.isDeleting = false;
      const deletedIndex = parseFloat(action.payload.deletedIngredient);
      const index = state.ingredients.findIndex((_, i) => i === deletedIndex);
      state.ingredients.splice(index, 1);
    });
    builder.addCase(deleteFromShoppingList.pending, state => {
      state.isDeleting = true;
    });
    builder.addCase(deleteFromShoppingList.rejected, state => {
      state.isDeleting = false;
    });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
