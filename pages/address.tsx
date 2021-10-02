import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { CardAdderess } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import style from './sass/styleAccount.module.scss';
import Loading from '../components/Loading/Loading';
import BtnAdd from '../components/Buttons/BtnAdd';

const Addaderess = dynamic(() => import('../components/Add/add-address'),
  { loading: () => <Loading /> });

function address() {
  const [openModal, setOpenModal] = useState(false);

  function openModalAddAdress() {
    setOpenModal(true);
  }

  return (
    <section className={ style.section }>
      <BtnAdd eventBtn={ openModalAddAdress } />
      <div className={ style.contentoption }>
        <div className={ style.optionadd }>
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
        <div className={ style.optionadd }>
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
      </div>
      <ContentModal
        isOpen={ openModal }
        openModal={ setOpenModal }
      >
        { openModal && <Addaderess /> }
      </ContentModal>
    </section>
  );
}

export default address;
