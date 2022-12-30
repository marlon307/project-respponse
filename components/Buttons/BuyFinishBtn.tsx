'use client';

import React, { lazy, useState } from 'react';
import ContentModal from '../Modal/ContentModal';
import type { Pay, TypeEditBagInfos } from '../../@types/bag';
import registerOrder from '../../hooks/registerOrder';
import style from './style.module.scss';

type TBuyFinish = {
  listProducts: TypeEditBagInfos[];
  shippingId: number | undefined;
  addresId: number;
  price: number;
  paymentMethod: Pay;
  setItallment: (p: Pay) => void
};

const Addacard = lazy(() => import('../Add/Addcard'));

function BuyFinishBtn({
  listProducts, shippingId, addresId, price, paymentMethod, setItallment,
}: TBuyFinish) {
  const [progress, setProgress] = useState<number | string>('Finalizar Compra');
  const [openModal, setOpenModal] = useState<any>({ modal: '' });

  async function handleClickBuy() {
    if (listProducts.length && progress === 'Finalizar Compra' && addresId && shippingId) {
      setProgress('Processando pedido...');
      let msg = '';

      switch (paymentMethod.method) {
        case 'PIX': {
          const data = await registerOrder(addresId, shippingId!);

          if (data.status === 200) {
            msg = `Pedido: #${data.order.toString().padStart(6, '0')}`;
          }

          if (data.status === 409) {
            msg = 'Finalizar Compra';
            const productCard = document.getElementById(`product-${data.order.product_id + data.order.options_product}`)!;
            productCard.scrollIntoView({
              behavior: 'smooth',
            });
          }
          break;
        }
        case 'Cartão de Crédito':
          setOpenModal({ modal: 'card' });
          break;
        default:
          break;
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
      <ContentModal isOpen={ openModal.modal === 'card' } openModal={ setOpenModal }>
        { openModal.modal === 'card' && (
          <Addacard
            value={ price }
            exectFunction={ setItallment }
          />
        ) }
      </ContentModal>
    </>
  );
}

export default BuyFinishBtn;
