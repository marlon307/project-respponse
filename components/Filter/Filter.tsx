import React from 'react';
import {
  FBranch, FColor, FSize, FGen, FCtg, FModel,
} from '.';
import mockBranch from '../../service/mockBranch';
import mockColor from '../../service/mockColor';
import mockCtg from '../../service/mockCtg';
import mockModel from '../../service/mockModel';
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
              key={ colorName }
              color={ color }
              cName={ colorName }
            />
          ))
        }
      </div>
      <h1>Categoria</h1>
      <div className={ style.block }>
        {
          mockCtg.map((ctg) => (
            <FCtg key={ ctg } ctg={ ctg } />
          ))
        }
      </div>
      <h1>Tamanho</h1>
      <div className={ style.block }>
        {
          mockSize.map((size) => (
            <FSize
              key={ size }
              size={ size }
            />
          ))
        }
      </div>
      <h1>Marca</h1>
      <div className={ style.block }>
        { mockBranch.map((branch) => (
          <FBranch
            key={ branch }
            branch={ branch }
          />
        )) }
      </div>
      <h1>Genero</h1>
      <div className={ style.block }>
        <FGen gen="Femenino" />
        <FGen gen="Infantil" />
        <FGen gen="Masculino" />
      </div>
      <h1>Modelo</h1>
      <div className={ style.block }>
        {
          mockModel.map((model) => (
            <FModel
              key={ model }
              model={ model }
            />
          ))
        }
      </div>
    </div>
  );
}

export default Filter;
