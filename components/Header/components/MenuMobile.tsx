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
      <a href="/" onClick={ (event) => openMenu(event) }>
        <Svg icoName="menu" />
      </a>
      <div className={ cx(style.dromn, {
        [style.drop]: dropMnMobile,
      }) }
      >
        <div className={ style.dropmobile }>
          <Bar />
          <ul>
            <li>
              <Link href="/help">
                <span>
                  <Svg icoName="question" />
                  Ajuda
                </span>
              </Link>
            </li>
            <li>
              <Link href="/account">
                <span>
                  <Svg icoName="setting" />
                  Conta
                </span>
              </Link>
            </li>
            <li>
              <Link href="/favorite">
                <span>
                  <Svg icoName="healt" />
                  Favoritos
                </span>
              </Link>
            </li>
            <li>
              <Link href="/bag">
                <span>
                  <Svg icoName="bag" />
                  Sacola
                </span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span>
                  <Svg icoName="singin" />
                  Entrar
                </span>
              </Link>
            </li>
          </ul>
          <div className={ style.close }>
            <a
              href="/"
              onClick={
                (event) => openMenu(event)
              }
            >
              <Svg icoName="close" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuMobile;
