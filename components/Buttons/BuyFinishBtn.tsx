'use client';

import React, { useState } from 'react';
import type { TypeEditBagInfos } from '../../@types/bag';
import api, { api2 } from '../../service/api';
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
      setProgress('Processando pedido...');
      // const listRevalidate = listProducts.map(({ id }) => id.toString());

      const { data } = await api2.post('/register_order', {
        address: addresId,
        carrie: shippingId,
      }).catch((err) => ({ data: err }));

      // if (data.status === 200) {
      //   await api.post('/revalidate', { listRevalidate: [...new Set(listRevalidate)] })
      //     .catch((error) => ({ data: error.message }));
      // }

      setProgress(`Pedido: #${data.order.toString().padStart(6, '0')}`);
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
