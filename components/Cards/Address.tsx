import React, { useCallback } from 'react';
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
      const newAddressList = addressList.filter(({ id }: ITAddress) => id !== address);
      mutate(newAddressList, false);
    }
  }, [addressList]);

  return (
    <div className={ style.address }>
      { addressList?.map((address: ITAddress) => (
        <CardAdderess
          key={ address.id }
          { ...address }
          removable
          execFunction={ () => removeAddress(address.id) }
        />
      )) }
      { !addressList?.length && <h3>Você não possui endereços cadastrados.</h3> }
    </div>
  );
}

export default Address;
