import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import cx from 'classnames';
import style from './style.module.scss';
import Bar from '../../SearchBar/Bar';
import Svg from '../../../assets/Svg';
import { actionLogOut } from '../../../redux/redux-actions';

interface IUser {
  user: {
    logged: boolean;
    bagItems: Array<Object>;
  }
}

const MenuMobile = function MenuMobile() {
  const dipatch = useDispatch();
  const { logged, bagItems } = useSelector(({ user }: IUser) => user);

  const [dropMnMobile, setDropMnMobile] = useState(false);

  function handleClickLogOutUser() {
    if (logged) {
      dipatch(actionLogOut());
    }
  }

  function openMenu(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setDropMnMobile(!dropMnMobile);
  }

  return (
    <div className={ cx(style.mobile, {
      [style.contb]: bagItems.length && !dropMnMobile,
    }) }
    >
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
            { logged && (
              <li>
                <Link href="/account">
                  <a aria-label="Conta">
                    <Svg icoName="setting" />
                    Conta
                  </a>
                </Link>
              </li>
            ) }
            { logged && (
              <li>
                <Link href="/favorite">
                  <a aria-label="Favoritos">
                    <Svg icoName="healt" />
                    Favoritos
                  </a>
                </Link>
              </li>
            ) }
            <li>
              <Link href="/bag">
                <a className={ cx({ [style.contb]: bagItems.length }) }>
                  <Svg icoName="bag" />
                  Sacola
                </a>
              </Link>
            </li>
            <li>
              { logged ? (
                <a
                  aria-label="Logout"
                  aria-hidden="true"
                  onClick={ handleClickLogOutUser }
                >
                  <Svg icoName="singout" />
                  Logout
                </a>
              ) : (
                <Link href="/login-register">
                  <a aria-label="Login">
                    <Svg icoName="singin" />
                    Login
                  </a>
                </Link>
              ) }
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
};

export default MenuMobile;
