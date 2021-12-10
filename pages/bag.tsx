import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { SmallCard } from '../components/Cards';
import style from './style.module.scss';
import BarBuy from '../components/Bars/BarBuy';
import Svg from '../assets/Svg';
import ContentModal from '../components/Modal/ContentModal';
import Loading from '../components/Loading/Loading';
import mockBag from '../service/mockBag';
import Checkout from '../components/Bag';

const CardEdit = dynamic(import('../components/Cards/CardEdit/CardEdit'), {
  loading: () => <Loading />,
});

const RenderAdderess = dynamic(import('../components/Bag/RenderAdderess'), {
  loading: () => <Loading />,
});

const Addaddress = dynamic(import('../components/Add/add-address'), {
  loading: () => <Loading />,
});

const Addacard = dynamic(import('../components/Add/add-card'), {
  loading: () => <Loading />,
});

function bag() {
  const [openModal, setOpenModal] = useState<String>('');

  const openModalEdit = useCallback(() => {
    setOpenModal('edit');
  }, []);

  return (
    <>
      <div className={ style.bag }>
        <section className={ style.list }>
          <h1 className={ style.title } title="Sacola">
            <Svg icoName="bag" />
            Sacola
          </h1>
          <ul>
            { mockBag.map((object) => (
              <li key={ object.id }>
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ openModalEdit }
                />
              </li>
            )) }
          </ul>
        </section>
        <Checkout setOpenModal={ setOpenModal } />
      </div>
      <BarBuy />
      <ContentModal
        isOpen={
          openModal === 'edit'
          || openModal === 'address'
          || openModal === 'addaddress'
          || openModal === 'addcard'
        }
        openModal={ setOpenModal }
      >
        { openModal === 'edit' && <CardEdit /> }
        { openModal === 'address' && <RenderAdderess /> }
        { openModal === 'addaddress' && <Addaddress /> }
        { openModal === 'addcard' && <Addacard /> }
      </ContentModal>
    </>
  );
}

export default bag;
