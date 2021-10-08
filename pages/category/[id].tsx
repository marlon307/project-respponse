import React from 'react';
import { CardProduct } from '../../components/Cards/CardProduct';
import { BarFilter } from '../../components/Filter';
import style from './style.module.scss';

const items = [0, 1, 2, 3, 4];

function categoryId() {
  return (
    <>
      <div className={ style.filter }>
        <BarFilter />
      </div>
      <div className={ style.category }>
        <div className={ style.categorycont }>
          {
            items.map((qtd) => (
              <div key={ qtd } className={ style.card }>
                <CardProduct id={ qtd } />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default categoryId;
