import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66e862cfb17821a9d9dc8720.mockapi.io/cars/';

export const fetchCarsThunk = createAsyncThunk(
  'cars/fetchCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCarsThunk = createAsyncThunk(
  'cars/loadMoreCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
