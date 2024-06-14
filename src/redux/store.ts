import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers';

const initialState: any = {};
const middleware: any[] = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

const persistor = persistStore(store);

export { store, persistor };
