import React from 'react';
import Image from 'next/image';
import style from './styles/styleHeader.module.scss';
import Logo from '../../img/Logo.svg';
import Menu from '../../img/Menu.svg';

function Header() {
  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Image
          src={ Logo }
          alt="Respponse"
        />
      </div>
      <div className={ style.menu }>
        <Image src={ Menu } alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
