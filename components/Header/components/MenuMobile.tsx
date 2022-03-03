import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import cx from 'classnames';
import Svg from 'assets/Svg';
import { actionLogOut } from 'redux/redux-actions';
import type { ReduxUser } from 'types/typesUserRedux';
import CustomLink from '../../CustomLink';
import Bar from '../../SearchBar/Bar';
import style from './style.module.scss';

const MenuMobile = function MenuMobile() {
  const dipatch = useDispatch();
  const { logged, bagItems } = useSelector(({ user }: ReduxUser) => user);
  const [dropMnMobile, setDropMnMobile] = useState(false);

  function handleClickLogOutUser() {
    setDropMnMobile(!dropMnMobile);
    if (logged) {
      dipatch(actionLogOut());
    }
  }

  function openMenu(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setDropMnMobile(!dropMnMobile);
  }
  function closeMenu() {
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
              <Link href="/help" passHref>
                <CustomLink
                  ariaLabel="Ajuda"
                  onClick={ closeMenu! }
                >
                  <Svg icoName="question" />
                  Ajuda
                </CustomLink>
              </Link>
            </li>
            { logged && (
              <li>
                <Link href="/account" passHref>
                  <CustomLink
                    ariaLabel="Conta"
                    onClick={ closeMenu! }
                  >
                    <Svg icoName="setting" />
                    Conta
                  </CustomLink>
                </Link>
              </li>
            ) }
            { logged && (
              <li>
                <Link href="/favorite" passHref>
                  <CustomLink
                    ariaLabel="Favoritos"
                    onClick={ closeMenu! }
                  >
                    <Svg icoName="healt" />
                    Favoritos
                  </CustomLink>
                </Link>
              </li>
            ) }
            <li>
              <Link
                href="/bag"
                passHref
              >
                <CustomLink
                  className={
                    cx({ [style.contb]: bagItems.length })
                  }
                  ariaLabel="Sacola"
                  onClick={ closeMenu! }
                >
                  <Svg icoName="bag" />
                  Sacola
                </CustomLink>
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
                <Link href="/login-register" passHref>
                  <CustomLink
                    ariaLabel="Login"
                    onClick={ closeMenu! }
                  >
                    <Svg icoName="singin" />
                    Login
                  </CustomLink>
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
