import React from 'react';
import { TypeEditBagInfos } from '../../@types/bag';
import api, { api2 } from '../../service/api';
import style from './style.module.scss';

type TBuyFinish = {
  listProducts: TypeEditBagInfos[];
};

function BuyFinishBtn({ listProducts }: TBuyFinish) {
  // const [progress, setProgress] = useState<number | string>('Finalizar Compra');
  const progress = 'Finalizar Compra';
  async function handleClickBuy() {
    if (listProducts.length) {
      setProgress('Processando pedido...');
      const listRevalidate = listProducts.map(({ id }) => id.toString());

      const { data } = await api2.post('/register_order', {
        address: 1,
        carrie: 1,
      }).catch((err) => ({ data: err }));

      if (data.status === 200) {
        await api.post('/revalidate', { listRevalidate: [...new Set(listRevalidate)] })
          .catch((error) => ({ data: error.message }));
      }

      setProgress(`Pedido: #${data.order.number_order.toString().padStart(6, '0')}`);
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
