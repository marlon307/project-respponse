import React from 'react';
import style from './styleButton.module.scss';

function BtnAdd() {
  return (
    <button className={ style.btnadd } type="button">
      Adicionar
    </button>
  );
}

export default BtnAdd;
