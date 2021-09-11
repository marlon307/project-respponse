import React from 'react';
import style from './styleMinCardOrder.module.scss';

interface IProps {
  idOrder: string;
  date: string;
  status: string;
  openOrderId: Function;
}

function MinCardOrder({
  idOrder, openOrderId, date, status,
}: IProps) {
  function orderIdOpen(event: { preventDefault: () => void; }) {
    event.preventDefault();
    openOrderId();
  }

  return (
    <>
      <a
        href="/order/1"
        className={ style.mincardOrder }
        onClick={ orderIdOpen }
      >
        <span>{ idOrder }</span>
        <span>{ date }</span>
        <span>{ status }</span>
      </a>
    </>
  );
}

export default MinCardOrder;
