import React from 'react';
import Image from 'next/image';
import iconBag from '../../../img/u_shopping-bag.svg';
import style from './styles/styleMenuBag.module.scss';

function MenuBag() {
  return (
    <div className={ style.bag }>
      <Image src={ iconBag } />
    </div>
  );
}

export default MenuBag;
