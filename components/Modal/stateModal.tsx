import { useState } from 'react';

function stateModal() {
  const [openModal, setOpenModal] = useState(false);

  return {
    openModal,
    setOpenModal,
  };
}

export default stateModal;
