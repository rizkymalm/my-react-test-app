const ENV = {
  API_AUTH: process.env.REACT_APP_API_AUTH_SERVICE,
  API_USER: process.env.REACT_APP_API_USER_SERVICE,
};

function getEnv() {
  return ENV;
}

export default getEnv();
