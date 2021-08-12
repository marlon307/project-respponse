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
            <Link href="/help">
              <span>
                <Image src={ icoHelp } />
                Ajuda
              </span>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <span>
                <Image src={ icoSetting } />
                Conta
              </span>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <span>
                <Image src={ icoFav } />
                Favoritos
              </span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span>
                <Image src={ icoLogin } />
                Entrar
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
