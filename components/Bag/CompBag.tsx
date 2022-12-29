'use client';

import React, {
  useCallback, useState, lazy, useEffect,
} from 'react';
import BarBuy from '../Bars/BarBuy';
import { SmallCard } from '../Cards';
import ContentModal from '../Modal/ContentModal';
import Checkout from '.';
import { api2 } from '../../service/api';
import type { TypeAddBagInfos, Shipping } from '../../@types/bag';
import style from '../../Sass/style.module.scss';
import MockModal from '../Modal/MockModal';

const RenderAdderess = lazy(() => import('./RenderAdderess'));
const Addaddress = lazy(() => import('../Add/Address'));
const Addacard = lazy(() => import('../Add/Addcard'));
const CardEdit = lazy(() => import('../Cards/CardEditbag/CardEditbag'));

interface Props {
  props: {
    list_b: TypeAddBagInfos[];
    main_add: ITAddress;
  };
}

function ContentBag({ props }: Props) {
  const [openModal, setOpenModal] = useState<any>({ modal: '' });
  const [hiddenList, setHiddenList] = useState(false);
  const [listBag, setStateBag] = useState<TypeAddBagInfos[]>(props.list_b);
  const [listCarries, setListCarries] = useState<[]>([]);
  const [shipping, setShipping] = useState<Shipping>({ price: 0 });

  const setBagAddres = (add: ITAddress) => {
    setOpenModal('');
    props.main_add = add;
  };

  const deleteBagItem = useCallback(async (identify: TypeAddBagInfos) => {
    const { data } = await api2.delete('/bag', {
      data: {
        product_option: identify.opt_id,
        size: identify.size,
      },
    }).catch((err) => ({ data: err }));

    if (data.status === 200) {
      listBag.splice(listBag.indexOf(identify), 1);
      setStateBag([...listBag]);
    }
  }, [listBag]);

  const openEditItemBagModal = useCallback((identify: TypeAddBagInfos) => {
    setOpenModal({ ...identify, modal: 'editbag' });
  }, []);

  function closeEdit(identify: TypeAddBagInfos[]) {
    setStateBag(identify);
    setOpenModal('');
  }

  useEffect(() => {
    async function getCarries() {
      if (props.main_add?.zipcode) {
        const { data } = await api2.post('/calc', {
          zipcode: props.main_add?.zipcode,
        });
        setListCarries(data.carriers);
        // Se a transpotadora tiver selecionada vai atualizar o preço do Frete e Valor total
        if (shipping.price) {
          const newValue = data.carriers.find((carrier: Shipping) => carrier.id === shipping.id);
          setShipping(newValue ?? { price: 0 });
        }
      }
    }
    getCarries();
  }, [props.main_add, listBag]);

  return (
    <>
      <div className={ style.bag }>
        <section className={ style.list }>
          <div className={ style.title }>
            <h1 title="Sacola">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
              </svg>
              Sacola
            </h1>
            { listBag?.length
              ? (
                <button
                  type="button"
                  aria-label="Ocutar sacola"
                  aria-hidden={ hiddenList }
                  onClick={ () => setHiddenList(!hiddenList) }
                />
              ) : null }
            { hiddenList && (
              <span>
                Informações da sua compra
                { ' ' }
                (
                { ' ' }
                { listBag?.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { listBag?.length ? listBag?.map((object: TypeAddBagInfos) => (
              <li
                id={ `product-${object.id + object.opt_id}` }
                key={ `product-${object.id + object.color + object.size}` }
              >
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ () => openEditItemBagModal(object) }
                  execFunction={ () => deleteBagItem(object) }
                />
              </li>
            )) : <li className={ style.empty }>Sacola Vazia</li> }
          </ul>
        </section>
        <Checkout
          setOpenModal={ setOpenModal }
          shipping={ listCarries }
          qunatityAdd={ listBag?.length }
          addSelected={ props.main_add }
          setShipping={ setShipping }
        />
      </div>
      <BarBuy
        listProducts={ listBag }
        shipping={ shipping }
        addresId={ props.main_add?.id }
      />
      <ContentModal
        openModal={ setOpenModal }
        isOpen={
          openModal.modal === 'address'
          || openModal.modal === 'addaddress'
          || openModal.modal === 'editbag'
        }
      >
        { openModal.modal === 'address' && <RenderAdderess execFunction={ setBagAddres } /> }
        { openModal.modal === 'addaddress' && <Addaddress execFunction={ () => setOpenModal('') } /> }
        { openModal.modal === 'editbag' && (
          <CardEdit
            props={ listBag }
            identify={ openModal }
            execeFunction={ closeEdit! }
          />
        ) }
      </ContentModal>
      <MockModal
        isOpen={ openModal.modal === 'addcard' }
        openModal={ setOpenModal }
      >
        <Addacard />
      </MockModal>
    </>
  );
}

export default ContentBag;
