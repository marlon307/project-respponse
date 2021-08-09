import React from 'react';
import Image from 'next/image';
import inconSearch from '../../img/u_search.svg';
import style from './styles/styleSearchBar.module.scss';

type Props = {
  setSearchopen: Function
}

function SearchBar({ setSearchopen }: Props) {
  function openSearchBar() {
    setSearchopen(true);
  }

  return (
    <div className={ style.searchBar } onMouseEnter={ openSearchBar }>
      <Image src={ inconSearch } />
    </div>
  );
}

export default SearchBar;
