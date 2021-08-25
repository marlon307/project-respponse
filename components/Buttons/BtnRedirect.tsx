import React from 'react';
import Svg from '../../assets/Svg';
import style from './styleButton.module.scss';

function BtnRedirect() {
  return (
    <div className={ style.redirect }>
      <span>Veja Mais</span>
      <Svg icoName="indication" />
    </div>
  );
}

export default BtnRedirect;
