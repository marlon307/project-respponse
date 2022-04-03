import React, { useState } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import Svg from '../../assets/Svg';
import MenuDescktop from './components/MenuDescktop';

function Header() {
  const [searchopen, setSearchopen] = useState(false);

  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Link href="/">
          <a aria-label="Respponse">
            <Svg icoName="logo" />
          </a>
        </Link>
      </div>
      <div className={ style.container }>
        <MenuDescktop
          setSearchopen={ setSearchopen }
          searchopen={ searchopen }
        />
      </div>
    </header>
  );
}

export default Header;
