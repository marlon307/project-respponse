import React from 'react';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './styleButton.module.scss';

type Props = {
  textBtn: string;
  icoName: string;
  action: Function;
}

function BtnIco({ textBtn, icoName, action }: Props) {
  return (
    <button
      type="button"
      className={ cx('button1', style.btn_t1) }
      onClick={ () => action() }
    >
      { textBtn }
      <Svg icoName={ icoName } />
    </button>
  );
}

export default BtnIco;
