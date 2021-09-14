import React from 'react';
import style from './styleButton.module.scss';

type TProps = {
  eventBtn: Function,
}

function BtnAdd({ eventBtn }: TProps) {
  function eventButtonAdd() {
    eventBtn();
  }

  return (
    <button
      className={ style.btnadd }
      type="button"
      onClick={ eventButtonAdd }
    >
      Adicionar
    </button>
  );
}

export default BtnAdd;
