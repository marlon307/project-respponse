import useSWR from 'swr';
import { api2 } from '../service/api';

const listAddress = async (route: string) => {
  const { data } = await api2.get(route)
    .catch(({ response }) => response);

  if (data.status === 200) return data;

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useAddress = <Data = any>() => {
  const { data, mutate, error } = useSWR<Data>(
    '/address',
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
