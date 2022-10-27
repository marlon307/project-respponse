import React, { useCallback, useEffect } from 'react';
import { CardAdderess } from '.';

import { api2 } from '../../service/api';
import useAddress from '../../hooks/useAddress';
import style from './CardAddress/style.module.scss';

type TAdderess = {
  isRequest: boolean;
};

function Address({ isRequest }: TAdderess) {
  const { addressList, mutate } = useAddress(isRequest);

  const removeAddress = useCallback(async (address: number) => {
    const { data } = await api2.delete('/address', {
      data: {
        address,
      },
    }).catch(({ response }) => response);

    if (data.status === 200) {
      const newList = addressList.filter(({ id }: ITAddress) => id !== address);
      mutate({ address: newList }, false);
    }
  }, [addressList]);

  useEffect(() => {
    if (isRequest && !addressList.length) {
      mutate();
    }
  }, [isRequest]);

  return (
    <div className={ style.address }>
      { addressList?.map(({
        id, name_delivery, number_home, city, uf, cep, road, district,
      }: ITAddress) => (
        <CardAdderess
          key={ id }
          name_delivery={ name_delivery }
          road={ road }
          number_home={ number_home }
          city={ city }
          uf={ uf }
          cep={ cep }
          district={ district }
          removable
          execFunction={ () => removeAddress(id ?? 0) }
        />
      )) }
      { !addressList?.length && <h3>Você não possui endereços cadastrados.</h3> }
    </div>
  );
}

export default Address;
