import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cx from 'classnames';
import style from './styleHeader.module.scss';
import Logo from '../../assets/img/Logo.svg';
import useWindowSize from '../../hooks/useWindowSize';
import MenuDescktop from './components/MenuDescktop';
import MenuMobile from './components/MenuMobile';
import Bar from '../SearchBar/Bar';

function Header() {
  const [width] = useWindowSize();
  const router = useRouter();
  const [searchopen, setSearchopen] = useState(false);
  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Image
          src={ Logo }
          alt="Respponse"
          onClick={ () => router.push('/') }
        />
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
