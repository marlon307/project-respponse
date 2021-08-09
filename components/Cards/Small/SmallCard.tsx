import React from 'react';
import Image from 'next/image';
import TesteImgUrl from '../../../img/brian-lawson-e9o9sAy5PL4-unsplash 1.png';
import iconTrash from '../../../img/u_trash.svg';
import style from './styles/stylesSmallCard.module.scss';

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
            <span title="Price R$ 199,90">R$ 199,90</span>
          </div>
        </div>
      </div>
      <div className={ style.delete } title="Excluir">
        <Image src={ iconTrash } alt="Excluir" />
      </div>
    </div>
  );
}

export default SmallCard;
