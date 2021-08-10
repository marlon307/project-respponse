import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import icoUser from '../../../img/u_user.svg';
import icoLogin from '../../../img/signin.svg';
import icoFav from '../../../img/heart.svg';
import icoSetting from '../../../img/setting.svg';
import icoHelp from '../../../img/u_question-circle.svg';
import style from './styles/styleMenuUser.module.scss';

function MenuUser() {
  const [teste, setTeste] = useState(false);
  return (
    <div className={ style.menuUser }>
      <Image src={ icoUser } alt="Menu Usuário" onClick={ () => setTeste(!teste) } />
      <div className={
        cx(style.dropmenu, {
          [style.drop]: teste,
        })
      }
      >
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
