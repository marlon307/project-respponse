import useSWR from 'swr';
import { api2 } from '../service/api';

type TUser = {
  route: string;
  token: string;
};

export const infoUser = async ({ route, token }: TUser) => {
  if (token) {
    const { data } = await api2.get(route, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).catch(({ response }) => response);

    return data.response;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useUser = (token: string) => {
  const { data, mutate, error } = useSWR(
    {
      route: '/get_user_info',
      token,
    },
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
