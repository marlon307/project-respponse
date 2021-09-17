import React from 'react';
import {
  FBranch, FColor, FSize, FGen, FCtg,
} from '.';
import mockBranch from '../../service/mockBranch';
import mockColor from '../../service/mockColor';
import mockSize from '../../service/mockSize';
import style from './style.module.scss';

function Filter() {
  return (
    <div className={ style.optionsfilter }>
      <h1>Cores</h1>
      <div className={ style.block }>
        {
          mockColor.map(({ color, colorName }) => (
            <FColor
              color={ color }
              cName={ colorName }
            />
          ))
        }
      </div>
      <h1>Categoria</h1>
      <div className={ style.block }>
        <FCtg ctg="Esporte" />
        <FCtg ctg="Lazer" />
        <FCtg ctg="Casual" />
        <FCtg ctg="Dia a dia" />
      </div>
      <h1>Tamanho</h1>
      <div className={ style.block }>
        {
          mockSize.map((size) => (
            <FSize
              size={ size }
            />
          ))
        }
      </div>
      <h1>Marca</h1>
      <div className={ style.block }>
        { mockBranch.map((branch) => (
          <FBranch branch={ branch } />
        )) }
      </div>
      <h1>Genero</h1>
      <div className={ style.block }>
        <FGen gen="Femenino" />
        <FGen gen="Infantil" />
        <FGen gen="Masculino" />
      </div>
      <h1>Tipo</h1>
      <div className={ style.block }>
        <FColor color="#333" cName="Cinza Escuro" />
        <FColor color="#333" cName="Cinza" />
        <FColor color="#333" cName="Escuro" />
        <FColor color="#333" cName="Azul" />
      </div>
    </div>
  );
}

export default Filter;
