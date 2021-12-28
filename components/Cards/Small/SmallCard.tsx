import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import Svg from '../../../assets/Svg';
import LoadingImage from '../../LoadImage';
import { removeBag, getInfoBagEdit } from '../../../redux/redux-actions';

type ObjectId = {
  id: number;
  title: string;
  type: string;
  mainImg: string | any;
  price: number;
  oldPrice: number;
  colorName: string;
  color: string;
  size: string;
  quantity: number;
  discount: number;
}

export interface PSmallCard {
  objectID: ObjectId;
  removable?: boolean;
  editable?: boolean;
  eventModal?: Function;
  identifyBag?: string;
}

const SmallCard = function SmallCard({
  objectID, removable, editable, eventModal, identifyBag,
}: PSmallCard) {
  const dispatch = useDispatch();
  const {
    title, type, mainImg, price, colorName, color,
    size, quantity, discount, oldPrice,
  } = objectID;

  const handleClick = useCallback((event: { preventDefault: () => void; }) => {
    event.preventDefault();
    dispatch(getInfoBagEdit({ ...objectID }));
    eventModal!();
  }, []);

  const handleClickDelete = useCallback(() => {
    dispatch(removeBag(identifyBag!));
  }, []);

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
        <h2>{ type }</h2>
        <h3>{ title }</h3>
        <div className={ style.infos }>
          <div className={ style.setting }>
            <span title={ `${colorName}` } style={ { background: `${color}` } } />
            <span title={ `Tamanho ${size}` }>{ size }</span>
            <span title={ `${quantity} ${type} - ${title}` }>
              { quantity }
              x
            </span>
            { editable && (
              <a
                href="/"
                aria-label="Editar cor, tamanho e quantidade."
                title="Editar cor, tamanho e quantidade."
                onClick={ handleClick }
              >
                <Svg icoName="edit" />
              </a>
            ) }
          </div>
          <div className={ style.price }>
            { discount > 0 && (
              <span title={ `Valor da unidade ${price}` }>
                { price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </span>
            ) }
            <span title={ `Valor anterior ${oldPrice}` }>
              { oldPrice.toLocaleString('pt-br', {
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
};

export default SmallCard;
