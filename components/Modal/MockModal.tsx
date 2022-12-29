import React, {
  useEffect, useRef, Suspense, useState,
} from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import useOutsideClick from '../../hooks/useOutSide';
import style from './style.module.scss';

interface Props {
  children: ReactNode,
  isOpen: boolean;
  openModal: Function;
}

function MockModal({ children, isOpen, openModal }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [dialogMock, setDialogMock] = useState<HTMLDialogElement | null>(null);
  useOutsideClick(modalRef, () => isOpen && openModal(false));

  useEffect(() => {
    const getModal = document.getElementById('modal-mock')! as HTMLDialogElement;
    setDialogMock(getModal);
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialogMock?.showModal();
      document.body.classList.add('hidden');
    }

    return () => {
      if (isOpen) {
        dialogMock?.close();
        document.body.removeAttribute('class');
      }
    };
  }, [isOpen]);

  return dialogMock ? createPortal(
    <div
      ref={ modalRef }
      className={ style.content_modal }
    >
      <Suspense fallback={ <div className="spinner" /> }>
        { children }
      </Suspense>
    </div>,
    dialogMock,
  ) : null;
}

export default MockModal;
