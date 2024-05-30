import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { authReducers } from './authReducer';

const persistConfig = {
  key: 'KadenceInternalCosting',
  storage,
};

const appReducer = combineReducers({
  auth: authReducers,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
