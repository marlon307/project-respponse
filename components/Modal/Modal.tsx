import React from 'react';
import style from './style.module.scss';

function Modal() {
  return (
    <>
      <div
        id="modal-root"
        className={ style.modal }
      />
      <div
        id="modal-mock"
        className={ style.modal }
      />
    </>
  );
}

export default Modal;
