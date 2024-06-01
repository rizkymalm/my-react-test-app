import { baseUrl, axios } from '../utils';

export const loginUser = async (data: any) => {
  const url = `${baseUrl.API_AUTH}login`;
  const response = await axios.Post({
    url,
    data,
  });
  return response;
};

export const refreshToken = async (token: string) => {
  const url = `${baseUrl.API_AUTH}refresh`;
  const response = await axios.Post({
    url,
    token,
    data: {
      expiresInMins: 30,
    },
  });
  return response;
};

export const userProfile = async (token: string) => {
  const url = `${baseUrl.API_AUTH}me`;
  const response = await axios.Get({
    url,
    token,
  });
  return response;
};

export const userList = async (token: string, params: any) => {
  const url = `${baseUrl.API_USER}`;
  const response = await axios.Get({
    url,
    token,
    params,
  });
  return response;
};

export const userDetail = async (token: string, id: any) => {
  const url = `${baseUrl.API_USER}/${id}`;
  const response = await axios.Get({
    url,
    token,
  });
  return response;
};

export const userDelete = async (token: string, id: any) => {
  const url = `${baseUrl.API_USER}/${id}`;
  const response = await axios.Delete({
    url,
    token,
  });
  return response;
};
