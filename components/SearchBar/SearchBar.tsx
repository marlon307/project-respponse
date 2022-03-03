import React from 'react';
import Svg from 'assets/Svg';
import style from './style.module.scss';

type Props = {
  setSearchopen: Function
  searchopen: boolean
}

const SearchBar = function SearchBar({ setSearchopen, searchopen }: Props) {
  function openSearchBar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSearchopen(!searchopen);
  }

  return (
    !searchopen ? (
      <div className={ style.searchBar }>
        <a
          href="/"
          onClick={ openSearchBar }
          aria-label="Pesquisar Produtos"
        >
          <Svg icoName="search" />
        </a>
      </div>
    ) : <div />
  );
};

export default SearchBar;
