import useSWR from 'swr';
import { notFound } from 'next/navigation';
import { api2 } from 'service/api';

interface Props {
  cnpj: string;
  ie: string;
  store_name: string;
  address: ITAddress
}

async function getSellerSetings(route: string): Promise<Props> {
  const { data } = await api2.get(route)
    .catch(() => notFound());
  return data.settings;
}

export default function useSellerSettings() {
  const { data, mutate, error } = useSWR(
    '/panel/setings',
    getSellerSetings,
  );

  const loading = !data && !error;

  return {
    loading,
    dataSeller: data,
    mutate,
  };
}
