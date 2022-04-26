import React, { useState, Suspense, lazy } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Svg from '../../assets/Svg';
import style from './style.module.scss';
import SearchBar from '../SearchBar';
import MenuBag from './components/MenuBag';
import MenuUser from './components/MenuUser';
import MenuMobile from './components/MenuMobile';
import { useAppSelector } from '../../redux/hooks';

const Bar = lazy(() => import('../SearchBar/Bar'));

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
        <Suspense fallback={ <>...</> }>
          <Bar setSearchopen={ setSearchopen } />
        </Suspense>
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
