import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-h1wx.onrender.com';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'AUTH/REGISTER',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);
      if (error.message === 'Request failed with status code 409') {
        toast.error('This email address is already registered', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      if (error.message === 'Request failed with status code 400') {
        toast.error('Incorrect name, email or password', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'AUTH/SIGNIN',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signin', credentials);
      setHeader(data.token);
      return data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        toast.error('Incorrect email or password', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('AUTH/LOGOUT', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'AUTH/REFRESH_USER',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.users.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to refresh user');
    }

    try {
      setHeader(token);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeAvatar = createAsyncThunk(
  'AUTH/UPDATE_AVATAR',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/current/avatar', body, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().users.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
