import React, { useCallback } from 'react';
import {
  FBranch, FColor, FSize, FGen, FCtg, FModel,
} from '.';
import { ADD_FILTER_LIST } from '../../redux/actions';
import { useAppDispatch } from '../../redux/hooks';
import mockBranch from '../../service/mockBranch';
import mockColor from '../../service/mockColor';
import mockCtg from '../../service/mockCtg';
import mockModel from '../../service/mockModel';
import mockSize from '../../service/mockSize';
import style from './style.module.scss';

function Filter() {
  const dispatch = useAppDispatch();

  const addListFilter = useCallback((itemFilter: any) => {
    dispatch(ADD_FILTER_LIST(itemFilter));
  }, []);

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
              execFunction={ () => addListFilter({ color, colorName }) }
            />
          ))
        }
      </div>
      <h2>Categoria</h2>
      <div className={ style.block }>
        {
          mockCtg.map((ctg) => (
            <FCtg
              key={ ctg }
              ctg={ ctg }
              execFunction={ () => addListFilter({ ctg }) }
            />
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
              execFunction={ () => addListFilter({ size }) }
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
            execFunction={ () => addListFilter({ branch }) }
          />
        )) }
      </div>
      <h2>Genero</h2>
      <div className={ style.block }>
        <FGen gen="Femenino" execFunction={ () => addListFilter({ gen: 'Femenino' }) } />
        <FGen gen="Infantil" execFunction={ () => addListFilter({ gen: 'Infantil' }) } />
        <FGen gen="Masculino" execFunction={ () => addListFilter({ gen: 'Masculino' }) } />
      </div>
      <h2>Modelo</h2>
      <div className={ style.block }>
        {
          mockModel.map((model) => (
            <FModel
              key={ model }
              model={ model }
              execFunction={ () => addListFilter({ model }) }
            />
          ))
        }
      </div>
    </section>
  );
}

export default Filter;
