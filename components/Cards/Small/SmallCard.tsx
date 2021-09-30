import React from 'react';
import Image from 'next/image';
import TesteImgUrl from '../../../assets/img/brian-lawson-e9o9sAy5PL4-unsplash 1.png';
import style from './stylesSmallCard.module.scss';
import Svg from '../../../assets/Svg';

type PSmallCard = {
  removable?: boolean
  editable?: boolean
}

function SmallCard({ removable, editable }: PSmallCard) {
  return (
    <div className={ style.smallcard }>
      <div className={ style.img }>
        <figure>
          <Image
            src={ TesteImgUrl }
            alt="Title"
            quality="90"
            placeholder="blur"
            layout="responsive"
            width={ 130 }
            height={ 165 }
          />
        </figure>
      </div>
      <div className={ style.desc }>
        <h2>Berrylush</h2>
        <h3>Top Forever 21 Canelado Preto</h3>
        <div className={ style.infos }>
          <div className={ style.setting }>
            <span title="Roxo Claro" style={ { background: '#AAB4D9' } } />
            <span title="Tamanho G" style={ { color: '#AAB4D9' } }>G</span>
            <span title="3 Berrylush - Top Forever 21 Canelado Preto" style={ { color: '#AAB4D9' } }>3x</span>
            { editable && (
              <a href="/" aria-label="Editar quantidade e cor." title="Editar quantidade e cor">
                <Svg icoName="edit" />
              </a>
            ) }
          </div>
          <div className={ style.price }>
            <span title="Valor da unidade R$ 199,90">R$ 199,90</span>
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

SmallCard.defaultProps = {
  removable: true,
  editable: false,
};
