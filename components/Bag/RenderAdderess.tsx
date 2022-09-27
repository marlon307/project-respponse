import React from 'react';
import type { TAddress } from '../../@types/bag';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

interface Props {
  listAdd: TAddress[]
  execFunction: (n: number) => void;
}

function RenderAdderess({ listAdd, execFunction }: Props) {
  return (
    <div className={ style.add }>
      { listAdd.map((adderess) => (
        <a
          href=""
          aria-label="Clique aqui para selecionar este endereço de entrega."
          key={ adderess.add_id }
          className={ style.cont }
          onClick={ (event) => { event.preventDefault(); execFunction(adderess.add_id ?? 0); } }
        >
          <CardAdderess
            name_delivery={ adderess.name_delivery }
            road={ adderess.road }
            number_home={ adderess.number_home }
            city={ adderess.city }
            uf={ adderess.uf }
            cep={ adderess.cep }
            district={ adderess.district }
          />
        </a>
      )) }
    </div>
  );
}

export default RenderAdderess;
