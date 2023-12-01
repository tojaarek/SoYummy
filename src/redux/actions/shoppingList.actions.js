import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getShoppingList = createAsyncThunk(
  'shoppingList/GET',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.get('/shopping-list');
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'shoppingList/ADD',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;
    setHeader(token);
    try {
      const response = await axios.post('/shopping-list/add', body);
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
