import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import style from './style.module.scss';
import Svg from '../../assets/Svg';

type pModal = {
  children: any,
  isOpen: boolean;
  openModal: Function;
}

function ContentModal({ children, isOpen, openModal }: pModal) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;

  useEffect(() => {
    getModal.className = cx(style.modal, {
      [style.open]: isOpen,
    });

    if (isOpen) {
      document.body.className = 'hidden';
    } else {
      document.body.removeAttribute('class');
    }
  }, [children]);

  function contetModal() {
    return (
      isOpen && (
        <div
          className="content"
          onClick={ () => openModal(false) }
          onKeyPress={ () => { } }
          role="button"
          tabIndex={ 0 }
        >
          <button
            type="button"
            className={ style.close }
            onClick={ () => openModal(false) }
          >
            <Svg icoName="close" />
          </button>
          { children }
        </div>
      )
    );
  }

  return getModal
    ? ReactDOM.createPortal(
      contetModal(),
      getModal,
    ) : null;
}

export default ContentModal;
