import React from 'react';
import Image from 'next/image';
import icoUser from '../../../img/u_user.svg';
import style from './styles/styleMenuUser.module.scss';

function MenuUser() {
  return (
    <div className={ style.menuUser }>
      <Image src={ icoUser } />
    </div>
  );
}

export default MenuUser;
