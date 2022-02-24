import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import style from './style.module.scss';
import Help from './help';
import Svg from '../assets/Svg';
import Loading from '../components/Loading';
import type { ReduxUser } from '../types/typesUserRedux';
import ContentModal from '../components/Modal/ContentModal';
import BtnAdd from '../components/Buttons/BtnAdd';

const Usercfg = dynamic(() => import('../components/UserCfg'), { loading: () => <Loading /> });
const Order = dynamic(() => import('../components/Order/orders'), { loading: () => <Loading /> });
const OrderId = dynamic(() => import('../components/Order'), { loading: () => <Loading /> });
const Cards = dynamic(() => import('../components/Cards/Cards'), { loading: () => <Loading /> });
const Address = dynamic(() => import('../components/Cards/Address'), { loading: () => <Loading /> });
const AddCard = dynamic(() => import('../components/Add/add-card'), { loading: () => <Loading /> });
const Addaderess = dynamic(() => import('../components/Add/add-address'), { loading: () => <Loading /> });

function account() {
  const { logged } = useSelector(({ user }: ReduxUser) => user);
  const router = useRouter();
  const [dropOption, setDropOption] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const functionOpenModal = useCallback((type) => {
    setOpenModal(true);
    setTypeModal(type);
  }, []);

  const openOrderId = useCallback(() => {
    // (id) =>
    setOpenModal(true);
    setTypeModal('order');
  }, []);

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged]);

  return (
    <>
      <div className={ style.account }>
        <div className={ style.container } id="user">
          <a
            href="#user"
            onClick={ () => setDropOption('usercfg') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'usercfg',
            }) }
          >
            <Svg icoName="user" />
            <span>Configurações do Usuário</span>
          </a>
          <div className={ style.dropcontainer }>
            <Usercfg />
          </div>
        </div>
        <div className={ style.container } id="orders">
          <a
            href="#orders"
            onClick={ () => setDropOption('order') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'order',
            }) }
          >
            <Svg icoName="list" />
            <span>Pedidos</span>
          </a>
          <div className={ style.dropcontainer }>
            <Order execFunction={ openOrderId } />
          </div>
        </div>
        <div className={ style.container } id="address">
          <a
            href="#address"
            onClick={ () => setDropOption('address') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'address',
            }) }
          >
            <Svg icoName="map" />
            <span>Endereços</span>
          </a>
          <div className={ style.dropcontainer }>
            <BtnAdd eventBtn={ () => functionOpenModal('address') } />
            <div className={ style.contentoption }>
              <Address />
            </div>
          </div>
        </div>
        <div className={ style.container } id="cards">
          <a
            href="#cards"
            onClick={ () => setDropOption('cards') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'cards',
            }) }
          >
            <Svg icoName="card" />
            <span>Cartões</span>
          </a>
          <div className={ style.dropcontainer }>
            <section className={ style.section }>
              <BtnAdd eventBtn={ () => functionOpenModal('cards') } />
              <div className={ style.contentoption }>
                <Cards />
              </div>
            </section>
          </div>
        </div>
        <div className={ style.container } id="help">
          <a
            href="#help"
            onClick={ () => setDropOption('help') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'help',
            }) }
          >
            <Svg icoName="question" />
            <span>Ajuda</span>
          </a>
          <div className={ style.dropcontainer }>
            <Help />
          </div>
        </div>
      </div>
      <ContentModal
        isOpen={ openModal }
        openModal={ setOpenModal }
      >
        { (openModal && typeModal === 'order') && <OrderId /> }
        { (openModal && typeModal === 'cards') && <AddCard /> }
        { (openModal && typeModal === 'address') && <Addaderess /> }
      </ContentModal>
    </>
  );
}

export default account;
