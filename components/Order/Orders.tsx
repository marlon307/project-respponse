import React, { use, lazy } from 'react';
import { notFound } from 'next/navigation';
import { api2 } from '../../service/api';
import TableOrder from './TableOrder';

const OrderId = lazy(() => import('./OrderId'));

type TPropsOrders = {
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

function Orders({ isRequest }: TPropsOrders) {
  const orders = use(getOrders(isRequest));

  return (
    <TableOrder orders={ orders } ConponeteRender={ OrderId } />
  );
}

export default Orders;
