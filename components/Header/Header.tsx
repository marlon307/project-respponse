import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '../SearchBar';
import Bar from '../SearchBar/Bar';
// import MenuBag from './components/MenuBag';
import MenuUser from './components/MenuUser';
import MenuMobile from './components/MenuMobile';
import useLogin from '../../hooks/useLogin';
import style from './style.module.scss';

function Header() {
  const { loggedOut } = useLogin();
  const [searchopen, setSearchopen] = useState(false);

  return (
    <header className={ style.header }>
      <div className={ style.container }>
        <Link href="/">
          <a
            aria-label="Respponse"
            className={ style.logo }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="40" viewBox="0 0 250 40" fill="none">
              <path d="M1.5 11.2C.6 11.2.2 10.8.2 10a28.4 28.4 0 0 1 1.6-4.5 7.7 7.7 0 0 1 2-2.8A86.9 86.9 0 0 1 26 .1a18.7 18.7 0 0 1 5.6 1.2c1.3.5 2.2 1.2 2.7 2 1.5 2.3 2.3 4.3 2.3 5.8 0 1.7-1.2 3.4-3.7 5l-2.3 1.5-5.4 3.1a21 21 0 0 0 7.4 7.6c1 .7 2.1.6 3.5-.2a2 2 0 0 1 1.1-.4c.4 0 .7.1 1 .5.3.2.5.6.5 1 0 1.6-1 3.4-3.2 5.3-1.5 1.4-3 2-4.2 2-1 0-3.2-1.5-6.6-4.6a58.2 58.2 0 0 1-7.2-8c-.5-.6-.7-1.2-.7-1.7s.1-1 .4-1.3l.9-1.2c.6-.5 1.5-1.1 2.7-1.7l2.8-1.8 1.8-1.8c1.2-1.3 1.8-2.5 1.8-3.5 0-.7-.2-1.3-.6-1.7-.7-.8-1.4-1.3-2-1.3l-4 .3-2.4 4.5A70 70 0 0 0 12 26.6c-.4 1.8-2.1 2.7-5 2.7-2.5 0-4-.6-4.7-1.8l-.3-1.2.6-1.5 1.2-2.3 1.7-3.2 2.2-3.7 2.4-4 2.6-4c-4.7 1-8 2.2-10.1 3.4a2 2 0 0 1-1 .2Zm65.3 2.3c.6 0 .9.4.9 1.1a5 5 0 0 1-.5 2c-.3.7-.8 1.4-1.4 2A32 32 0 0 1 61 23a42.5 42.5 0 0 1-7.5 4.4c-3.2 1.3-6.3 2-9.2 2-2.3 0-4.2-.6-6-1.8-1.7-1.3-2.6-2.9-2.6-4.7 0-3 1.5-5.7 4.5-8.3 2.5-2.3 5.5-4 9-5.2 2.1-.8 4-1.2 5.4-1.2 1.2 0 2.2.3 3 1 .9.6 1.3 1.5 1.3 2.6 0 1.8-1.3 3.8-4 5.9l-1.1.9-.7.5c-1.4 1-3.4 2-6 3.2.8.5 1.5.7 2.3.7.7 0 1.3 0 1.9-.2l2-.8a32.7 32.7 0 0 0 4.8-2.7c1.9-1.3 3.5-2.5 5-3.8.6-.7 1.6-1.3 2.7-1.7a3 3 0 0 1 1-.2Zm-21.9 5.8 1-.5 1-.6c2.7-1.6 4.2-2.6 4.6-3 .4-.3.6-.6.6-.7 0-.2 0-.4-.2-.6l-.3-.5c-.3-.4-.6-.6-1-.6a4 4 0 0 0-1.2.3 7.4 7.4 0 0 0-3.6 2.5c-.7.9-1 1.6-1 2.3l.1 1.4ZM75.5 8.5l.2 1.1c0 .5-.2 1-.7 1.5l1.3 1.3c.6.5 1.1 1 1.6 1.7 1.2 1.4 1.8 2.7 1.8 4 0 1-.5 2-1.7 3.2l-1 1c1.3-.5 3-1.6 4.9-3.2l2.3-2c1.3-1.2 2.2-1.9 2.7-2 .4-.3.9-.3 1.2-.3.4 0 .8 0 1 .3.5.1.6.5.6 1 0 .3 0 .8-.2 1.2a7.1 7.1 0 0 1-1.6 2.6 95 95 0 0 1-4 3.8 26.5 26.5 0 0 1-4 3c-3 1.7-6.2 2.6-9.8 2.6-2 0-3.7-.6-5.2-1.6a6 6 0 0 1-1.4-1.4l-.5-1.1.3-.9.7-1a11.5 11.5 0 0 1 2.1-1.8c1-.5 1.6-.8 2.1-.8s.8 0 1 .2c.3 0 .5.2.7.4l1.1.5c.6 0 .9-.3.9-1.1 0-.7-.4-1.6-1.1-2.6l-1-1.3-.7-1.1-1.6 1.5-2 1.7c-1.3 1.3-2.5 1.8-3.6 1.8-.7 0-1-.9-1-2.3v-.8c0-.4.5-1 1.2-1.6a24 24 0 0 1 2.5-1.8l2.1-1.5c0-1.5.8-2.8 2.3-4 1.5-1 3-1.6 4.4-1.6 1 0 1.7.5 2 1.4Zm18 15 1.7-.8 7.9-4.3.8-.5c.9-.5 1.3-1 1.2-1.3-.1-.7-.5-1-1-.9a15.1 15.1 0 0 0-3.9 1.4c-1.5.6-2.7 1.2-3.9 1.9l-7 4.2-1.5 4-2.4 7.2c-.7 2.2-1.5 3.7-2.3 4.5-.4.4-.8.6-1.3.6-1.3 0-2.3-.4-3-1.4-.7-.9-1-2-1-3.4s.1-2.8.5-4.2a31.9 31.9 0 0 1 6.4-12A32 32 0 0 1 95.8 4c.7-.4 1.4-.6 2-.6.5 0 .9 0 1.2.4.2.2.4.5.4 1a18.3 18.3 0 0 1-1.2 3.4l-1.4 2.2-1.7 2.5a1 1 0 0 0-.2.6c0 .3.2.4.5.4s1-.2 1.9-.7l3.2-1.5c2.7-1.3 5.4-2 8-2 1.2 0 2.5.7 3.7 2A6.4 6.4 0 0 1 114 16c0 2.3-.9 4.1-2.7 5.4l-2.5 1.7a86 86 0 0 1-2.7 1.8l-2.9 1.6a17.4 17.4 0 0 1-7.4 2.6 8 8 0 0 1-3.8-.7c-.8-.4-1.2-1-1.2-1.9 0-1.1.9-2 2.6-3Zm26.9 0 1.8-.8 7.8-4.3.9-.5c.8-.5 1.2-1 1.1-1.3-.1-.7-.5-1-1-.9a15.2 15.2 0 0 0-3.9 1.4 39 39 0 0 0-3.8 1.9l-7 4.2a58 58 0 0 0-1.6 4l-2.4 7.2c-.7 2.2-1.5 3.7-2.2 4.5-.4.4-.9.6-1.4.6-1.2 0-2.2-.4-3-1.4-.6-.9-1-2-1-3.4s.2-2.8.5-4.2c.4-1.3.8-2.7 1.4-4a32 32 0 0 1 5-8A32 32 0 0 1 122.8 4c.8-.4 1.4-.6 2-.6.5 0 1 0 1.2.4.3.2.4.5.4 1l-.3 1.4-1 2-1.3 2.2-1.6 2.5a1 1 0 0 0-.2.6c0 .3.1.4.4.4.4 0 1-.2 2-.7l3.1-1.5c2.8-1.3 5.4-2 8-2 1.3 0 2.5.7 3.7 2A6.4 6.4 0 0 1 141 16c0 2.3-1 4.1-2.8 5.4l-2.5 1.7L133 25l-2.8 1.6a17.4 17.4 0 0 1-7.5 2.6 8 8 0 0 1-3.8-.7c-.8-.4-1.2-1-1.2-1.9 0-1.1.9-2 2.7-3Zm41-7.5c0 .7.6 1 1.8 1 .9 0 2-.4 3.5-1.3l1.6-.9c.5-.3 1-.4 1.3-.4.3 0 .6 0 .8.3.3.3.4.6.4 1s-.2.9-.4 1.5l-1.1 1.7a16.7 16.7 0 0 1-3.6 3.4c-1.6 1-3.1 1.5-4.5 1.5s-2.5-.2-3.4-.7a15 15 0 0 1-.8-.6 20.1 20.1 0 0 1-6.1 4.7 16.6 16.6 0 0 1-7.5 2.2c-2.2 0-4-.9-5.3-2.7a8 8 0 0 1-1.5-4.6c0-2.2 1-4.3 3.3-6.3a22.3 22.3 0 0 1 9-5.2c2.7-.8 5.1-1.3 7.2-1.3 1 0 1.8.2 2.6.6.7.4 1.3.8 1.6 1.2a4.6 4.6 0 0 1 1.2 4.2l-.1.7Zm-16.2 3.9c0 .7 0 1 .3 1.3.6.3 1.3.4 2 .3l1.9-.7a17 17 0 0 0 4-2.6l-.3-1.4c0-1 .5-2 1.3-3-1 0-2.5.5-4.3 1.6-2 1.1-3.5 2.3-4.5 3.5-.3.4-.4.8-.4 1Zm44.2-2.3c0 1.3.3 2 1 2 1.7 0 4-1.3 6.7-3.8l.5-.4c1.1-.8 2-1.2 2.6-1.2.7 0 1.1.1 1.3.4.2.2.3.5.3 1 0 1-.5 2-1.5 3.2a25.3 25.3 0 0 1-6 5.4c-3 2-5.7 3-8.1 3-1.7 0-2.7-1-3.1-3l-.3-1.4c-.1-1-.2-1.7-.4-1.8-.1-.2-.4-.1-.9 0l-1.5.7-2 1.3-6.4 4.5c-1.4.9-2.3 1.3-2.8 1.3s-1 0-1.4-.3c-.5-.2-.8-.5-1.2-.8-.7-.7-1-1.4-1-2.1 0-4.3.8-8 2.6-11A10 10 0 0 1 172 10c.9-.4 1.8-.7 2.8-.7 1.8 0 2.7.7 2.7 2 0 .7-.4 2-1.3 3.7l-.6 1.2-.6 1.4c.1.5.3.7.6.7s.7-.3 1.3-.7l3.7-2.9 1.8-1.3c2-1.5 3.6-2.2 4.6-2.2.5 0 1 .2 1.5.7.8.8 1.2 1.5 1.2 2l-.1.8v.9l-.2 1v1Zm20.8-9c.2.2.2.6.2 1 0 .5-.2 1-.6 1.5l1.3 1.3 1.5 1.7c1.3 1.4 1.9 2.7 1.9 4 0 1-.6 2-1.7 3.2-.4.4-.7.8-1.1 1 1.3-.5 3-1.6 4.9-3.2l2.3-2c1.4-1.2 2.3-1.9 2.7-2 .5-.3.9-.3 1.3-.3.3 0 .7 0 1 .3.4.1.6.5.6 1l-.2 1.2-.5 1.1a7 7 0 0 1-1.2 1.5 94 94 0 0 1-4 3.8 26.5 26.5 0 0 1-4 3c-3 1.7-6.2 2.6-9.8 2.6-2 0-3.7-.6-5.2-1.6a6 6 0 0 1-1.4-1.4c-.3-.5-.4-.9-.4-1.1 0-.3 0-.6.2-.9l.7-1a11.5 11.5 0 0 1 2.2-1.8c.9-.5 1.6-.8 2-.8.5 0 .8 0 1 .2.3 0 .5.2.7.4l1.2.5c.5 0 .8-.3.8-1.1 0-.7-.4-1.6-1-2.6l-1-1.3-.8-1.1-1.6 1.5-1.9 1.7c-1.3 1.3-2.6 1.8-3.7 1.8-.7 0-1-.9-1-2.3v-.8c.1-.4.5-1 1.3-1.6a24 24 0 0 1 2.4-1.8l2.1-1.5c0-1.5.8-2.8 2.4-4 1.5-1 3-1.6 4.4-1.6 1 0 1.6.5 2 1.4Zm38.4 4.9c.7 0 1 .4 1 1.1a5 5 0 0 1-.5 2c-.3.7-.8 1.4-1.4 2a31.8 31.8 0 0 1-4.9 4.3 42.4 42.4 0 0 1-7.5 4.4c-3.1 1.3-6.2 2-9.1 2-2.3 0-4.3-.6-6-1.8-1.7-1.3-2.6-2.9-2.6-4.7 0-3 1.5-5.7 4.5-8.3 2.5-2.3 5.5-4 9-5.2 2.1-.8 4-1.2 5.4-1.2 1.2 0 2.2.3 3 1 .9.6 1.3 1.5 1.3 2.6 0 1.8-1.3 3.8-4 5.9l-1.1.9-.8.5c-1.3 1-3.3 2-6 3.2.9.5 1.6.7 2.3.7.8 0 1.4 0 2-.2l2-.8a32.6 32.6 0 0 0 4.8-2.7c1.9-1.3 3.5-2.5 4.9-3.8.7-.7 1.6-1.3 2.8-1.7a3 3 0 0 1 1-.2Zm-21.8 5.8 1-.5 1-.6c2.7-1.6 4.2-2.6 4.6-3l.5-.7v-.6l-.4-.5c-.3-.4-.7-.6-1-.6a4 4 0 0 0-1.2.3 7.5 7.5 0 0 0-3.6 2.5c-.7.9-1 1.6-1 2.3v1.4Z" fill="#333" />
            </svg>
          </a>
        </Link>
      </div>
      <div className={ style.searchdrop } data-active={ searchopen }>
        <Bar setSearchopen={ setSearchopen } />
      </div>
      <div className={ style.container }>
        <nav className={ style.nav }>
          <SearchBar
            searchopen={ searchopen }
            setSearchopen={ setSearchopen }
          />
          { !loggedOut && (
            <Link href="/bag">
              <a aria-label="Sacola" className={ style.bag } data-bag={ Boolean(1) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
                </svg>
              </a>
            </Link>
          ) }
          <MenuUser data={ !loggedOut } />
          <MenuMobile data={ !loggedOut } />
        </nav>
      </div>
    </header>
  );
}

export default Header;
