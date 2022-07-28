import useSWR from 'swr';
import { getCookie } from 'cookies-next';
import { api2 } from '../service/api';

export const infoUser = async () => {
  const cookie = getCookie('u_token');

  if (cookie) {
    const { data } = await api2.get('/get_user_info', {
      headers: {
        authorization: `Bearer ${cookie}`,
      },
    }).catch(({ response }) => response);

    return data.response;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useUser = () => {
  const { data, mutate, error } = useSWR(
    '/get_user_info',
    infoUser,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    ifoUser: data,
    mutate,
  };
};

export default useUser;
