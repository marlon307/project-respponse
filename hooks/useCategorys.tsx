import useSWR from 'swr';
import { notFound } from 'next/navigation';
import { api2 } from '../service/api';
import type { PropsCardProductCategory } from '../@types/typeCardProduct';

async function getProductsCategoru(route: string): Promise<PropsCardProductCategory[]> {
  const { data } = await api2.get(route)
    .catch(() => notFound());
  return data.products_ctg;
}

function useCategorys(category_id: string) {
  const { data, mutate, error } = useSWR(
    `/category/products?category_name=${category_id}`,
    getProductsCategoru,
  );

  const loading = !data && !error;
  // const bagList = data?.infobag.list_b ?? data?.listBag;
  return {
    loading,
    props: data || [],
    mutate,
  };
}

export default useCategorys;
