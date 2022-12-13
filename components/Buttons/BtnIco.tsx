import React from 'react';
import style from './style.module.scss';
import Svg from '../../assets/Svg';

export interface PBtnIco {
  textBtn: string;
  icoName?: string | undefined;
  action?: Function | undefined;
  actionLiberate: boolean;
}

function BtnIco({
  textBtn, icoName, action = () => { }, actionLiberate, ...props
}: PBtnIco) {
  function handleClick() {
    if (!actionLiberate) {
      action!();
    }
  }

  return (
    <button
      className={ style.btn_t1 }
      onClick={ handleClick }
      disabled={ actionLiberate }
      type="submit"
      { ...props }
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

export default BtnIco;
