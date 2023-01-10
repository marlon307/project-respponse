import useSWR from 'swr';
import { api2 } from 'service/api';

interface PropsData {
  name?: string;
  email?: string;
  birthday?: string;
  cpf?: string;
  tel?: string;
  cel?: string;
  gender_id?: number;
}

const infoUser = async (route: string) => {
  const { data } = await api2.get(route)
    .catch(({ response }) => response);

  if (data.status === 200) return data.response;

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useUser = <Data = PropsData>(isRequest: boolean) => {
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
