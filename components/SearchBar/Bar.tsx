import React, { useRef } from 'react';
import Image from 'next/image';
import style from './styles/styleSearchBar.module.scss';
import icoSearch from '../../assets/img/u_search.svg';
import icoClose from '../../assets/img/close.svg';
import useOutsideClick from '../../hooks/useOutSide';

export interface IProps {
  setSearchopen?: Function;
  searchopen?: boolean;
}

function Bar({ setSearchopen, searchopen }: IProps) {
  const ref = useRef(null);
  useOutsideClick(ref, () => searchopen && setSearchopen!(false));

  return (
    <div ref={ ref } className={ style.bar }>
      <Image src={ icoSearch } />
      <input
        type="text"
        placeholder="Busque aqui"
      />
      <div className={ style.close }>
        <Image
          src={ icoClose }
          onClick={ () => setSearchopen!(false) }
        />
      </div>
    </div>
  );
}

export default Bar;
