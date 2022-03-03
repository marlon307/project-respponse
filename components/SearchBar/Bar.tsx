import React, { useRef } from 'react';
import useOutsideClick from 'hooks/useOutSide';
import Svg from 'assets/Svg';
import style from './style.module.scss';

export type IProps = {
  setSearchopen?: Function;
  searchopen?: boolean;
}

const Bar = function Bar({ setSearchopen, searchopen }: IProps) {
  const ref = useRef(null);
  useOutsideClick(ref, () => searchopen && setSearchopen!(false));

  return (
    <div ref={ ref } className={ style.bar }>
      <Svg icoName="search" />
      <input
        type="text"
        placeholder="Busque aqui"
      />
      <div className={ style.close }>
        <button
          type="button"
          onClick={ () => setSearchopen!(false) }
          aria-label="Fechar barra de pesquisa"
        >
          <Svg
            icoName="close"
          />
        </button>
      </div>
    </div>
  );
};

export default Bar;
