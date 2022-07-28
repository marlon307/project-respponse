import React, { useRef } from 'react';
import style from './style.module.scss';

export type IProps = {
  setSearchopen?: Function;
};

function Bar({ setSearchopen }: IProps) {
  const ref = useRef(null);

  return (
    <div ref={ ref } className={ style.bar }>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.7 20.3 18 16.6a9 9 0 1 0-1.4 1.4l3.7 3.7a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" fill="#333" />
      </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="m13.4 12 4.3-4.3a1 1 0 1 0-1.4-1.4L12 10.6 7.7 6.3a1 1 0 0 0-1.4 1.4l4.3 4.3-4.3 4.3a1 1 0 0 0 .3 1.6 1 1 0 0 0 1.1-.2l4.3-4.3 4.3 4.3a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4L13.4 12Z" fill="#707070" />
          </svg>
        </button>
      </div>
    </div>
  );
}

Bar.defaultProps = {
  setSearchopen: undefined,
};

export default Bar;
