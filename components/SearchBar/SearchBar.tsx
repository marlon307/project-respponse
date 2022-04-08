import React from 'react';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

type Props = {
  setSearchopen: Function
  searchopen: boolean
};

function SearchBar({ setSearchopen, searchopen }: Props) {
  function openSearchBar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSearchopen(!searchopen);
  }

  return (
    !searchopen ? (
      <div className={ style.searchBar }>
        <button
          type="button"
          onClick={ openSearchBar }
          aria-label="Pesquisar Produtos"
        >
          <Svg icoName="search" />
        </button>
      </div>
    ) : null
  );
}

export default SearchBar;
