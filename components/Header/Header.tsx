import React, { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import style from './styleHeader.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import MenuDescktop from './components/MenuDescktop';
import MenuMobile from './components/MenuMobile';
import Bar from '../SearchBar/Bar';
import useScroll from '../../hooks/useScroll';
import Svg from '../../assets/Svg';

function Header() {
  const [width] = useWindowSize();
  const scrollY = useScroll();

  const [searchopen, setSearchopen] = useState(false);

  return (
    <header className={ cx(style.header, {
      [style.active]: scrollY > 60,
    }) }
    >
      <div className={ style.container }>
        <Link href="/">
          <span>
            <Svg icoName="logo" />
          </span>
        </Link>
      </div>
      <div className={ cx(style.searchdrop, {
        [style.drop]: searchopen,
      }) }
      >
        { width > 750 && (
          <Bar
            setSearchopen={ setSearchopen }
            searchopen={ searchopen }
          />
        ) }
      </div>
      {
        width < 750
          ? <MenuMobile />
          : (
            <MenuDescktop
              setSearchopen={ setSearchopen }
              searchopen={ searchopen }
            />
          )
      }
    </header>
  );
}

export default Header;
