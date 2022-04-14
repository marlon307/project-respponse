import React, {
  useState, useRef, useEffect, lazy,
} from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { LOGIN_USER } from '../../../redux/actions';
import Svg from '../../../assets/Svg';
import ContentModal from '../../Modal/ContentModal';
import CustomLink from '../../CustomLink';
import style from './styles/style.module.scss';

const LoginRegister = lazy(() => import('../../../pages/login-register'));

function MenuUser() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector(({ user }) => user);
  const ref = useRef(null);
  const [openLogin, setOpenLogin] = useState(false);

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!logged) {
      setOpenLogin(true);
    } else {
      dispatch(LOGIN_USER(false));
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
          <Link href="/account" passHref>
            <CustomLink
              ariaLabel="Conta"
              className={ style.mnuser }
            >
              <Svg icoName="user" />
            </CustomLink>
          </Link>
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
                <Link href="/login-register" passHref>
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
        <Link href="/login-register" passHref>
          <CustomLink
            ariaLabel="Entrar"
            className={ style.login }
            onClick={ openModalLogin! }
          >
            Entrar
          </CustomLink>
        </Link>
      ) }

      <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
        { openLogin && <LoginRegister /> }
      </ContentModal>
    </div>
  );
}

export default MenuUser;
