import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import cx from 'classnames';
import style from './style.module.scss';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';
import ContentModal from '../../Modal/ContentModal';
import Loading from '../../Loading';
import { actionLogOut } from '../../../redux/redux-actions';
import type { ReduxUser } from '../../../types/typesUserRedux';

const LoginRegister = dynamic(
  () => import('../../../pages/login-register'),
  { loading: () => <Loading /> },
);

type PropsMNUser = {
  setMenuDropdown: Function;
}

const MenuUser = function MenuUser({ setMenuDropdown }: PropsMNUser) {
  const dipatch = useDispatch();
  const { logged } = useSelector(({ user }: ReduxUser) => user);

  const [outsideClick, setTutsideClicl] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (outsideClick) {
      setTutsideClicl(false);
      setMenuDropdown(null);
    }
  });

  function clickUser(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTutsideClicl(!outsideClick);
    setMenuDropdown('mnuser');
  }

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!logged) {
      setOpenLogin(true);
    } else {
      dipatch(actionLogOut());
    }
  }
  // Fechar modal apos login
  useEffect(() => {
    if (logged) {
      setOpenLogin(false);
    }
  }, [logged]);

  return (
    <div className={ style.menuUser }>
      <a href="/account" aria-label="Usuário" onClick={ (e) => clickUser(e) }>
        <Svg icoName="user" />
      </a>
      <div
        ref={ ref }
        className={
          cx(style.dropmenu, {
            [style.drop]: outsideClick,
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
            { logged ? (
              <a
                href="/login-register"
                aria-label="Logout"
                onClick={ openModalLogin }
              >
                <Svg icoName="singout" />
                Logout
              </a>
            ) : (
              <a
                href="/login-register"
                aria-label="Login"
                onClick={ openModalLogin }
              >
                <Svg icoName="singin" />
                Login
              </a>
            ) }
          </li>
        </ul>
      </div>
      <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
        { openLogin && <LoginRegister /> }
      </ContentModal>
    </div>
  );
};

export default MenuUser;
