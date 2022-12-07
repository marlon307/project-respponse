import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

const api = axios.create({
  baseURL: process.env.LOCAL_API_HOST,
});

export const api2 = axios.create({
  baseURL: process.env.LOCAL_API_HOST_2,
  // withCredentials: true,
});

// https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9';

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  return config;
});

api2.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getCookie('u_token');

  if (token) {
    // api2.defaults.headers.common.authorization = `Bearer ${token}`;
    config.headers!.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
