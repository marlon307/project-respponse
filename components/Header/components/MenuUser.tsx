import React, { useState, useEffect, lazy } from 'react';
import Link from 'next/link';
import router from 'next/router';
import ContentModal from '../../Modal/ContentModal';
import CustomLink from '../../CustomLink';
import style from './styles/style.module.scss';
import useLogin, { logOutUser } from '../../../hooks/useLogin';

// const ContentModal = lazy(() => import('../../Modal/ContentModal'));
const LoginRegister = lazy(() => import('../../../pages/login-register'));

function MenuUser({ data }: any) {
  const { mutate } = useLogin();
  const [openLogin, setOpenLogin] = useState(false);

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!data) {
      setOpenLogin(true);
    } else {
      logOutUser();
      mutate();
      router.push('/');
    }
  }
  // Fechar modal apos login
  useEffect(() => {
    if (data) {
      setOpenLogin(false);
    }
  }, [data]);

  return (
    <div className={ style.usermneu }>
      { data ? (
        <>
          <Link href="/account" passHref className={ style.mnuser } aria-label="Conta">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15.7 12.7a6 6 0 1 0-7.4 0A10 10 0 0 0 2 21a1 1 0 1 0 2 .2 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .9 1 1 0 0 0 1-1.1 10 10 0 0 0-6.3-8.2ZM12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="#333" /></svg>
          </Link>
          <div className={ style.dropmenu }>
            <span className={ style.set } />
            <ul>
              <li>
                <Link href="/help" aria-label="Ajuda">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m11.3 15.3-.1.1-.1.2v.8a.9.9 0 0 0 .5.5 1 1 0 0 0 .8 0 .9.9 0 0 0 .5-.5l.1-.4a1 1 0 0 0-1.7-.7ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.7 1A1 1 0 1 1 12 11a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.2A3 3 0 0 0 12 7Z" fill="#333" />
                  </svg>
                  Ajuda
                </Link>
              </li>
              <li>
                <Link href="/account" aria-label="Conta">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.9 12.7a1 1 0 0 1 0-1.4l1.3-1.4a1 1 0 0 0 .1-1.2l-2-3.4a1 1 0 0 0-1-.5l-2 .4a1 1 0 0 1-1.1-.7l-.6-1.8a1 1 0 0 0-1-.7h-4a1 1 0 0 0-1 .7l-.5 1.8a1 1 0 0 1-1.2.7L5 4.8a1 1 0 0 0-1 .5L2 8.7a1 1 0 0 0 .1 1.2l1.3 1.4a1 1 0 0 1 0 1.4L2 14a1 1 0 0 0-.1 1.2l2 3.4a1 1 0 0 0 1 .5l2-.4a1 1 0 0 1 1.1.7l.6 1.8a1 1 0 0 0 1 .7h4a1 1 0 0 0 1-.7l.6-1.8a1 1 0 0 1 1.1-.7l1.9.4a1 1 0 0 0 1-.5l2-3.4a1 1 0 0 0 0-1.2l-1.4-1.4ZM18.4 14l.8.9-1.3 2.2-1.1-.2a3 3 0 0 0-3.5 2l-.4 1.1h-2.5l-.4-1.1a3 3 0 0 0-3.4-2l-1.2.2L4 14.9l.8-1a3 3 0 0 0 0-4L4 9.2l1.3-2.2 1.1.2a3 3 0 0 0 3.5-2l.4-1.1h2.5l.4 1.1a3 3 0 0 0 3.4 2L18 7l1.3 2.2-.8 1a3 3 0 0 0 0 3.9Zm-6.8-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#333" />
                  </svg>
                  Conta
                </Link>
              </li>
              <li>
                <Link href="/favorite" aria-label="Favoritos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.2 5a6.3 6.3 0 0 0-8.2-.6 6.3 6.3 0 0 0-8.2 9.4l6.3 6.3a2.8 2.8 0 0 0 3.8 0l6.3-6.3a6.3 6.3 0 0 0 0-8.8Zm-1.4 7.5-6.3 6.2a.8.8 0 0 1-1 0l-6.2-6.3a4.3 4.3 0 0 1 0-6 4.3 4.3 0 0 1 6 0 1 1 0 0 0 1.4 0 4.3 4.3 0 0 1 6 6Z" fill="#333" />
                  </svg>
                  Favoritos
                </Link>
              </li>
              <li>
                <Link href="/login-register" passHref onClick={ openModalLogin! } aria-label="Sair">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 12a1 1 0 0 0-1-1h-7.6l2.3-2.3a1 1 0 0 0-1.4-1.4l-4 4-.2.3a1 1 0 0 0 0 .8l.2.3 4 4a1 1 0 1 0 1.4-1.4L11.4 13H19a1 1 0 0 0 1-1ZM17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3Z" fill="#333" />
                  </svg>
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link
          className={ style.login }
          href="/login-register"
          onClick={ openModalLogin! }
          passHref
          aria-label="Entrar"
        >
          Entrar
        </Link>
      ) }
      <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
        { openLogin && <LoginRegister /> }
      </ContentModal>
    </div>
  );
}

export default MenuUser;
