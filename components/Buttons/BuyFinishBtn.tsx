'use client';

import React, { useState } from 'react';
import type { TypeEditBagInfos } from '../../@types/bag';
import /* api, */ { api2 } from '../../service/api';
import style from './style.module.scss';

type TBuyFinish = {
  listProducts: TypeEditBagInfos[];
  shippingId: number | undefined;
  addresId: number;
};

function BuyFinishBtn({ listProducts, shippingId, addresId }: TBuyFinish) {
  const [progress, setProgress] = useState<number | string>('Finalizar Compra');
  // const progress = 'Finalizar Compra';
  async function handleClickBuy() {
    if (listProducts.length) {
      let msg = '';
      setProgress('Processando pedido...');
      // const listRevalidate = listProducts.map(({ id }) => id.toString());

      const { data } = await api2.post('/register_order', {
        address: addresId,
        carrie: shippingId,
      }).catch(({ response }) => ({ data: response.data }));

      if (data.status === 200) {
        msg = `Pedido: #${data.order.toString().padStart(6, '0')}`;
        // await api.post('/revalidate', { listRevalidate: [...new Set(listRevalidate)] })
        //   .catch((error) => ({ data: error.message }));
      }

      if (data.status === 409) {
        msg = 'Finalizar Compra';
        const productCard = document.getElementById(`product-${data.order.product_id + data.order.options_product}`)!;
        productCard.scrollIntoView({
          behavior: 'smooth',
        });
      }

      setProgress(msg);
    }
  }

  return (
    <button
      type="button"
      onClick={ handleClickBuy }
      className={ style.buyFinish }
    >
      { progress }
    </button>
  );
}

export default BuyFinishBtn;
