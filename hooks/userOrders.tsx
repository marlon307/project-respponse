import useSWR from 'swr';
import { notFound } from 'next/navigation';
import { api2 } from '../service/api';

async function getOrders(route: string): Promise<POrder[]> {
  const { data } = await api2.get(route)
    .catch(() => notFound());
  return data.orders;
}

function useOrders(isRequirid: boolean) {
  const { data, mutate, error } = useSWR(
    isRequirid ? '/order' : null,
    getOrders,
  );

  const loading = !data && !error;
  // const bagList = data?.infobag.list_b ?? data?.listBag;
  return {
    loading,
    orders: data || [],
    mutate,
  };
}

export default useOrders;
