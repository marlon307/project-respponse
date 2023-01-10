import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import useLogin, { logOutUser } from 'hooks/useLogin';
import style from './styles/style.module.scss';

function MenuMobile({ data }: any) {
  const { mutate } = useLogin();
  const [dropMnMobile, setDropMnMobile] = useState(false);

  function handleClickLogOutUser() {
    setDropMnMobile(!dropMnMobile);
    if (data) {
      logOutUser();
      mutate();
      redirect('/');
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
    <div className={ style.mobile }>
      { data ? (
        <button
          type="button"
          aria-label="Menu"
          onClick={ openMenu }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 13.5H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z" fill="#333" />
          </svg>
        </button>
      ) : (
        <Link className={ style.login } aria-label="Entrar" href="/login/login-register" passHref>
          Entrar
        </Link>
      ) }
      <div className={ style.dropmn } data-active={ dropMnMobile }>
        <nav className={ style.dropmobile }>
          <ul>
            <li>
              <Link href="/help" passHref onClick={ closeMenu! } aria-label="Ajuda">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="m11.3 15.3-.1.1-.1.2v.8a.9.9 0 0 0 .5.5 1 1 0 0 0 .8 0 .9.9 0 0 0 .5-.5l.1-.4a1 1 0 0 0-1.7-.7ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.7 1A1 1 0 1 1 12 11a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.2A3 3 0 0 0 12 7Z" fill="#333" />
                </svg>
                Ajuda
              </Link>
            </li>
            { data && (
              <>
                <li>
                  <Link href="/account" passHref onClick={ closeMenu! } aria-label="Conta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19.9 12.7a1 1 0 0 1 0-1.4l1.3-1.4a1 1 0 0 0 .1-1.2l-2-3.4a1 1 0 0 0-1-.5l-2 .4a1 1 0 0 1-1.1-.7l-.6-1.8a1 1 0 0 0-1-.7h-4a1 1 0 0 0-1 .7l-.5 1.8a1 1 0 0 1-1.2.7L5 4.8a1 1 0 0 0-1 .5L2 8.7a1 1 0 0 0 .1 1.2l1.3 1.4a1 1 0 0 1 0 1.4L2 14a1 1 0 0 0-.1 1.2l2 3.4a1 1 0 0 0 1 .5l2-.4a1 1 0 0 1 1.1.7l.6 1.8a1 1 0 0 0 1 .7h4a1 1 0 0 0 1-.7l.6-1.8a1 1 0 0 1 1.1-.7l1.9.4a1 1 0 0 0 1-.5l2-3.4a1 1 0 0 0 0-1.2l-1.4-1.4ZM18.4 14l.8.9-1.3 2.2-1.1-.2a3 3 0 0 0-3.5 2l-.4 1.1h-2.5l-.4-1.1a3 3 0 0 0-3.4-2l-1.2.2L4 14.9l.8-1a3 3 0 0 0 0-4L4 9.2l1.3-2.2 1.1.2a3 3 0 0 0 3.5-2l.4-1.1h2.5l.4 1.1a3 3 0 0 0 3.4 2L18 7l1.3 2.2-.8 1a3 3 0 0 0 0 3.9Zm-6.8-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#333" />
                    </svg>
                    Conta
                  </Link>
                </li>
                <li>
                  <Link href="/favorite" passHref onClick={ closeMenu! } aria-label="Favoritos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.2 5a6.3 6.3 0 0 0-8.2-.6 6.3 6.3 0 0 0-8.2 9.4l6.3 6.3a2.8 2.8 0 0 0 3.8 0l6.3-6.3a6.3 6.3 0 0 0 0-8.8Zm-1.4 7.5-6.3 6.2a.8.8 0 0 1-1 0l-6.2-6.3a4.3 4.3 0 0 1 0-6 4.3 4.3 0 0 1 6 0 1 1 0 0 0 1.4 0 4.3 4.3 0 0 1 6 6Z" fill="#333" />
                    </svg>
                    Favoritos
                  </Link>
                </li>
              </>
            ) }
            <li>
              { data ? (
                <Link href="/" passHref onClick={ handleClickLogOutUser! } aria-label="Sair">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12a1 1 0 0 0-1-1h-7.6l2.3-2.3a1 1 0 0 0-1.4-1.4l-4 4-.2.3a1 1 0 0 0 0 .8l.2.3 4 4a1 1 0 1 0 1.4-1.4L11.4 13H19a1 1 0 0 0 1-1ZM17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3Z" fill="#333" />
                  </svg>
                  Sair
                </Link>
              ) : (
                <Link href="/login/login-register" passHref onClick={ closeMenu! } aria-label="Login">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12a1 1 0 0 0 1 1h7.6l-2.3 2.3a1 1 0 1 0 1.4 1.4l4-4 .2-.3a1 1 0 0 0 0-.8 1 1 0 0 0-.2-.3l-4-4a1 1 0 1 0-1.4 1.4l2.3 2.3H5a1 1 0 0 0-1 1ZM17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" fill="#333" />
                  </svg>
                  Login
                </Link>
              ) }
            </li>
          </ul>
          <button
            type="button"
            aria-label="Menu"
            onClick={ openMenu }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="m13.4 12 4.3-4.3a1 1 0 1 0-1.4-1.4L12 10.6 7.7 6.3a1 1 0 0 0-1.4 1.4l4.3 4.3-4.3 4.3a1 1 0 0 0 .3 1.6 1 1 0 0 0 1.1-.2l4.3-4.3 4.3 4.3a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4L13.4 12Z" fill="#707070" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MenuMobile;
