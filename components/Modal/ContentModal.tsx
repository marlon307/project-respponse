import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
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
        <>
          <button
            type="button"
            className={ style.close }
            onClick={ () => openModal(!isOpen) }
          >
            <Svg icoName="close" />
          </button>
          <div className={ style.content_modal }>
            { children }
          </div>
        </>
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
