import React from 'react';
import Image from 'next/image';
import Menu from '../../../assets/img/Menu.svg';
import style from './styles/styleMenuMobile.module.scss';

function MenuMobile() {
  return (
    <div className={ style.mobile }>
      <Image src={ Menu } alt="Menu" />
    </div>
  );
}

export default MenuMobile;
