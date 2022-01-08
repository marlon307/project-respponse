import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CardAdderess } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import style from './style.module.scss';
import Loading from '../components/Loading';
import BtnAdd from '../components/Buttons/BtnAdd';
import type { ReduxUser } from '../types/typesUserRedux';

const Addaderess = dynamic(
  () => import('../components/Add/add-address'),
  { loading: () => <Loading /> },
);

function address() {
  const { logged } = useSelector(({ user }: ReduxUser) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  const [openModal, setOpenModal] = useState(false);
  const openModalAddAdress = useCallback(() => {
    setOpenModal(true);
  }, []);

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
            removable
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
            removable
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
