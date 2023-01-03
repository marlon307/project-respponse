import { notFound } from 'next/navigation';
import React, { use, useCallback } from 'react';
import { api2 } from '../../service/api';
import TableOrder from './TableOrder';

type TPropsOrders = {
  execFunction: Function;
  isRequest: boolean
};

async function getOrders(isRequest: boolean): Promise<[]> {
  if (isRequest) {
    const { data } = await api2.get('/order')
      .catch(() => notFound());
    return data.orders;
  }
  return [];
}

function Orders({ execFunction, isRequest }: TPropsOrders) {
  const orders = use(getOrders(isRequest));
  const orderIdOpen = useCallback((orderId: string) => {
    execFunction!(orderId);
  }, []);

  return (
    <TableOrder orders={ orders } execFunction={ orderIdOpen } />
  );
}

export default Orders;
