import useSWR from 'swr';
import { getCookie, deleteCookie } from 'cookies-next';
import { api2 } from '../service/api';

export const loginUser = async (email: string, password: string) => {
  const cookie = getCookie('u_token');
  if (!cookie && email && password) {
    const { data } = await api2.post('/login_user', {
      email,
      password,
    }).catch(({ response }) => response);
    return data;
  }

  if (cookie) {
    return cookie;
  }

  const error: any = new Error('Not authorized!');
  error.status = 403;
  throw error;
};

export const logOutUser = async () => deleteCookie('u_token');

const useUser = () => {
  const { data, mutate, error } = useSWR('login_user', loginUser);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
};

export default useUser;
