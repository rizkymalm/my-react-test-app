const initialState = {
    loading: false,
    isLogin: false,
    error: '',
  };

  export const authReducers = (state = initialState, action: any) => {
    switch (action.type) {
      case 'AUTH_LOADING':
        return {
          ...state,
          loading: true,
        };

      case 'AUTH_SUCCESS':
        return {
          ...state,
          loading: false,
          isLogin: true,
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
