import React from 'react';
import style from './styles/drag.module.scss';

type Props = {
  children: any
}

function DragItens({ children }: Props) {
  return (
    <div className={ style.drag }>
      { children }
    </div>
  );
}

export default DragItens;
