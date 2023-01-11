import useSWR from 'swr';
import { notFound } from 'next/navigation';
import { api2 } from 'service/api';

export interface PropsSettingsPanel {
  cnpj: string;
  ie: string;
  store_name: string;
  address: ITAddress
}

async function getSellerSetings(route: string): Promise<PropsSettingsPanel> {
  const { data } = await api2.get(route)
    .catch(() => notFound());
  return data.settings;
}

export default function useSellerSettings() {
  const { data, mutate, error } = useSWR(
    '/panel/setings',
    getSellerSetings,
    {
      revalidateOnFocus: false,
    },
  );

  const loading = !data && !error;

  return {
    loading,
    dataSeller: data,
    mutate,
  };
}
