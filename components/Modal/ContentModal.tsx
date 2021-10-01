import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useOutsideClick from '../../hooks/useOutSide';
import style from './style.module.scss';

type PModal = {
  children: any,
  isOpen: boolean;
  openModal: Function;
}

function ContentModal({ children, isOpen, openModal }: PModal) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    if (isOpen) openModal(false);
  });

  useEffect(() => {
    if (isOpen) {
      getModal.classList.add(style.open);
      document.body.classList.add('hidden');
    } else {
      getModal.classList.remove(style.open);
      document.body.removeAttribute('class');
    }
  }, [children]);

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

  return getModal
    ? ReactDOM.createPortal(
      contetModal(),
      getModal,
    ) : null;
}

export default ContentModal;
