'use client';

import React, { lazy, useState } from 'react';
import registerOrder from 'hooks/registerOrder';
import ContentModal from '../Modal/ContentModal';
import PixCard from '../PaymetCard/PixCard';
import type { Pay, Shipping, TypeEditBagInfos } from '../../@types/bag';
import style from './style.module.scss';

type TBuyFinish = {
  listProducts: TypeEditBagInfos[];
  shipping: Shipping;
  addresId: number;
  price: number;
  paymentMethod: Pay;
  setItallment: (p: Pay) => void
};

const Addacard = lazy(() => import('../PaymetCard/Addcard'));

function BuyFinishBtn({
  listProducts, shipping, addresId, price, paymentMethod, setItallment,
}: TBuyFinish) {
  const [progress, setProgress] = useState<number | string>('Finalizar Compra');
  const [openModal, setOpenModal] = useState<any>({ modal: '' });

  function finishPayment({ number_order }: { number_order: number }) {
    setOpenModal({});
    setProgress(`Pedido: #${number_order.toString().padStart(6, '0')}`);
  }

  async function handleClickBuy() {
    if (listProducts.length && progress === 'Finalizar Compra') {
      setProgress('Processando pedido...');
      let msg = '';

      switch (paymentMethod.method) {
        case 'PIX': {
          const data = await registerOrder(addresId, shipping.id!, 'pix', shipping?.price, {});

          if (data.status === 200) {
            msg = `Pedido: #${data.order.number_order.toString().padStart(6, '0')}`;
            setOpenModal({ modal: 'pix', ...data.order });
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
          msg = 'Finalizar Compra';
          setOpenModal({ modal: 'card' });
          break;
        default: {
          let element = null;

          if (paymentMethod.method === '') {
            element = document.getElementById('field-payments');
          }
          if (!shipping.id) {
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
            onFinishPayment={ finishPayment! }
            propsOrder={ {
              addresId,
              shippingId: shipping.id!,
              method_pay: paymentMethod.method,
              price: shipping.price,
            } }
          />
        ) }
        { openModal.modal === 'pix' && <PixCard infoPix={ openModal } /> }
      </ContentModal>
    </>
  );
}

export default BuyFinishBtn;
