import React from 'react';
import style from './styleMinCardOrder.module.scss';

interface IProps {
  idOrder: string;
  date: string;
  status: string;
}

function MinCardOrder({ idOrder, date, status }: IProps) {
  return (
    <a href="/" className={ style.mincardOrder }>
      <span>{ idOrder }</span>
      <span>{ date }</span>
      <span>{ status }</span>
    </a>
  );
}

export default MinCardOrder;
