import React from 'react';
import style from './style.module.scss';

type PBtnAdd = {
  eventBtn: Function,
  title?: string
};

function BtnAdd({ eventBtn, title }: PBtnAdd) {
  function eventButtonAdd() {
    eventBtn();
  }

  return (
    <button
      className={ style.btnadd }
      type="button"
      onClick={ eventButtonAdd }
    >
      { title }
    </button>
  );
}

BtnAdd.defaultProps = {
  title: 'Adicionar',
};

export default BtnAdd;
