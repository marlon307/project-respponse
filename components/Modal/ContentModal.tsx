import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import style from './style.module.scss';

function ContentModal({ children }: any) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;

  useEffect(() => {
    getModal.className = cx(style.modal, {
      [style.open]: children !== false,
    });
    if (children !== false) document.body.style.overflow = 'hidden';
  }, [children]);

  return getModal
    ? ReactDOM.createPortal(
      children !== false && children,
      getModal,
    ) : null;
}

export default ContentModal;
