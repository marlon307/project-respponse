import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutSide';
// import useOutsideClick from 'hooks/useOutSide';
import style from './style.module.scss';

type PModal = {
  children: any,
  isOpen: boolean;
  openModal: Function;
};

function ContentModal({ children, isOpen, openModal }: PModal) {
  const modalRef = useRef<HTMLDivElement>(null);
  const getModal = children && isOpen && document.getElementById('modal');

  useOutsideClick(modalRef, () => isOpen && openModal(false));

  useEffect(() => {
    if (isOpen) {
      getModal.classList.add(style.open);
      document.body.classList.add('hidden');
    }
    // else if (children) {
    //   getModal.classList.remove(style.open);
    //   document.body.removeAttribute('class');
    // }

    return () => {
      if (children && isOpen) {
        getModal.classList.remove(style.open);
        document.body.removeAttribute('class');
      }
    };
  }, [children, getModal.classList, isOpen]);

  function contetModal() {
    return (
      isOpen && (
        <div
          ref={ modalRef }
          className={ style.content_modal }
        >
          { children }
        </div>
      )
    );
  }

  return children && isOpen && createPortal(
    contetModal(),
    getModal,
  );
}

export default ContentModal;
