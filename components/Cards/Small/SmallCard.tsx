import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import LoadingImage from '../../LoadImage';
import style from './style.module.scss';
import type { PSmallCard } from './type';

function SmallCard({
  objectID, removable, editable, eventModal, execFunction,
}: PSmallCard) {
  const {
    id, title, category_name: type, url_image: mainImg, price, color_name: colorName, color,
    size, quantity, discount, oldPrice,
  } = objectID;

  return (
    <div className={ style.smallcard }>
      <div className={ style.img }>
        <figure>
          <Image
            src={ mainImg }
            alt={ title }
            quality={ 85 }
            loading="eager"
            sizes="130px"
            priority
          />
        </figure>
      </div>
      <div className={ style.desc }>
        <Link href={ `/product/${id}` }>
          <a aria-label={ `${type} - ${title}` }>
            <h2>{ type }</h2>
            <h3>{ title }</h3>
          </a>
        </Link>
        <div className={ style.infos }>
          <div className={ style.setting }>
            <span title={ `${colorName}` } style={ { background: `${color}` } } />
            <span title={ `Tamanho ${size}` }>{ size }</span>
            <span>
              { editable ? (
                <button
                  type="button"
                  title={ `${quantity} ${type} - ${title}. ( 👇 ) Clique para alterar a quantidade.` }
                  onClick={ eventModal }
                >
                  { quantity }
                  x
                </button>
              ) : (
                <>
                  { quantity }
                  x
                </>
              ) }
            </span>
          </div>
          <div className={ style.price }>
            <span
              data-oldprice={
                discount > 0 && oldPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              title={
                `Valor unitário ${price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}`
              }
            >
              { price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }) }
            </span>
          </div>
        </div>
      </div>
      { removable && (
        <button
          type="button"
          className={ style.delete }
          title="Excluir"
          onClick={ execFunction }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10v11Z" />
          </svg>
        </button>
      ) }
    </div>
  );
}

export default memo(SmallCard);
