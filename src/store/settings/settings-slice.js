import { createSlice } from '@reduxjs/toolkit';
import settingsOperations from './settings-operations';

const initialState = {
  isLoading: false,
  positions: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [settingsOperations.fetchPositions.pending]: (state) => {
      state.isLoading = true;
    },
    [settingsOperations.fetchPositions.fulfilled]: (state, { payload }) => {
      state.positions = payload;
      state.isLoading = false;
    },
    [settingsOperations.fetchPositions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
