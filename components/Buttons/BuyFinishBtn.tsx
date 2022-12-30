'use client';

import React, { lazy, useState } from 'react';
import ContentModal from '../Modal/ContentModal';
import registerOrder from '../../hooks/registerOrder';
import type { Pay, TypeEditBagInfos } from '../../@types/bag';
import style from './style.module.scss';
import PixCard from '../PaymetCard/PixCard';

type TBuyFinish = {
  listProducts: TypeEditBagInfos[];
  shippingId: number | undefined;
  addresId: number;
  price: number;
  paymentMethod: Pay;
  setItallment: (p: Pay) => void
};

const Addacard = lazy(() => import('../PaymetCard/Addcard'));

function BuyFinishBtn({
  listProducts, shippingId, addresId, price, paymentMethod, setItallment,
}: TBuyFinish) {
  const [progress, setProgress] = useState<number | string>('Finalizar Compra');
  const [openModal, setOpenModal] = useState<any>({ modal: '' });

  async function handleClickBuy() {
    if (listProducts.length && progress === 'Finalizar Compra') {
      setProgress('Processando pedido...');
      let msg = '';

      switch (paymentMethod.method) {
        case 'PIX': {
          // const data = await registerOrder(addresId, shippingId!);

          // if (data.status === 200) {
          //   msg = `Pedido: #${data.order.toString().padStart(6, '0')}`;
          // }

          // if (data.status === 409) {
          //   msg = 'Finalizar Compra';
          //   const productCard = document.getElementById(`product-${data.order.product_id + data.order.options_product}`)!;
          //   productCard.scrollIntoView({
          //     behavior: 'smooth',
          //   });
          // }
          setOpenModal({ modal: 'pix' });
          break;
        }
        case 'Cartão de Crédito':
          setOpenModal({ modal: 'card' });
          break;
        default: {
          let element = null;

          if (paymentMethod.method === '') {
            element = document.getElementById('field-payments');
          }
          if (!shippingId) {
            element = document.getElementById('field-shipping');
          }
          if (!addresId) {
            element = document.getElementById('field-address');
          }
          msg = 'Finalizar Compra';
          element?.scrollIntoView({
            behavior: 'smooth',
          });
          break;
        }
      }
      setProgress(msg);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={ handleClickBuy }
        className={ style.buyFinish }
      >
        { progress }
      </button>
      <ContentModal
        isOpen={
          openModal.modal === 'pix'
          || openModal.modal === 'card'
        }
        openModal={ setOpenModal }
      >
        { openModal.modal === 'card' && (
          <Addacard
            value={ price }
            exectFunction={ setItallment }
          />
        ) }
        { openModal.modal === 'pix' && <PixCard /> }
      </ContentModal>
    </>
  );
}

export default BuyFinishBtn;
