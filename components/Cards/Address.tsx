import React, { useCallback } from 'react';
import { CardAdderess } from '.';

import { api2 } from '../../service/api';
import useAddress from '../../hooks/useAddress';
import style from './CardAddress/style.module.scss';

type TAdderess = {
  isRequest: boolean;
};

function Address({ isRequest }: TAdderess) {
  const { listAddress, mutate } = useAddress();

  const removeAddress = useCallback(async (address: number) => {
    const { data } = await api2.delete('/address', {
      data: {
        address,
      },
    }).catch(({ response }) => response);

    if (data.status === 200) {
      const newList = listAddress.filter(({ id }) => id !== address);
      mutate({ address: newList }, false);
    }
  }, [listAddress]);

  return (
    isRequest ? (
      <div className={ style.address }>
        { listAddress?.map(({
          id, name_delivery, number_home, city, uf, cep, road, district,
        }) => (
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
        { !listAddress?.length && <h3>Você não possui endereços cadastrados.</h3> }
      </div>
    ) : null
  );
}

export default Address;
