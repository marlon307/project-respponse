import ReactDOM from 'react-dom';

function ContentModal({ props: { children } }) {
  const getModal = document.getElementById('modal')!;

  return getModal ? ReactDOM.createPortal(
    { children },
    getModal,
  ) : null;
}

export default ContentModal;
