import React, { useCallback, useState, lazy } from 'react';
import { CardAdderess } from '.';
import { api2 } from '../../service/api';
import useAddress from '../../hooks/useAddress';
import BtnAdd from '../Buttons/BtnAdd';
import ContentModal from '../Modal/ContentModal';
import style from './CardAddress/style.module.scss';

const Addaderess = lazy(() => import('../Add/Address'));

type TAdderess = {
  isRequest: boolean;
};

function Address({ isRequest }: TAdderess) {
  const { addressList, mutate } = useAddress(isRequest);
  const [isOpen, setIsOpen] = useState(false);

  const removeAddress = useCallback(async (address: number) => {
    const { data } = await api2.delete(`/address/${address}`)
      .catch(({ response }) => response);

    if (data.status === 200) {
      const newAddressList = addressList.filter(({ id }: ITAddress) => id !== address);
      mutate(newAddressList, false);
    }
  }, [addressList]);

  return (
    <>
      <BtnAdd eventBtn={ () => setIsOpen(true) } />
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
      <ContentModal
        isOpen={ isOpen }
        openModal={ setIsOpen }
      >
        { isOpen && <Addaderess execFunction={ () => setIsOpen(false) } /> }
      </ContentModal>
    </>
  );
}

export default Address;
