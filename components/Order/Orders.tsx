import React, { lazy } from 'react';
import useOrders from '../../hooks/userOrders';

import TableOrder from './TableOrder';

const OrderId = lazy(() => import('./OrderId'));

type TPropsOrders = {
  isRequest: boolean
};

function Orders({ isRequest }: TPropsOrders) {
  const { orders } = useOrders(isRequest);

  return (
    <TableOrder orders={ orders } ConponeteRender={ OrderId } />
  );
}

export default Orders;
