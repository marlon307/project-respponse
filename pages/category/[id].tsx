import React from 'react';
import { CardProduct } from '../../components/Cards/CardProduct';
import { BarFilter } from '../../components/Filter';
import style from './style.module.scss';

const items = [
  0, 1, 2, 3, 4];
// 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
// 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//   31, 32, 33, 34, 35, 36, 37;
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
