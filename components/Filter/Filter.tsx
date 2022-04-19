import React, { useCallback } from 'react';
import ItemList from './ItemList';
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
              <ItemList
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
              <ItemList
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
              <ItemList
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
              <ItemList
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
        <ItemList id={ 36 } name="gen" value="Criança" execFunction={ addListFilter } />
        <ItemList id={ 37 } name="gen" value="Femenino" execFunction={ addListFilter } />
        <ItemList id={ 38 } name="gen" value="Masculino" execFunction={ addListFilter } />
      </div>
      <h2>Modelo</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'model' && (
              <ItemList
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
