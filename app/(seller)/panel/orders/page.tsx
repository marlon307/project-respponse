'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '../../../../components/ComponentsForm';
import TableOrder from '../../../../components/Order/TableOrder';
import { api2 } from '../../../../service/api';
import style from './style.module.scss';

function Page() {
  const [orders, setOrder] = useState<POrder[]>([]);
  const [status, setStatus] = useState(2);
  const [date1, setDate1] = useState<Date | string>('');
  const [date2, setDate2] = useState<Date | string>('');

  useEffect(() => {
    async function getOrderSeller() {
      const { data } = await api2.get(`/seller/orders/${status}`)
        .catch((error) => ({ data: { msg: error.message } }));
      setOrder(data.orders);
    }
    getOrderSeller();
  }, [status]);

  const filterOrder = orders.filter(
    (order) => ((date1 >= order.date_order
      && date2 <= order.date_order) || (date1 === '' || date2 === '')) && order,
  );

  return (
    <div className={ style.cont_orders }>
      <div className={ style.filter }>

        <select name="status" id="status" onChange={ ({ target }) => setStatus(Number(target.value)) }>
          <option value="2">Pagamento Aprovado</option>
          <option value="1">Pedido Realizado</option>
        </select>

        <Input type="datetime-local" text="Data de" onChange={ ({ target }) => setDate1(target.value) } />
        <Input type="datetime-local" text="Ate a data" onChange={ ({ target }) => setDate2(target.value) } />
      </div>
      <TableOrder orders={ filterOrder } />
    </div>
  );
}

export default Page;
