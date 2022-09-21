import { CookieValueTypes } from 'cookies-next';
import useSWR from 'swr';
import { api2 } from '../service/api';

type TUser = {
  route: string;
  token: CookieValueTypes;
};

const listAddress = async ({ route, token }: TUser) => {
  if (token) {
    const { data } = await api2.get(route, {
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

const useAddress = <Data = any>(token: CookieValueTypes) => {
  const { data, mutate, error } = useSWR<Data>(
    {
      route: '/address',
      token,
    },
    listAddress,
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    listAddress: data,
    mutate,
  };
};

export default useAddress;
