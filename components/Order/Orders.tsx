import React, { useState, useEffect, useCallback } from 'react';
import { api2 } from '../../service/api';
import style from './style.module.scss';

type TPropsOrders = {
  execFunction: Function;
  token: string;
};

function Orders({ execFunction, token }: TPropsOrders) {
  const [orders, setOrders] = useState<[]>([]);
  const orderIdOpen = useCallback((orderId: string) => {
    execFunction!(orderId);
  }, []);

  useEffect(() => {
    async function getOrders() {
      const { data } = await api2.get('/order', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOrders(data.orders);
    }
    getOrders();
  }, []);

  return (
    <table className={ style.table } cellSpacing="0">
      <thead>
        <tr>
          <th>Pedido</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { orders.map(({ id, date_order, status }) => (
          <tr key={ id } onClick={ () => orderIdOpen(id) }>
            <td>{ id }</td>
            <td>
              { new Date(date_order)
                .toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }) }
            </td>
            <td>{ status }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Orders;
