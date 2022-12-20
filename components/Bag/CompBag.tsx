'use client';

import React, {
  useCallback, useState, lazy, useEffect,
} from 'react';
import BarBuy from '../Bars/BarBuy';
import { SmallCard } from '../Cards';
import ContentModal from '../Modal/ContentModal';
import Checkout from '.';
// import useBag from '../../hooks/useBag';
import { api2 } from '../../service/api';
import type { TypeAddBagInfos, Shipping } from '../../@types/bag';
import style from '../../Sass/style.module.scss';

const RenderAdderess = lazy(() => import('./RenderAdderess'));
const Addaddress = lazy(() => import('../Add/Address'));
const Addacard = lazy(() => import('../Add/Addcard'));
const CardEdit = lazy(() => import('../Cards/CardEditbag/CardEditbag'));

function ContentBag({ props }) {
  const fallback = props?.infobag;
  // const { mutate } = useBag(false);

  const [openModal, setOpenModal] = useState<string>('');
  const [identifyEditItemBag, setIdentifyEditItemBag] = useState<TypeAddBagInfos | any>({});
  const [hiddenList, setHiddenList] = useState(false);
  const [listBag, setStateBag] = useState<TypeAddBagInfos[]>(fallback?.list_b);
  const [listCarries, setListCarries] = useState<[]>([]);
  const [shipping, setShipping] = useState<Shipping>({ price: 0 });

  const setBagAddres = (add: ITAddress) => {
    setOpenModal('');
    fallback.main_add = add;
    // mutate(fallback, false);
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
    setIdentifyEditItemBag(identify);
    setOpenModal('editbag');
  }, []);

  const editBag = useCallback((array: TypeAddBagInfos[]) => {
    setStateBag(array);
    setOpenModal('');
  }, []);

  useEffect(() => {
    async function getCarries() {
      const { data } = await api2.post('/calc', {
        zipcode: fallback.main_add.zipcode
        ,
      });

      setListCarries(data.carriers);
    }
    getCarries();
  }, [fallback.main_add]);

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
            { fallback?.list_b?.length
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
                { fallback?.list_b?.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { listBag?.length ? listBag?.map((object: TypeAddBagInfos) => (
              <li
                id={ `product-${object.id + object.opt_id}` }
                key={ object.id + object.color + object.size }
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
          qunatityAdd={ fallback?.list_b?.length }
          addSelected={ fallback?.main_add }
          setShipping={ setShipping }
        />
      </div>
      <BarBuy
        listProducts={ listBag }
        shipping={ shipping }
        addresId={ fallback?.main_add.id }
      />
      <ContentModal
        openModal={ setOpenModal }
        isOpen={
          openModal === 'address'
          || openModal === 'addaddress'
          || openModal === 'addcard'
          || openModal === 'editbag'
        }
      >
        { openModal === 'address' && <RenderAdderess execFunction={ setBagAddres } /> }
        { openModal === 'addaddress' && <Addaddress execFunction={ () => setOpenModal('') } /> }
        { openModal === 'addcard' && <Addacard /> }
        { openModal === 'editbag' && (
          <CardEdit
            props={ listBag }
            identify={ identifyEditItemBag }
            execeFunction={ editBag }
          />
        ) }
      </ContentModal>
    </>
  );
}

export default ContentBag;
