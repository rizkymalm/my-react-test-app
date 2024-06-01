import { Action, AuthState } from '../types';

const initialState: AuthState = {
  loading: false,
  isLogin: false,
  token: '',
  error: '',
};

export const authReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        loading: true,
        error: '',
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        token: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        loading: false,
        isLogin: false,
      };

    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
