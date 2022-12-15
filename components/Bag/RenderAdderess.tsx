import React, { use } from 'react';
import getAddress from '../../utils/fetchAddress';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

interface Props {
  execFunction: (add: ITAddress) => void;
}

function RenderAdderess({ execFunction }: Props) {
  const addressList = use(getAddress(true));

  return (
    <div className={ style.add }>
      { addressList?.map((adderess: ITAddress) => (
        <a
          href="#"
          aria-label="Clique aqui para selecionar este endereço de entrega."
          key={ adderess.id }
          className={ style.cont }
          onClick={ (event) => { event.preventDefault(); execFunction(adderess); } }
        >
          <CardAdderess { ...adderess } />
        </a>
      )) }
    </div>
  );
}

export default RenderAdderess;
