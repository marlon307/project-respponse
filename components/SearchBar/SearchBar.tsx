import React from 'react';
import Image from 'next/image';
import inconSearch from '../../img/u_search.svg';
import style from './styles/styleSearchBar.module.scss';

function SearchBar() {
  return (
    <div className={ style.searchBar }>
      <Image src={ inconSearch } />
    </div>
  );
}

export default SearchBar;
