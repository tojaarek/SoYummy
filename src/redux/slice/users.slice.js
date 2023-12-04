import { createSlice } from '@reduxjs/toolkit';
import { register, signIn, refreshUser } from 'redux/actions/users.actions';

const initialState = {
  name: null,
  email: null,
  token: null,
  avatar: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
        state.avatar = action.payload.avatar;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
        state.avatar = action.payload.user.avatar;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.avatar = action.payload.user.avatar;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
