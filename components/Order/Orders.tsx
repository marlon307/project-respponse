import React, { useCallback } from 'react';
import style from './style.module.scss';

type TPropsOrders = {
  execFunction: Function
};

function Orders({ execFunction }: TPropsOrders) {
  const orderIdOpen = useCallback((orderId: string) => {
    execFunction!(orderId);
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
        <tr onClick={ () => orderIdOpen('00003') }>
          <td>0003</td>
          <td>11/04/22</td>
          <td>Pag. Pendente</td>
        </tr>
        <tr onClick={ () => orderIdOpen('00002') }>
          <td>0002</td>
          <td>09/04/22</td>
          <td>Enviado.</td>
        </tr>
        <tr onClick={ () => orderIdOpen('00001') }>
          <td>0001</td>
          <td>26/12/21</td>
          <td>Entregue</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Orders;
