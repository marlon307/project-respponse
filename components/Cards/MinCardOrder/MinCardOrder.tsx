import React from 'react';
import style from './styleMinCardOrder.module.scss';
import stateModal from '../../Modal/stateModal';

interface IProps {
  idOrder: string;
  date: string;
  status: string;
}

function MinCardOrder({ idOrder, date, status }: IProps) {
  const { openModal, setOpenModal } = stateModal();

  function openOrder(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenModal(!openModal);
  }

  return (
    <a
      href="/order/1"
      className={ style.mincardOrder }
      onClick={ openOrder }
    >
      <span>{ idOrder }</span>
      <span>{ date }</span>
      <span>{ status }</span>
    </a>
  );
}

export default MinCardOrder;
