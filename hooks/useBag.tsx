import useSWR from 'swr';
import { getCookie } from 'cookies-next';
import { api2 } from '../service/api';

export const addBag = async () => {
  const token = getCookie('u_token');

  if (token) {
    const { data } = await api2.get('/bag', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).catch(({ response }) => response);
    return data;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useBag = () => {
  const { data, mutate, error } = useSWR('/bag', addBag);

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
};

export default useBag;
