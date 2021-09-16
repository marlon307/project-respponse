import React from 'react';
import cx from 'classnames';
import style from './styleButton.module.scss';

type PBtnAdd = {
  eventBtn: Function,
}

function BtnAdd({ eventBtn }: PBtnAdd) {
  function eventButtonAdd() {
    eventBtn();
  }

  return (
    <button
      className={ cx('button1', style.btnadd) }
      type="button"
      onClick={ eventButtonAdd }
    >
      Adicionar
    </button>
  );
}

export default BtnAdd;
