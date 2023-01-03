import { cookies } from 'next/headers';
import React from 'react';
import TableOrder from '../../../../components/Order/TableOrder';
import { api2 } from '../../../../service/api';
import style from './style.module.scss';

async function getOrderSeller() {
  const token = cookies().get('u_token')?.value;
  const { data } = await api2.get('/seller/orders/2', {
    headers: {
      cache: 'no-store',
      authorization: `Bearer ${token}`,
    },
  }).catch((error) => ({ data: { msg: error.message } }));
  return data;
}

async function Page() {
  const { orders } = await getOrderSeller();

  return (
    <div className={ style.cont_orders }>
      <TableOrder orders={ orders } />
    </div>
  );
}

export default Page;
