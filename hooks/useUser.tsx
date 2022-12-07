import useSWR from 'swr';
import { api2 } from '../service/api';

const infoUser = async (route: string) => {
  const { data } = await api2.get(route)
    .catch(({ response }) => response);
  if (data.status === 200) return data.response;

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useUser = <Data = any>(isRequest: boolean) => {
  const { data, mutate, error } = useSWR<Data>(
    isRequest ? '/user' : null,
    infoUser,
    {
      suspense: true,
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateIfStale: false,
    },
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    dataUser: data,
    mutate,
  };
};

export default useUser;
