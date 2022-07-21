import React, { useCallback } from 'react';
import type { TAddress } from '../../types/bag';
import mockAdderes from '../../service/mockAdderes';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

function RenderAdderess() {
  const handleClick = useCallback((adderess: TAddress) => {
    // eslint-disable-next-line no-console
    console.log(adderess);
  }, []);
  // id, name, road, district, number, uf, city, zipcode,

  return (
    <div className={ style.add }>
      { mockAdderes.map((adderess) => (
        <a
          href=""
          aria-label="Clique aqui para selecionar este endereço de entrega."
          key={ adderess.id }
          className={ style.cont }
          onClick={ (event) => { event.preventDefault(); handleClick(adderess); } }
        >
          <CardAdderess
            name={ adderess.name }
            road={ adderess.road }
            number={ adderess.number }
            city={ adderess.city }
            uf={ adderess.uf }
            zipcode={ adderess.zipcode }
            district={ adderess.district }
          />
        </a>
      )) }
    </div>
  );
}

export default RenderAdderess;
