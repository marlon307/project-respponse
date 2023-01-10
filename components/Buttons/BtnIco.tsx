import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import Svg from 'assets/Svg';
import style from './style.module.scss';

export interface PBtnIco extends ButtonHTMLAttributes<HTMLButtonElement> {
  textBtn: string;
  icoName?: string | undefined;
  action?: Function | undefined;
  actionLiberate: boolean;
}

function BtnIco({
  textBtn, icoName, actionLiberate, ...props
}: PBtnIco) {
  return (
    <button
      className={ style.btn_t1 }
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
