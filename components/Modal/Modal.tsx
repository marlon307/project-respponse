import React from 'react';
// { ReactNode }
import cx from 'classnames';
import style from './style.module.scss';
import stateModal from './stateModal';

function Modal() {
  const { openModal } = stateModal();

  return (
    <div className={
      cx(
        style.modal,
        { [style.open]: openModal },
      )
    }
    >
      value
    </div>
  );
}

export default Modal;
