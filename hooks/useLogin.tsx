import useSWR from 'swr';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';
import { api2 } from '../service/api';

export const loginUser = async (formData: FormData, request: boolean = false) => {
  const cookie = getCookie('u_token');

  if (!cookie && request) {
    const { data } = await api2.post('/login_user', formData)
      .catch(({ response }) => response);

    setCookie('u_token', data.access_token, {
      expires: new Date(data.exp),
      secure: true,
      sameSite: 'strict',
    });
    return data;
  }

  if (cookie) {
    return cookie;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

export const logOutUser = async () => deleteCookie('u_token');

const useLogin = () => {
  const { data, mutate, error } = useSWR('/login_user', loginUser);

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
};

export default useLogin;
