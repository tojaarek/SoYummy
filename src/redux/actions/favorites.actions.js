import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

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
      return response.data;
    } catch (error) {
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
      console.log(body);
      const response = await axios.delete('/favorites/delete', { data: body });
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
