import React from 'react';
import Svg from '../../../assets/Svg';
import style from './style.module.scss';

function Spec() {
  return (
    <div className={ style.detail }>
      <h3>
        <Svg icoName="spec" />
        Especificações
      </h3>
      <span>SKU NE224SRM17PRY</span>
      <span>Modelo New Era NEI18MOL026</span>
      <span>Características Especiais Possui capuz com ajuste</span>
      <span>Cor Preto</span>
      <span>Ocasião de uso Casual</span>
      <span>Lavagem Pode ser lavado na máquina</span>
      <span>Material Algodão</span>
      <span>Estampa Logo</span>
      <span>Tipo de frete: Leve</span>
    </div>
  );
}

export default Spec;
