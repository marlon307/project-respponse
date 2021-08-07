import React from 'react';
import Image from 'next/image';
import inconSearch from '../../img/u_search.svg';

function SearchBar() {
  return (
    <div className="searchBar">
      <Image src={ inconSearch } />
    </div>
  );
}

export default SearchBar;
