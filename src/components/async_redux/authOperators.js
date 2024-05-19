import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'utils/utils';

export const authlogin = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async (myToken, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${myToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSignUp = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const response = await fetch(BASE_URL + 'users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
