import useSWR from 'swr';
import { api2 } from '../service/api';

export const listBag = async (path: string) => {
  if (path) {
    const { data } = await api2.get(path)
      .catch(({ response }) => response);
    return data;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
};

const useBag = (revalidate: boolean) => {
  const { data, mutate, error } = useSWR(
    // revalidate ? '/bag' : null,
    '/bag',
    listBag,
    {
      revalidateOnMount: revalidate,
    },
  );
  const loading = !data && !error;
  const loggedOut = error && error.status === 401;
  // const bagList = data?.infobag.list_b ?? data?.listBag;
  return {
    loading,
    loggedOut,
    props: {
      listBag: data?.infobag.list_b,
      mainAdd: data?.infobag.main_add,
      shipping_company: data?.infobag.shipping_company,
    },
    mutate,
  };
};

export default useBag;