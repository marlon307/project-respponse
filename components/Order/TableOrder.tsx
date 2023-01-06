'use client';

import React, { useState } from 'react';
import ContentModal from '../Modal/ContentModal';
import style from './style.module.scss';

function TableOrder({ orders, ConponeteRender }: PropsOrder) {
  const [orderID, setOrderID] = useState(0);

  return (
    <>
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
            <tr key={ id } onClick={ () => setOrderID(id) }>
              <td>{ String(id).padStart(6, '0') }</td>
              <td>
                { new Date(date_order)
                  .toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  }) }
              </td>
              <td>{ status }</td>
            </tr>
          )) }
        </tbody>
      </table>
      <ContentModal isOpen={ orderID > 0 } openModal={ setOrderID }>
        { orderID > 0 && <ConponeteRender orderid={ orderID } /> }
      </ContentModal>
    </>
  );
}

export default TableOrder;
