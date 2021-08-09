import React from 'react';
import Image from 'next/image';
import icoUser from '../../../img/u_user.svg';
import icoLogin from '../../../img/signin.svg';
import icoFav from '../../../img/heart.svg';
import icoSetting from '../../../img/setting.svg';
import icoHelp from '../../../img/u_question-circle.svg';
import style from './styles/styleMenuUser.module.scss';

function MenuUser() {
  return (
    <div className={ style.menuUser }>
      <Image src={ icoUser } alt="Menu Usuário" />
      <span className={ style.set } />
      <div className={ style.dropmenu }>
        <ul>
          <li>
            <Image src={ icoHelp } />
            Ajuda
          </li>
          <li>
            <Image src={ icoSetting } />
            Conta
          </li>
          <li>
            <Image src={ icoFav } />
            Favoritos
          </li>
          <li>
            <Image src={ icoLogin } />
            Login
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
