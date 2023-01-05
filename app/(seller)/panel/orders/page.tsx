'use client';

import React, { useState } from 'react';
import { Input } from '../../../../components/ComponentsForm';
import TableOrder from '../../../../components/Order/TableOrder';
import useOrdersPanel from '../../../../hooks/useOrdersPanel';
import style from './style.module.scss';

function Page() {
  const [status, setStatus] = useState(2);
  const { orders } = useOrdersPanel(status);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

  const filterOrder = date1 || date2 || orderId ? orders.filter(
    (order) => {
      if (new Date(order.date_order) >= new Date(date1!)
        && new Date(order.date_order) <= new Date(date2!)
        && String(order.id).includes(orderId!)) {
        return order;
      }
      return null;
    },
  ) : orders;

  // (date1 === '' || date2 === '') || String(order.id).includes(orderId)

  return (
    <div className={ style.cont_orders }>
      <div className={ style.filter }>
        <select name="status" id="status" onChange={ ({ target }) => setStatus(Number(target.value)) }>
          <option value="2">Pagamento Aprovado</option>
          <option value="1">Pedido Realizado</option>
        </select>
        <Input
          text="Número de pedido"
          placeholder="#0000"
          msgError="Número de pedido"
          onChange={ ({ target }) => setOrderId(target.value) }
        />
        <Input
          type="datetime-local"
          text="Data de"
          onChange={ ({ target }) => setDate1(target.value) }
        />
        <Input
          type="datetime-local"
          text="Até à data"
          onChange={ ({ target }) => setDate2(target.value) }
        />
      </div>
      <TableOrder orders={ filterOrder } />
    </div>
  );
}

export default Page;
