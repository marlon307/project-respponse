import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { ACTION_LOGIN_USER } from '../../../redux/actions';
// import Loading from '../../Loading';
// import ContentModal from '../../Modal/ContentModal';
import Svg from '../../../assets/Svg';
import ContentModal from '../../Modal/ContentModal';
import CustomLink from '../../CustomLink';
import style from './styles/style.module.scss';

const LoginRegister = dynamic(
  () => import('../../../pages/login-register'),
  { loading: () => <div>sdsd</div> },
);

function MenuUser() {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const { logged } = useAppSelector(({ user }) => user);

  const [openLogin, setOpenLogin] = useState(false);
  const [openMnUser, setOpenMnUser] = useState(false);

  function clickUser(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setOpenMnUser(!openMnUser);
  }

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!logged) {
      setOpenLogin(true);
    } else {
      dispatch(ACTION_LOGIN_USER(false));
    }
  }
  // Fechar modal apos login
  useEffect(() => {
    if (logged) {
      setOpenLogin(false);
    }
  }, [logged]);

  return (
    <div className={ style.usermneu }>
      { logged ? (
        <>
          <a href="/account" className={ style.mnuser } aria-label="Usuário" onClick={ clickUser }>
            <Svg icoName="user" />
          </a>
          <div
            ref={ ref }
            className={ style.dropmenu }
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
                <Link href="/help" passHref>
                  <CustomLink
                    ariaLabel="Logout"
                    onClick={ openModalLogin! }
                  >
                    <Svg icoName="singout" />
                    Logout
                  </CustomLink>
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <a href="/account" className={ style.login } aria-label="Usuário" onClick={ openModalLogin }>
          Entrar
        </a>
      ) }

      <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
        { openLogin && <LoginRegister /> }
      </ContentModal>
    </div>
  );
}

export default MenuUser;
