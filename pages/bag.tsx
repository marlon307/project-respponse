import React, { useCallback, useState, lazy } from 'react';
import Svg from '../assets/Svg';
import BarBuy from '../components/Bars/BarBuy';
import { SmallCard } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import Checkout from '../components/Bag';
import { useAppSelector } from '../redux/hooks';
import style from '../Sass/style.module.scss';
import HeadSEO from '../components/Head/HeadSEO';

const CardEdit = lazy(() => import('../components/Cards/CardEdit/CardEdit'));
const RenderAdderess = lazy(() => import('../components/Bag/RenderAdderess'));
const Addaddress = lazy(() => import('../components/Add/Address'));
const Addacard = lazy(() => import('../components/Add/Addcard'));

function Bag() {
  const { bagItems } = useAppSelector(({ bag }) => bag);
  const [openModal, setOpenModal] = useState<String>('');
  const [hiddenList, setHiddenList] = useState(false);

  const openModalEdit = useCallback(() => {
    setOpenModal('edit');
  }, []);

  return (
    <>
      <HeadSEO
        title="Sacola e Checkout"
        description="Finalize sua compra"
      />
      <div className={ style.bag }>
        <section className={ style.list }>
          <div className={ style.title }>
            <h1 title="Sacola">
              <Svg icoName="bag" />
              Sacola
            </h1>
            { bagItems.length
              ? (
                <button
                  type="button"
                  aria-label="Ocutar sacola"
                  aria-hidden={ hiddenList }
                  onClick={ () => setHiddenList(!hiddenList) }
                />
              ) : '' }
            { hiddenList && (
              <span>
                Informações da sua compra
                { ' ' }
                (
                { ' ' }
                { bagItems.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { bagItems.length ? bagItems.map((object) => (
              <li key={ object.id + object.color + object.size }>
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ openModalEdit }
                  identifyBag={ object.id + object.color + object.size }
                />
              </li>
            ))
              : <li className={ style.empty }>Sacola Vazia</li> }
          </ul>
        </section>
        <Checkout setOpenModal={ setOpenModal } />
      </div>
      <BarBuy />
      <ContentModal
        openModal={ setOpenModal }
        isOpen={
          openModal === 'edit'
          || openModal === 'address'
          || openModal === 'addaddress'
          || openModal === 'addcard'
        }
      >
        { openModal === 'edit' && <CardEdit /> }
        { openModal === 'address' && <RenderAdderess /> }
        { openModal === 'addaddress' && <Addaddress /> }
        { openModal === 'addcard' && <Addacard /> }
      </ContentModal>
    </>
  );
}

export default Bag;
