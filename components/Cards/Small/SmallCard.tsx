import React from 'react';
import style from './stylesSmallCard.module.scss';
import Svg from '../../../assets/Svg';
import LoadingImage from '../../LoadImage';

type ObjectId = {
  title: string;
  type: string;
  mainImg: string | any;
  price: string;
  colorName: string;
  color: string;
  size: string;
  quantity: number;
}

export interface PSmallCard {
  objectID: ObjectId;
  removable?: boolean
  editable?: boolean
  eventModal?: Function
}

function SmallCard({
  objectID, removable, editable, eventModal,
}: PSmallCard) {
  const {
    title, type, mainImg, price, colorName, color, size, quantity,
  } = objectID;
  function handleClick(event: { preventDefault: () => void; }) {
    event.preventDefault();
    eventModal!(true);
  }

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
            <span title={ `Valor da unidade ${price}` }>{ price }</span>
          </div>
        </div>
      </div>
      { removable && (
        <div className="action" title="Excluir">
          <Svg icoName="trash" />
        </div>
      ) }
    </div>
  );
}

export default SmallCard;
