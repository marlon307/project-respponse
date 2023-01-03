'use clinet';

import React from 'react';
import style from './style.module.scss';

interface POrder {
  id: number;
  date_order: Date
  status: string;
}

interface Props {
  orders: POrder[];
  execFunction?: Function
}

function TableOrder({ orders, execFunction }: Props) {
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
        { orders?.map(({ id, date_order, status }) => (
          <tr key={ id } onClick={ () => execFunction!(id) }>
            <td>{ String(id).padStart(6, '0') }</td>
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

export default TableOrder;
