import React from 'react';
import Image from 'next/image';
import inconSearch from '../../assets/img/u_search.svg';
import style from './styleSearchBar.module.scss';

type Props = {
  setSearchopen: Function
  searchopen: boolean
}

function SearchBar({ setSearchopen, searchopen }: Props) {
  function openSearchBar() {
    setSearchopen(!searchopen);
  }

  return (
    !searchopen && (
      <div className={ style.searchBar }>
        <Image
          src={ inconSearch }
          onClick={ openSearchBar }
        />
      </div>
    )
  );
}

export default SearchBar;
