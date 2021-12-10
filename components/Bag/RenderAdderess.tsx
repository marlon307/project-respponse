import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import mockAdderes from '../../service/mockAdderes';
import { CardAdderess } from '../Cards';
import style from './style.module.scss';
import { actionSlecteAdderess } from '../../redux/redux-actions';

const RenderAdderess = function RenderAdderess() {
  const dispatch = useDispatch();

  function handleClick(adderess: Object) {
    dispatch(actionSlecteAdderess(adderess));
  }
  // id, name, road, district, number, uf, city, zipcode,

  return (
    <div className={ style.add }>
      { mockAdderes.map((adderess) => (
        <a
          key={ adderess.id }
          href="/"
          className={ style.cont }
          onClick={ useCallback((event) => {
            event.preventDefault();
            handleClick(adderess);
          }, []) }
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
};

export default RenderAdderess;
