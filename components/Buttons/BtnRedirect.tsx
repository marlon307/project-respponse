import React from 'react';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './styleButton.module.scss';

function BtnRedirect() {
  return (
    <div className={ cx('button1', style.redirect) }>
      <span>Veja Mais</span>
      <Svg icoName="indication" />
    </div>
  );
}

export default BtnRedirect;
