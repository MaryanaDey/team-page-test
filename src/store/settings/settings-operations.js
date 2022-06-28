import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetchPositions = createAsyncThunk(
  'settings/positions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/positions');

      return data.positions;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const operations = {
  fetchPositions,
};

export default operations;
