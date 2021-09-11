import React from 'react';
// { ReactNode }
import cx from 'classnames';
import style from './style.module.scss';
import stateModal from './stateModal';

function Modal() {
  const { openModal } = stateModal();

  return (
    <div
      id="modal"
      className={
        cx(
          style.modal,
          { [style.open]: openModal },
        )
      }
    />
  );
}

export default Modal;
