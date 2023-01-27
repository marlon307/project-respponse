import useSWR from 'swr';
import { api2 } from 'service/api';

async function getOrderId(path: string): Promise<StateOrder> {
  if (path) {
    const { data } = await api2.get(path);

    data.order.date_order = new Date(data.order.date_order)
      .toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
      });

    return data.order;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  throw error;
}

const useOrderId = (idOrder: number) => {
  const { data, mutate, error } = useSWR(
    `/seller/order/${idOrder}`,
    getOrderId,

  );
  const loading = !data && !error;
  const loggedOut = error && error.status === 401;
  // const bagList = data?.infobag.list_b ?? data?.listBag;
  return {
    loading,
    loggedOut,
    orderId: data,
    mutate,
  };
};

export default useOrderId;
