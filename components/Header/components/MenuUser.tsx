import React from 'react';
import Image from 'next/image';
import icoUser from '../../../img/u_user.svg';
import style from './styles/styleMenuUser.module.scss';

function MenuUser() {
  return (
    <div className={ style.menuUser }>
      <Image src={ icoUser } alt="Menu Usuário" />
      <span />
      <div className={ style.dropmenu }>
        <ul>
          <li>Ajuda</li>
          <li>Conta</li>
          <li>Favoritos</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
