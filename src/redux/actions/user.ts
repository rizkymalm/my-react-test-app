// import { Dispatch } from 'redux';
import {
  userProfile,
  userList,
  userDetail,
  userDelete,
} from '../../services/allService';
import { Dispatch } from '../types';
import { postRefreshToken } from './auth';

interface UserProps {
  params?: any;
  callback?: any;
  user?: string;
}

export const getUserProfile =
  ({ callback }: UserProps) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: 'USER_LOADING',
    });
    try {
      const { token } = getState().auth;
      const response: any = await userProfile(token);
      dispatch({
        type: 'USER_SUCCESS',
        payload: response,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.name === 'TokenExpiredError') {
          dispatch(
            postRefreshToken({
              callback: () => {
                dispatch(getUserProfile({ callback }));
              },
            })
          );
        } else {
          dispatch({
            type: 'USER_ERROR',
            payload: error.response.data,
          });
        }
      }
    }
  };

export const getUserList =
  ({ params, callback }: UserProps) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: 'USER_LIST_LOADING',
    });
    try {
      const { token } = getState().auth;
      const response: any = await userList(token, params);
      dispatch({
        type: 'USER_LIST_SUCCESS',
        payload: response,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.name === 'TokenExpiredError') {
          dispatch(
            postRefreshToken({
              callback: () => {
                dispatch(getUserList({ params, callback }));
              },
            })
          );
        } else {
          dispatch({
            type: 'USER_LIST_ERROR',
            payload: error.response.data,
          });
        }
      }
    }
  };

export const getUserDetail =
  ({ user, callback }: UserProps) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: 'USER_DETAIL_LOADING',
    });
    try {
      const { token } = getState().auth;
      const response: any = await userDetail(token, user);
      dispatch({
        type: 'USER_DETAIL_SUCCESS',
        payload: response,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.name === 'TokenExpiredError') {
          dispatch(
            postRefreshToken({
              callback: () => {
                dispatch(getUserDetail({ user, callback }));
              },
            })
          );
        } else {
          dispatch({
            type: 'USER_DETAIL_ERROR',
            payload: error.response.data,
          });
        }
      }
    }
  };

export const deleteUser =
  ({ user, callback }: UserProps) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch({
      type: 'USER_ACTIONS_LOADING',
    });
    try {
      const { token } = getState().auth;
      const response: any = await userDelete(token, user);
      dispatch({
        type: 'USER_ACTIONS_SUCCESS',
        payload: response,
      });
      callback();
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.name === 'TokenExpiredError') {
          dispatch(
            postRefreshToken({
              callback: () => {
                dispatch(deleteUser({ user, callback }));
              },
            })
          );
        } else {
          dispatch({
            type: 'USER_ACTIONS_ERROR',
            payload: error.response.data,
          });
        }
      }
    }
  };
