import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './style.module.scss';
import MenuDescktop from './components/MenuDescktop';
import Bar from '../SearchBar/Bar';

function Header() {
  const [searchopen, setSearchopen] = useState(false);

  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Link href="/">
          <a
            aria-label="Respponse"
            className={ style.logo }
          >
            <Svg icoName="logo" />
          </a>
        </Link>
      </div>
      <div className={ cx(style.searchdrop, {
        [style.drop]: searchopen,
      }) }
      >
        <Bar
          setSearchopen={ setSearchopen }
        />
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
