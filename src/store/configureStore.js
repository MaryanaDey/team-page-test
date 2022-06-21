import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const NODE_ENV = process.env.REACT_APP_NODE_ENV;

export default function configureStore(initialState) {
  const composeEnhancers =
    NODE_ENV === 'DEV' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}
