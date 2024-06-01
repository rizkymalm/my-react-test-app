import { Action, UserState } from '../types';

const initialState: UserState = {
  profile: {
    loading: false,
    error: '',
    data: '',
  },
  list: {
    loading: false,
    error: '',
    data: '',
  },
  detail: {
    loading: false,
    error: '',
    data: '',
  },
  actions: {
    loading: false,
    error: '',
  },
};

export const userReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
          error: '',
        },
      };
    case 'USER_SUCCESS':
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          data: action.payload,
        },
      };
    case 'USER_ERROR':
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          error: action.payload,
        },
      };

    //user list
    case 'USER_LIST_LOADING':
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          error: '',
        },
      };
    case 'USER_LIST_SUCCESS':
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: action.payload,
        },
      };
    case 'USER_LIST_ERROR':
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload,
        },
      };

    //user detail
    case 'USER_DETAIL_LOADING':
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: true,
          error: '',
        },
      };
    case 'USER_DETAIL_SUCCESS':
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          data: action.payload,
        },
      };
    case 'USER_DETAIL_ERROR':
      return {
        ...state,
        detail: {
          ...state.detail,
          loading: false,
          error: action.payload,
        },
      };

    //user action
    case 'USER_ACTIONS_LOADING':
      return {
        ...state,
        actions: {
          ...state.actions,
          loading: true,
          error: '',
        },
      };
    case 'USER_ACTIONS_SUCCESS':
      return {
        ...state,
        actions: {
          ...state.actions,
          loading: false,
          error: '',
        },
      };
    case 'USER_ACTIONS_ERROR':
      return {
        ...state,
        actions: {
          ...state.actions,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
