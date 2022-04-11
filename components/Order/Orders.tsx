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
    <section className={ style.section }>
      <table className={ style.table } cellSpacing="0">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Loja</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={ () => orderIdOpen('00003') }>
            <td>0003</td>
            <td>01/01/22</td>
            <td>Pag. Pedente</td>
          </tr>
          <tr onClick={ () => orderIdOpen('00002') }>
            <td>0002</td>
            <td>01/01/22</td>
            <td>Enviado.</td>
          </tr>
          <tr onClick={ () => orderIdOpen('00001') }>
            <td>0001</td>
            <td>01/01/22</td>
            <td>Entregue</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Orders;
