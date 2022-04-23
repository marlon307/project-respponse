import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.LOCAL_API_HOST,
});

// https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;