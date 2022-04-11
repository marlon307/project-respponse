import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import mockAdderes from '../../service/mockAdderes';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';

function RenderAdderess() {
  const dispatch = useDispatch();

  const handleClick = useCallback((adderess: Object) => {
    // dispatch(actionSlecteAdderess(adderess));
  }, []);
  // id, name, road, district, number, uf, city, zipcode,

  return (
    <div className={ style.add }>
      { mockAdderes.map((adderess) => (
        <button
          type="button"
          key={ adderess.id }
          className={ style.cont }
          onClick={ () => handleClick(adderess) }
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
        </button>
      )) }
    </div>
  );
}

export default RenderAdderess;
