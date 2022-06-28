import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

const notyf = new Notyf();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const fetchUsers = createAsyncThunk(
  'users/fetch',
  async ({ page = 1, count = 6, offset }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users', {
        params: { page, count, offset },
      });

      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const createUser = createAsyncThunk(
  'users/createuser',
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { token },
      } = await axios.get('/token');

      const { name, email, phone, position_id, photo } = payload;
      const formData = new FormData();

      formData.append('position_id', position_id);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('photo', photo);

      const { data } = await axios.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Token: token,
        },
      });

      return data;
    } catch (err) {
      notyf.error(err?.response?.data.message);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const operations = {
  fetchUsers,
  createUser,
};

export default operations;
