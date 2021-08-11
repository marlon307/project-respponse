import React, { useState, useRef } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import icoUser from '../../../assets/img/u_user.svg';
import icoLogin from '../../../assets/img/signin.svg';
import icoFav from '../../../assets/img/heart.svg';
import icoSetting from '../../../assets/img/setting.svg';
import icoHelp from '../../../assets/img/u_question-circle.svg';
import style from './styles/styleMenuUser.module.scss';
import useOutsideClick from '../../../hooks/useOutSide';

function MenuUser() {
  const [teste, setTeste] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => teste && setTeste(false));
  return (
    <div className={ style.menuUser }>
      <Image src={ icoUser } alt="Menu Usuário" onClick={ () => setTeste(!teste) } />
      <div
        ref={ ref }
        className={
          cx(style.dropmenu, {
            [style.drop]: teste,
          })
        }
      >
        <span className={ style.set } />
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
