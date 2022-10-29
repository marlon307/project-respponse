import React from 'react';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

interface Props {
  execFunction: (n: number) => void;
}

function RenderAdderess({ execFunction }: Props) {
  const listAddress: IListAddress['listAddress'] = [];
  return (
    <div className={ style.add }>
      { listAddress.map((adderess) => (
        <a
          href="#"
          aria-label="Clique aqui para selecionar este endereço de entrega."
          key={ adderess.id }
          className={ style.cont }
          onClick={ (event) => { event.preventDefault(); execFunction(adderess.id ?? 0); } }
        >
          <CardAdderess { ...adderess } />
        </a>
      )) }
    </div>
  );
}

export default RenderAdderess;
