import React from 'react';
import Image from 'next/image';
import style from './styles/styleHeader.module.scss';
import Logo from '../../img/Logo.svg';
import useWindowSize from '../../hooks/useWindowSize';
import MenuDescktop from './components/MenuDescktop';
import MenuMobile from './components/MenuMobile';

function Header() {
  const [width] = useWindowSize();

  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Image
          src={ Logo }
          alt="Respponse"
        />
      </div>
      <div className={ style.menu }>
        { width < 1024
          ? <MenuMobile />
          : <MenuDescktop /> }
      </div>
    </header>
  );
}

export default Header;
