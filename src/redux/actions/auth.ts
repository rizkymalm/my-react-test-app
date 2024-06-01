// import { Dispatch } from 'redux';
import { loginUser, refreshToken } from '../../services/allService';
import { Dispatch } from '../types';

interface LoginProps {
  data?: any;
  callback?: any;
}

export const postLoginUser =
  ({ data, callback }: LoginProps) =>
  async (dispatch: Dispatch) => {
    try {
      const response: any = await loginUser(data);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: response.token,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: 'AUTH_ERROR',
          payload: error.response.data,
        });
      }
    }
  };

export const postRefreshToken =
  ({ callback }: LoginProps) =>
  async (dispatch: Dispatch, getState: any) => {
    try {
      const { token } = getState().auth;
      const response: any = await refreshToken(token);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: response.token,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        dispatch({
          type: 'LOGOUT',
        });
      } else {
        dispatch({
          type: 'LOGOUT',
        });
      }
    }
  };
