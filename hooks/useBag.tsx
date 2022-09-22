import { getCookie } from 'cookies-next';
import useSWR from 'swr';
import { api2 } from '../service/api';

export const listBag = async (path: string) => {
  const token = getCookie('u_token');
  if (token) {
    const { data } = await api2.get(path, {
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

const useBag = (revalidate: boolean) => {
  const { data, mutate, error } = useSWR('/bag', listBag, {
    revalidateOnMount: revalidate,
  });
  const loading = !data && !error;
  const loggedOut = error && error.status === 401;
  const token = getCookie('u_token');
  const bagList = data?.list_bag ?? data?.listBag;

  return {
    loading,
    loggedOut,
    props: {
      listBag: bagList,
      token,
    },
    mutate,
  };
};

export default useBag;
