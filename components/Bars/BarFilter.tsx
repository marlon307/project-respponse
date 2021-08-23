import React from 'react';
import style from './styles/fstyle.module.scss';

function BarFilter() {
  return (
    <div className={ style.filter }>
      <div className={ style.mainfilter }>
        Filtro
      </div>
      <span>Tamanho G</span>
      <span>Cor Azul</span>
      <span>Tamanho P</span>
      <span>Tecido Tactel</span>
      <span>Tecido de Algodão</span>
      <span>Cor Branca</span>
    </div>
  );
}

export default BarFilter;
