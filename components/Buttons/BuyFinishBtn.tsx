import React from 'react';
import cx from 'classnames';
import style from './style.module.scss';
import api from '../../service/api';
import { useAppSelector } from '../../redux/hooks';

function BuyFinishBtn() {
  const { bagItems } = useAppSelector(({ bag }) => bag);

  async function handleClickBuy() {
    const listRevalidate = bagItems.map(({ id }) => id.toString());

    const { data } = await api.post(
      '/revalidate',
      { listRevalidate },
    );
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <button
      type="button"
      onClick={ handleClickBuy }
      className={ cx('button1', style.buyFinish) }
    >
      Finalizar Compra
    </button>
  );
}

export default BuyFinishBtn;
