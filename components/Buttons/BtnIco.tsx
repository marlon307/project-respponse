import React from 'react';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './styleButton.module.scss';

type PBtnIco = {
  textBtn: string;
  icoName: string;
  action: Function;
  actionLiberate: boolean;
}

function BtnIco({
  textBtn, icoName, action, actionLiberate,
}: PBtnIco) {
  function handleClick() {
    if (!actionLiberate) {
      action();
    }
  }

  return (
    <button
      type="button"
      className={ cx('button1', style.btn_t1) }
      onClick={ handleClick }
    >
      { textBtn }
      { actionLiberate ? ' ...' : <Svg icoName={ icoName } /> }
    </button>
  );
}

export default BtnIco;
