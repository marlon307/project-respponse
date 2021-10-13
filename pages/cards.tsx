import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CardPay } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import style from './style.module.scss';
import Loading from '../components/Loading/Loading';
import BtnAdd from '../components/Buttons/BtnAdd';

const AddCard = dynamic(() => import('../components/Add/add-card'),
  { loading: () => <Loading /> });

interface IUser {
  user: {
    logged: boolean;
  }
}

function cards() {
  const { logged } = useSelector(({ user }: IUser) => user);
  const router = useRouter();

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  const [openModal, setOpenModal] = useState(false);
  function openModalCard() {
    setOpenModal(true);
  }

  return (
    <section className={ style.section }>
      <BtnAdd eventBtn={ openModalCard } />
      <div className={ style.contentoption }>
        <CardPay name="Nome Teste..." cardValidate="01/29" endNumber="... ... 1234" flag="MasterCard" />
        <CardPay name="Nome Teste..." cardValidate="01/24" endNumber="... ... 1234" flag="Visa" />
        <CardPay name="Nome Teste..." cardValidate="01/28" endNumber="... ... 1234" flag="Elo" />
      </div>
      <ContentModal
        isOpen={ openModal }
        openModal={ setOpenModal }
      >
        { openModal && <AddCard /> }
      </ContentModal>
    </section>
  );
}

export default cards;
