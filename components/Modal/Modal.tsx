import React, { ReactNode } from 'react';
import style from './style.module.scss';

type Props = {
  children: ReactNode
}

function Modal({ children }: Props) {
  return (
    <div className={ style.modal }>
      { children }
    </div>
  );
}

export default Modal;
