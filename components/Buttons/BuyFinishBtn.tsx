import React from 'react';
import style from './style.module.scss';
import api from '../../service/api';
import { StateBagType } from '../../types/bag';

type TBuyFinish = {
  dataBag: {
    bagItems: StateBagType['bagItems']
  };
};

function BuyFinishBtn({ dataBag }: TBuyFinish) {
  async function handleClickBuy() {
    const listRevalidate = dataBag.bagItems.map(({ id }) => id.toString());

    await api.post(
      '/revalidate',
      { listRevalidate },
    ).catch((error) => ({ data: error.message }));
  }

  return (
    <button
      type="button"
      onClick={ handleClickBuy }
      className={ style.buyFinish }
    >
      Finalizar Compra
    </button>
  );
}

export default BuyFinishBtn;
