import React from 'react';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

function FOrder() {
  return (
    <section className={ style.optionsfilter }>
      <h1>Ordenar por</h1>
      <div className={ style.contentorder }>
        <label htmlFor="minprice">
          <input type="radio" name="filter" id="minprice" />
          <span className={ style.order }>
            Menor Preço
            <Svg icoName="setLeft" />
          </span>
        </label>
        <label htmlFor="maxprice">
          <input type="radio" name="filter" id="maxprice" />
          <span className={ style.order }>
            Maior Preço
            <Svg icoName="setRight" />
          </span>
        </label>
        <label htmlFor="promotion">
          <input type="radio" name="filter" id="promotion" />
          <span className={ style.order }>
            Promoção
            <Svg icoName="percentage" />
          </span>
        </label>
      </div>
    </section>
  );
}

export default FOrder;
