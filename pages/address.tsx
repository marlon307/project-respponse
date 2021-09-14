import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { CardAdderess } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import styles from './styles/styleAccount.module.scss';
import Loading from '../components/Loading/Loading';
import BtnAdd from '../components/Buttons/BtnAdd';

const Addaderess = dynamic(() => import('./add-adress'),
  { loading: () => <Loading /> });

function address() {
  const [openModal, setOpenModal] = useState(false);

  function openModalAddAdress() {
    setOpenModal(true);
  }

  return (
    <section className={ styles.section }>
      <BtnAdd eventBtn={ openModalAddAdress } />
      <div className={ styles.contentoption }>
        <CardAdderess
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
        />
        <CardAdderess
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
        />
      </div>
      <ContentModal isOpen={ openModal } openModal={ setOpenModal }>
        <Addaderess />
      </ContentModal>
    </section>
  );
}

export default address;
