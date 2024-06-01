import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { authReducers } from './authReducer';
import { userReducers } from './userReducers';

const persistConfig = {
  key: 'KadenceInternalCosting',
  storage,
};

const appReducer = combineReducers({
  auth: authReducers,
  user: userReducers
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
