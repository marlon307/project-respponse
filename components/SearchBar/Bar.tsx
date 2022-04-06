import React, { useRef } from 'react';
import style from './style.module.scss';
import Svg from '../../assets/Svg';

export type IProps = {
  setSearchopen?: Function;
  searchopen?: boolean;
};

function Bar({ setSearchopen, searchopen }: IProps) {
  const ref = useRef(null);

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
}

Bar.defaultProps = {
  searchopen: false,
  setSearchopen: undefined,
};

export default Bar;
