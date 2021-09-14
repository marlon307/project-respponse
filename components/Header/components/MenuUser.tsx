import React, { useState, useRef } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import style from './styles/styleMenuUser.module.scss';
import useOutsideClick from '../../../hooks/useOutSide';
import Svg from '../../../assets/Svg';
import ContentModal from '../../Modal/ContentModal';
import LoginRegister from '../../../pages/login-register';

function MenuUser() {
  const [outsideClick, setTutsideClicl] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => outsideClick && setTutsideClicl(false));

  function clickUser(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTutsideClicl(!outsideClick);
  }

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setOpenLogin(true);
  }

  return (
    <div className={ style.menuUser }>
      <a href="/account" onClick={ (e) => clickUser(e) }>
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
            <a
              href="/login-register"
              aria-label="Login"
              onClick={ openModalLogin }
            >
              <Svg icoName="singin" />
              Login
            </a>
          </li>
        </ul>
      </div>
      <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
        { openLogin && <LoginRegister /> }
      </ContentModal>
    </div>
  );
}

export default MenuUser;
