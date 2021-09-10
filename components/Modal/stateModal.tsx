import { useState } from 'react';

// interface IProps {
//   openModal: boolean
//   setOpenModal: () => void;
// }

function stateModal() {
  const [openModal, setOpenModal] = useState(false);

  return {
    openModal,
    setOpenModal,
    // contentModal,
  };
}

export default stateModal;
