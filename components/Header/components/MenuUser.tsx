import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            <Link href="/help">
              Ajuda
            </Link>
          </li>
          <li>
            <Image src={ icoSetting } />
            <Link href="/account">
              Conta
            </Link>
          </li>
          <li>
            <Image src={ icoFav } />
            <Link href="/favorite">
              Favoritos
            </Link>
          </li>
          <li>
            <Image src={ icoLogin } />
            <Link href="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
