import React from 'react';
import Image from 'next/image';
import style from './styles/styleSearchBar.module.scss';
import icoSearch from '../../img/u_search.svg';
import icoClose from '../../img/close.svg';

type Props = {
  setSearchopen: Function
}

function Bar({ setSearchopen }: Props) {
  return (
    <div className={ style.bar }>
      <Image src={ icoSearch } />
      <input
        type="text"
        placeholder="Busque aqui"
      />
      <Image
        src={ icoClose }
        onClick={ () => setSearchopen(false) }
      />
    </div>
  );
}

export default Bar;
