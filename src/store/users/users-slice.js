import { createSlice } from '@reduxjs/toolkit';
import usersOperations from './users-operations';

const initialState = {
  isLoadingList: false,
  isFetching: false,
  currentPage: 1,
  list: [],
  totalUsers: 0,
  totalPages: 0,
  isCompletedForm: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
  },
  extraReducers: {
    [usersOperations.fetchUsers.pending]: (state) => {
      if (state.list.length === 0) state.isLoadingList = true;
      state.isFetching = true;
    },
    [usersOperations.fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoadingList = false;
      state.isFetching = false;
      state.totalUsers = payload.total_users;
      state.totalPages = payload.total_pages;
      state.list = [...state.list, ...payload.users];
    },
    [usersOperations.fetchUsers.rejected]: (state) => {
      state.isLoadingList = false;
      state.isFetching = false;
    },

    [usersOperations.createUser.pending]: (state) => {
      state.isFetching = true;
    },
    [usersOperations.createUser.fulfilled]: (state) => {
      state.isFetching = false;
      state.list = [];
      state.currentPage = 1;
      state.isCompletedForm = true;
    },
    [usersOperations.createUser.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
