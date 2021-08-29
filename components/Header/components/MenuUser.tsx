import React, { useState, useRef } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import style from './styles/styleMenuUser.module.scss';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';

function MenuUser() {
  const [teste, setTeste] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => teste && setTeste(false));

  function clickUser(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTeste(!teste);
  }

  return (
    <div className={ style.menuUser }>
      <a href="/account" onClick={ (e) => clickUser(e) }>
        <Svg icoName="user" />
      </a>
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
              <a aria-label="Ajuda">
                <Svg icoName="question" />
                Ajuda
              </a>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <a aria-label="Conta">
                <Svg icoName="setting" />
                Conta
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <a aria-label="Favoritos">
                <Svg icoName="healt" />
                Favoritos
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a aria-label="Login">
                <Svg icoName="singin" />
                Entrar
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuUser;
