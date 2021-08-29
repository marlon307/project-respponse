import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import style from './styles/styleMenuMobile.module.scss';
import Bar from '../../SearchBar/Bar';
import Svg from '../../../assets/Svg';

function MenuMobile() {
  const [dropMnMobile, setDropMnMobile] = useState(false);

  function openMenu(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setDropMnMobile(!dropMnMobile);
  }

  return (
    <div className={ style.mobile }>
      <a
        href="/"
        onClick={ (event) => openMenu(event) }
        aria-label="Menu"
      >
        <Svg icoName="menu" />
      </a>
      <div className={ cx(style.dromn, {
        [style.drop]: dropMnMobile,
      }) }
      >
        <nav className={ style.dropmobile }>
          <Bar />
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
              <Link href="/bag">
                <a>
                  <Svg icoName="bag" />
                  Sacola
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
          <div className={ style.close }>
            <a
              href="/"
              onClick={
                (event) => openMenu(event)
              }
              aria-label="Fechar Menu"
            >
              <Svg icoName="close" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;
