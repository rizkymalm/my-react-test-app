import { baseUrl, axios } from '../utils';

export const loginUser = async (data: any) => {
  const url = `${baseUrl.API_AUTH}/user/login`;
  const response = await axios.Post({
    url,
    data: data,
  });
  return response;
};
