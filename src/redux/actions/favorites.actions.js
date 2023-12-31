import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-h1wx.onrender.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addToFavorites = createAsyncThunk(
  'favorites/ADD',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.post('/favorites/add', body);
      if (response.data) {
        toast.success('The recipe has been added to favorites', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      return response.data;
    } catch (error) {
      if (error) {
        toast.error('Something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserFavorites = createAsyncThunk(
  'favorites/GET',
  async (pageNumber, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get(`/favorites?page=${pageNumber}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'favorites/DELETE',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.delete('/favorites/delete', { data: body });
      if (response) {
        toast.success('The recipe has been removed from favorites', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      return { recipeId: body.recipeId, responseData: response.data };
    } catch (error) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
