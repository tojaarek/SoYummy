import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-h1wx.onrender.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategoryRecipes = createAsyncThunk(
  'recipes/FETCH_CATEGORY',
  async (categoryId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/recipes/category/' + categoryId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'recipes/ADD_USER_RECIPE',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/ownRecipes/add', body, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().users.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        toast.success('The recipe has been successfully added', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserRecipes = createAsyncThunk(
  'recipes/GET_USER_RECIPES',
  async (pageNumber, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get(`/ownRecipes?page=${pageNumber}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUserRecipe = createAsyncThunk(
  'recipes/DELETE_USER_RECIPE',
  async (recipeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.delete(`/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategoriesList = createAsyncThunk(
  'recipes/FETCH_CATEGORIES_LIST',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/FETCH_RECIPE_BY_ID',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/recipes/' + id);
      return response.data.recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
