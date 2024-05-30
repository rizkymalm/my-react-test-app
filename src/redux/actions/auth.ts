import { loginUser } from '../../services/allService';

interface LoginProps {
  data: any;
  callback?: any;
}

export const postLoginUser =
  ({ data, callback }: LoginProps) =>
  async (dispatch: any) => {
    try {
      const response = await loginUser(data);
      dispatch({
        type: 'AUTH_SUCCESS',
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
