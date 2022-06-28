import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';

import { usersReducer } from './users';
import { settingsReducer } from './settings';

const middleware = [thunk, thunkMiddleware];

const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer,
  },
  middleware,
});

export default store;
