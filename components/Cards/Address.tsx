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
    const { data } = await api2.delete(`/address/${address}`)
      .catch(({ response }) => response);

    if (data.status === 200) {
      mutate(addressList.filter(({ id }: ITAddress) => id !== address), false);
    }
  }, [addressList]);

  useEffect(() => {
    if (isRequest && !addressList.length) {
      mutate();
    }
  }, [isRequest]);

  return (
    <div className={ style.address }>
      { addressList?.map((address: ITAddress) => (
        <CardAdderess
          key={ address.id }
          { ...address }
          removable
          execFunction={ () => removeAddress(address.id ?? 0) }
        />
      )) }
      { !addressList?.length && <h3>Você não possui endereços cadastrados.</h3> }
    </div>
  );
}

export default Address;
