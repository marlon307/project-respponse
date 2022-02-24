import React from 'react';
import style from './style.module.scss';

type PMinCardOrder = {
  idOrder: string;
  date: string;
  status: string;
  openOrderId: Function;
}

const MinCardOrder = function MinCardOrder({
  idOrder, openOrderId, date, status,
}: PMinCardOrder) {
  function orderIdOpen(event: { preventDefault: () => void; }) {
    event.preventDefault();
    openOrderId(idOrder);
  }

  return (
    <a
      href="/order/1"
      className={ style.mincardOrder }
      onClick={ orderIdOpen }
    >
      <span>{ idOrder }</span>
      <span>{ date }</span>
      <span>{ status }</span>
    </a>
  );
};

export default MinCardOrder;
