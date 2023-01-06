'use client';

import React, { useState, lazy } from 'react';
import { Input } from '../../../../components/ComponentsForm';
import TableOrder from '../../../../components/Order/TableOrder';
import useOrdersPanel from '../../../../hooks/useOrdersPanel';
import style from './style.module.scss';

const OrderId = lazy(() => import('../../../../components/Order/OrderIdPanel'));

function Page() {
  const [status, setStatus] = useState(2);
  const { orders } = useOrdersPanel(status);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const filterOrder = startDate || endDate || orderId ? orders.filter(
    (order) => {
      if (String(order.id).includes(orderId!)) {
        return order;
      }
      if (new Date(startDate!) <= new Date(order.date_order)
        && new Date(endDate!) <= new Date(order.date_order) && (startDate || endDate)) {
        return order;
      }
      return null;
    },
  ) : orders;

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
          onChange={ ({ target }) => setStartDate(target.value) }
        />
        <Input
          type="datetime-local"
          text="Até à data"
          onChange={ ({ target }) => setEndDate(target.value) }
        />
      </div>
      <TableOrder orders={ filterOrder } ConponeteRender={ OrderId } />
    </div>
  );
}

export default Page;
