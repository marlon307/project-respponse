import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './style.module.scss';
import Bar from '../SearchBar/Bar';
import SearchBar from '../SearchBar';
import MenuBag from './components/MenuBag';
import MenuUser from './components/MenuUser';
import MenuMobile from './components/MenuMobile';
import { useAppSelector } from '../../redux/hooks';

function Header() {
  const [searchopen, setSearchopen] = useState(false);
  const { logged } = useAppSelector(({ user }) => user);

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
        <Bar setSearchopen={ setSearchopen } />
      </div>
      <div className={ style.container }>
        <nav className={ style.nav }>
          <SearchBar
            searchopen={ searchopen }
            setSearchopen={ setSearchopen }
          />
          { logged && <MenuBag /> }
          <MenuUser />
          <MenuMobile />
        </nav>
      </div>
    </header>
  );
}

export default Header;
