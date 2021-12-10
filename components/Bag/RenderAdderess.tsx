import React, { useCallback } from 'react';
import mockAdderes from '../../service/mockAdderes';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

const RenderAdderess = function RenderAdderess() {
  const handleClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={ style.add }>
      { mockAdderes.map(({
        id, name, road, district, number, uf, city, zipcode,
      }) => (
        <a
          href="/"
          className={ style.cont }
          onClick={ handleClick }
        >
          <CardAdderess
            key={ id }
            name={ name }
            road={ road }
            number={ number }
            city={ city }
            uf={ uf }
            zipcode={ zipcode }
            district={ district }
          />
        </a>
      )) }
    </div>
  );
};

export default RenderAdderess;
