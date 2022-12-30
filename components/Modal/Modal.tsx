import React from 'react';
import style from './style.module.scss';

function Modal() {
  return (
    <dialog
      id="modal-root"
      className={ style.modal }
    />
  );
}

export default Modal;
