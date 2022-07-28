import React from 'react';
import style from './style.module.scss';

type Props = {
  setSearchopen: Function
  searchopen: boolean
};

function SearchBar({ setSearchopen, searchopen }: Props) {
  return (
    !searchopen ? (
      <div className={ style.searchBar }>
        <button
          type="button"
          onClick={ () => setSearchopen(!searchopen) }
          aria-label="Pesquisar Produtos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.7 20.3 18 16.6a9 9 0 1 0-1.4 1.4l3.7 3.7a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#333" />
          </svg>
        </button>
      </div>
    ) : null
  );
}

export default SearchBar;
