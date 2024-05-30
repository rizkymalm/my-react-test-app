import axios from 'axios';

interface Props {
  url: string;
  params?: any;
  data?: any;
  token?: string;
}

type GetProps = Omit<Props, 'datas'>;

const queryParser = (params: any) => {
  let queryParams = '';
  for (let key in params) {
    if (!queryParams) {
      queryParams = queryParams.concat(`?${key}=${params[key]}`);
    } else {
      queryParams = queryParams.concat(`&${key}=${params[key]}`);
    }
  }
  return queryParams;
};

const timeoutStandard = 200000;

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const Axios = {
  Get: ({ url, params, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'GET',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Post: ({ url, data, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostFormData: ({ url, data, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          timeout: timeoutStandard,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },

  Put: ({ url, params, data, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'PUT',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Patch: ({ url, params, data, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'PATCH',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Delete: ({ url, params, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'DELETE',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  All: ({ promises }: any) => {
    return new Promise((resolve, reject) => {
      axios
        .all(promises)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default Axios;
