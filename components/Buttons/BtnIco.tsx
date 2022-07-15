import React from 'react';
import style from './style.module.scss';
import Svg from '../../assets/Svg';

export type PBtnIco = {
  textBtn: string;
  icoName?: string;
  action: Function;
  actionLiberate: boolean;
};

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
      className={ style.btn_t1 }
      onClick={ handleClick }
      disabled={ actionLiberate }
    >
      { actionLiberate ? (
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : (
        <>
          { textBtn }
          <Svg icoName={ icoName! } />
        </>
      ) }
    </button>
  );
}

BtnIco.defaultProps = {
  icoName: undefined,
};

export default BtnIco;
