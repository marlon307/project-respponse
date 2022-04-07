import React, { useCallback, memo } from 'react';
import Link from 'next/link';
import LoadingImage from '../../LoadImage';
import style from './style.module.scss';
import { useAppDispatch } from '../../../redux/hooks';
import type { PSmallCard } from './type';
import Svg from '../../../assets/Svg';
import { RM_BAG_ITEM } from '../../../redux/actions';

function SmallCard({
  objectID, removable, editable, eventModal, identifyBag,
}: PSmallCard) {
  const dispatch = useAppDispatch();

  const {
    id, title, type, mainImg, price, colorName, color,
    size, quantity, discount, oldPrice,
  } = objectID;

  const handleClickEdit = useCallback((event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // dispatch(getInfoBagEdit(objectID));
    eventModal!();
  }, [eventModal]);

  const handleClickDelete = useCallback(() => {
    dispatch(RM_BAG_ITEM(identifyBag));
  }, [dispatch, identifyBag]);

  return (
    <div className={ style.smallcard }>
      <div className={ style.img }>
        <figure>
          <LoadingImage
            url={ mainImg }
            width={ 130 }
            height={ 165 }
            alt={ title }
          />
        </figure>
      </div>
      <div className={ style.desc }>
        <Link href={ `/product/${id}` }>
          <a>
            <h2>{ type }</h2>
            <h3>{ title }</h3>
          </a>
        </Link>
        <div className={ style.infos }>
          <div className={ style.setting }>
            <span title={ `${colorName}` } style={ { background: `${color}` } } />
            <span title={ `Tamanho ${size}` }>{ size }</span>
            <span title={ `${quantity} ${type} - ${title}` }>
              { quantity }
              x
            </span>
            { editable && (
              <button
                type="button"
                aria-label="Editar cor, tamanho e quantidade."
                title="Editar cor, tamanho e quantidade."
                onClick={ handleClickEdit }
              >
                <Svg icoName="edit" />
              </button>
            ) }
          </div>
          <div className={ style.price }>
            <span
              data-oldprice={
                discount > 0 ? oldPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) : ''
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
          className="action"
          title="Excluir"
          onClick={ handleClickDelete }
        >
          <Svg icoName="trash" />
        </button>
      ) }
    </div>
  );
}

export default memo(SmallCard);
