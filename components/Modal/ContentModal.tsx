import React, {
  useEffect, useRef, Suspense,
} from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import useOutsideClick from 'hooks/useOutSide';
import style from './style.module.scss';

interface Props {
  children: ReactNode,
  isOpen: boolean;
  openModal: Function;
}

function ContentModal({ children, isOpen, openModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const getModal = ((isOpen && children) ? document.getElementById('modal-root')! : null) as HTMLDialogElement;
  useOutsideClick(modalRef, () => isOpen && openModal(false));

  useEffect(() => {
    if (isOpen) {
      getModal.showModal();
      document.body.classList.add('hidden');
    }

    return () => {
      if (isOpen) {
        getModal.close();
        document.body.removeAttribute('class');
      }
    };
  }, [isOpen]);

  return isOpen ? createPortal(
    <div
      ref={ modalRef }
      className={ style.content_modal }
    >
      <Suspense fallback={ <div className="spinner" /> }>
        { children }
      </Suspense>
    </div>,
    getModal!,
  ) : null;
}

export default ContentModal;
