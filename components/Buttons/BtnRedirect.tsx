import React from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Svg from '../../assets/Svg';
import style from './styleButton.module.scss';

type PBtnR = {
  path: string
}

function BtnRedirect({ path }: PBtnR) {
  return (
    <Link href={ path }>
      <a className={ cx('button1', style.redirect) }>
        <span>Veja Mais</span>
        <Svg icoName="indication" />
      </a>
    </Link>
  );
}

export default BtnRedirect;
