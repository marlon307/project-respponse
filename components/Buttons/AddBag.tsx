import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import Svg from '../../assets/Svg';

function AddBag() {
  return (
    <button
      className={ cx('button1', style.btn_t2) }
      type="button"
    >
      Adicionar a sacola
      <Svg icoName="bag" />
    </button>
  );
}

export default AddBag;
