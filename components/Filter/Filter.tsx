import React, { useCallback } from 'react';
import FCtg from './ItemList';
import { ADD_FILTER_LIST } from '../../redux/actions';
import { useAppDispatch } from '../../redux/hooks';
import mockItensFilter from '../../service/mockCtg';
import style from './style.module.scss';

function Filter() {
  const dispatch = useAppDispatch();

  const addListFilter = useCallback(({ target }: any) => {
    const {
      id, name, value, dataset,
    } = target;

    dispatch(ADD_FILTER_LIST({
      id, name: value, key: name, color: dataset.color,
    }));
  }, []);

  return (
    <section className={ style.optionsfilter }>
      <h1>Filtro</h1>
      <h2>Cores</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({
            id, key, name, color,
          }) => (
            key === 'color' && (
              <FCtg
                id={ id }
                name={ key }
                key={ name }
                value={ name }
                color={ color }
                execFunction={ addListFilter }
              />
            )
          ))
        }
      </div>
      <h2>Categoria</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'ctg' && (
              <FCtg
                id={ id }
                name={ key }
                key={ name }
                value={ name }
                execFunction={ addListFilter }
              />
            )
          ))
        }
      </div>
      <h2>Tamanho</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'size' && (
              <FCtg
                id={ id }
                name={ key }
                key={ name }
                value={ name }
                execFunction={ addListFilter }
              />
            )
          ))
        }
      </div>
      <h2>Marca</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'branch' && (
              <FCtg
                id={ id }
                name={ key }
                key={ name }
                value={ name }
                execFunction={ addListFilter }
              />
            )
          ))
        }
      </div>
      <h2>Genero</h2>
      <div className={ style.block }>
        <FCtg id={ 33 } name="gen" value="Criança" execFunction={ addListFilter } />
        <FCtg id={ 34 } name="gen" value="Femenino" execFunction={ addListFilter } />
        <FCtg id={ 35 } name="gen" value="Masculino" execFunction={ addListFilter } />
      </div>
      <h2>Modelo</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'model' && (
              <FCtg
                id={ id }
                name={ key }
                key={ name }
                value={ name }
                execFunction={ addListFilter }
              />
            )
          ))
        }
      </div>
    </section>
  );
}

export default Filter;
