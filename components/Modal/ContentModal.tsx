import ReactDOM from 'react-dom';

function ContentModal({ children }: any) {
  if (typeof window === 'undefined') return null;

  const getModal = document.getElementById('modal')!;

  return getModal
    ? ReactDOM.createPortal(
      children,
      getModal,
    ) : null;
}

export default ContentModal;
