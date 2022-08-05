import React, { useEffect, useRef, Suspense } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutSide';
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

    return () => {
      if (children && isOpen) {
        getModal.classList.remove(style.open);
        document.body.removeAttribute('class');
      }
    };
  }, [children, getModal.classList, isOpen]);

  return children && isOpen && createPortal(
    <div
      ref={ modalRef }
      className={ style.content_modal }
    >
      <Suspense fallback={ <div className="spinner" /> }>
        { children }
      </Suspense>
    </div>,
    getModal,
  );
}

export default ContentModal;
