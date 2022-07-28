import React from 'react';
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.49995 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 7C16 6.6 16 6 15.6 5.6C15.4 5.4 15.2 5.3 14.9 5.3C14.6 5.3 14.4 5.4 14.2 5.6L8.49995 11.2C8.09995 11.7 8.09995 12.3 8.49995 12.8C8.49995 12.7 8.49995 12.7 8.49995 12.8Z" />
            </svg>
          </span>
        </label>
        <label htmlFor="maxprice">
          <input type="radio" name="filter" id="maxprice" />
          <span className={ style.order }>
            Maior Preço
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.54 11.29L9.87998 5.64001C9.78702 5.54628 9.67642 5.47188 9.55456 5.42111C9.4327 5.37035 9.30199 5.34421 9.16998 5.34421C9.03797 5.34421 8.90726 5.37035 8.78541 5.42111C8.66355 5.47188 8.55294 5.54628 8.45998 5.64001C8.27373 5.82737 8.16919 6.08082 8.16919 6.34501C8.16919 6.60919 8.27373 6.86264 8.45998 7.05001L13.41 12.05L8.45998 17C8.27373 17.1874 8.16919 17.4408 8.16919 17.705C8.16919 17.9692 8.27373 18.2226 8.45998 18.41C8.5526 18.5045 8.66304 18.5797 8.78492 18.6312C8.90679 18.6827 9.03767 18.7095 9.16998 18.71C9.30229 18.7095 9.43317 18.6827 9.55505 18.6312C9.67692 18.5797 9.78737 18.5045 9.87998 18.41L15.54 12.76C15.6415 12.6664 15.7225 12.5527 15.7779 12.4262C15.8333 12.2997 15.8619 12.1631 15.8619 12.025C15.8619 11.8869 15.8333 11.7503 15.7779 11.6238C15.7225 11.4973 15.6415 11.3836 15.54 11.29Z" />
            </svg>
          </span>
        </label>
        <label htmlFor="promotion">
          <input type="radio" name="filter" id="promotion" />
          <span className={ style.order }>
            Promoção
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.8 10.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8.4 6.4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3.5-13a1 1 0 0 0-1.4 0l-14 14a1 1 0 1 0 1.4 1.5l14-14a1 1 0 0 0 0-1.4Z" fill="#333" />
            </svg>
          </span>
        </label>
      </div>
    </section>
  );
}

export default FOrder;
