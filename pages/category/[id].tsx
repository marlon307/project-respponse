import React from 'react';
import { CardProduct } from '../../components/Cards/CardProduct';
import { BarFilter } from '../../components/Filter';
import style from './style.module.scss';

const items = [0, 1, 3, 4, 5, 6, 2];

function categoryId() {
  return (
    <div className={ style.category }>
      <BarFilter />
      <div className={ style.categorycont }>
        {
          items.map((qtd) => (
            <CardProduct key={ qtd } id={ qtd } />
          ))
        }
      </div>
    </div>
  );
}

export default categoryId;
