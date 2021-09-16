import React from 'react';
import style from './styleSearchBar.module.scss';
import Svg from '../../assets/Svg';

type Props = {
  setSearchopen: Function
  searchopen: boolean
}

function SearchBar({ setSearchopen, searchopen }: Props) {
  function openSearchBar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSearchopen(!searchopen);
  }

  return (
    <>
      { !searchopen && (
        <div className={ style.searchBar }>
          <a
            href="/"
            onClick={ openSearchBar }
            aria-label="Pesquisar Produos"
          >
            <Svg icoName="search" />
          </a>
        </div>
      ) }
    </>
  );
}

export default SearchBar;
