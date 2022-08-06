import useSWR from 'swr';
import { api2 } from '../service/api';

type TUser = {
  route: string;
  token: string;
};

const infoUser = async ({ route, token }: TUser) => {
  if (token) {
    const { data } = await api2.post(route, {
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

const useUser = <Data = any>(token: string) => {
  const { data, mutate, error } = useSWR<Data>(
    {
      route: '/add_address',
      token,
    },
    infoUser,
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
