import React from 'react';
import Image from 'next/image';
import TesteImgUrl from '../../../assets/img/brian-lawson-e9o9sAy5PL4-unsplash 1.png';
import style from './styles/stylesSmallCard.module.scss';
import Svg from '../../../assets/Svg';

function SmallCard() {
  return (
    <div className={ style.smallcard }>
      <div className={ style.img }>
        <Image
          src={ TesteImgUrl }
          alt="Title"
          quality="90"
        />
      </div>
      <div className={ style.desc }>
        <h2>Berrylush</h2>
        <h3>Top Forever 21 Canelado Preto</h3>
        <div className={ style.infos }>
          <div className={ style.setting }>
            <span title="Roxo Claro" style={ { background: '#AAB4D9' } } />
            <span title="Tamanho G" style={ { color: '#AAB4D9' } }>G</span>
            <span title="3 Berrylush - Top Forever 21 Canelado Preto" style={ { color: '#AAB4D9' } }>3x</span>
          </div>
          <div className={ style.price }>
            <span title="Valor da unidade R$ 199,90">R$ 199,90</span>
          </div>
        </div>
      </div>
      <div className="delete" title="Excluir">
        <Svg icoName="trash" />
      </div>
    </div>
  );
}

export default SmallCard;
