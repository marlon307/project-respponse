import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { LOGIN_USER } from '../../../redux/actions';
import CustomLink from '../../CustomLink';
import Svg from '../../../assets/Svg';
import style from './styles/style.module.scss';

function MenuMobile() {
  const dipatch = useAppDispatch();
  const { user, bag } = useAppSelector((states) => states);
  const { bagItems } = bag;
  const { logged } = user;
  const [dropMnMobile, setDropMnMobile] = useState(false);

  function handleClickLogOutUser() {
    setDropMnMobile(!dropMnMobile);
    if (logged) {
      dipatch(LOGIN_USER(false));
    }
  }

  function openMenu(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setDropMnMobile(!dropMnMobile);
  }

  function closeMenu() {
    setDropMnMobile(!dropMnMobile);
  }

  useEffect(() => {
    if (dropMnMobile) {
      document.body.classList.add('hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [dropMnMobile]);

  return (
    <div className={ cx(style.mobile, {
      [style.contb]: bagItems.length && !dropMnMobile,
    }) }
    >
      { logged ? (
        <button
          type="button"
          aria-label="Menu"
          onClick={ openMenu }
        >
          <Svg icoName="menu" />
        </button>
      ) : (
        <Link href="/login-register" passHref>
          <a aria-label="Entrar" className={ style.login }>
            Entrar
          </a>
        </Link>
      ) }

      <div className={ cx(style.dromn, {
        [style.drop]: dropMnMobile,
      }) }
      >
        <nav className={ style.dropmobile }>
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
              <>
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
              </>
            ) }
            <li>
              { logged ? (
                <Link href="/" passHref>
                  <CustomLink
                    ariaLabel="Logout"
                    onClick={ handleClickLogOutUser! }
                  >
                    <Svg icoName="singout" />
                    Logout
                  </CustomLink>
                </Link>
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
          <button
            type="button"
            aria-label="Menu"
            onClick={ openMenu }
          >
            <Svg icoName="close" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;
