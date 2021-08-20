import React from 'react';
import Svg from '../../../assets/Svg';
import style from './style.module.scss';

function Detail() {
  return (
    <div className={ style.detail }>
      <h3>
        <Svg icoName="spec" />
        Detalhes do produto
      </h3>
      <span>Flanelado Fechado New Era Canguru Add T Preto</span>
      <span>Modelagem: Reta</span>
      <span>Manga: Longa</span>
      <span>Estampa/Padronagem: Outras</span>
      <span>Quantidade de Bolsos: 1</span>
      <span>Material: Algodão</span>
      <span>Composição: 50% Algodão e 50% Poliéster</span>
      <span>Tipo de Tecido: Moletom não flanelado (Moletinho)</span>
      <span> Lavagem: Pode ser lavado na máquina</span>
      <span>
        Medidas da peça: Ombro: 17cm/ Ombro a Ombro: 58cm/ Manga:
        70cm/ Tórax: 128cm /Comprimento: 79cm
      </span>
      <span> Medidas Modelo: Altura: 1,87m/ Tórax: 93cm/ Manequim 38</span>
      <span>Características Especiais: Possui capuz com ajuste</span>
    </div>
  );
}

export default Detail;
