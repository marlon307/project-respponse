import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

type PBtnR = {
  path: string;
  titleBtn: string;
}

const BtnRedirect = function BtnRedirect({ path, titleBtn }: PBtnR) {
  return (
    <div className={ cx('button1', style.redirect) }>
      <Link href={ path }>
        <a>{ titleBtn }</a>
      </Link>
      <Svg icoName="indication" />
    </div>
  );
};

export default BtnRedirect;
