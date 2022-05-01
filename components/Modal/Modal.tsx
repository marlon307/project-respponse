import React from 'react';
import style from './style.module.scss';

function Modal() {
  return (
    <div
      id="modal"
      className={ style.modal }
      aria-modal="true"
    />
  );
}

export default Modal;
