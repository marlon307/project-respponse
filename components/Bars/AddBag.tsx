import React from 'react';
import style from './styles/addbag.module.scss';

function AddBag() {
  return (
    <button
      className={ style.addbag }
      type="button"
    >
      Adicionar a sacola
    </button>
  );
}

export default AddBag;
