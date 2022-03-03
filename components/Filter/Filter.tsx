import React from 'react';
import mockBranch from 'service/mockBranch';
import mockColor from 'service/mockColor';
import mockCtg from 'service/mockCtg';
import mockModel from 'service/mockModel';
import mockSize from 'service/mockSize';
import {
  FBranch, FColor, FSize, FGen, FCtg, FModel,
} from '.';
import style from './style.module.scss';

const Filter = function Filter() {
  return (
    <section className={ style.optionsfilter }>
      <h1>Filtro</h1>
      <h2>Cores</h2>
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
      <h2>Categoria</h2>
      <div className={ style.block }>
        {
          mockCtg.map((ctg) => (
            <FCtg key={ ctg } ctg={ ctg } />
          ))
        }
      </div>
      <h2>Tamanho</h2>
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
      <h2>Marca</h2>
      <div className={ style.block }>
        { mockBranch.map((branch) => (
          <FBranch
            key={ branch }
            branch={ branch }
          />
        )) }
      </div>
      <h2>Genero</h2>
      <div className={ style.block }>
        <FGen gen="Femenino" />
        <FGen gen="Infantil" />
        <FGen gen="Masculino" />
      </div>
      <h2>Modelo</h2>
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
    </section>
  );
};

export default Filter;
