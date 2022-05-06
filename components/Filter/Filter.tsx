import React, { useCallback } from 'react';
import ItemList from './ItemList';
import { ADD_FILTER_LIST } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import mockItensFilter from '../../service/mockCtg';
import style from './style.module.scss';

function Filter() {
  const dispatch = useAppDispatch();
  const { listFilter } = useAppSelector(({ search }) => search);
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
                checked={ listFilter.some((item) => +item.id === id) }
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
                checked={ listFilter.some((item) => +item.id === id) }
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
                checked={ listFilter.some((item) => +item.id === id) }
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
                checked={ listFilter.some((item) => +item.id === id) }
              />
            )
          ))
        }
      </div>
      <h2>Genero</h2>
      <div className={ style.block }>
        <ItemList
          id={ 36 }
          name="gen"
          value="Criança"
          execFunction={ addListFilter }
          checked={ listFilter.some((item) => +item.id === 36) }
        />
        <ItemList
          id={ 37 }
          name="gen"
          value="Femenino"
          execFunction={ addListFilter }
          checked={ listFilter.some((item) => +item.id === 37) }
        />
        <ItemList
          id={ 38 }
          name="gen"
          value="Masculino"
          execFunction={ addListFilter }
          checked={ listFilter.some((item) => +item.id === 38) }
        />
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
                checked={ listFilter.some((item) => +item.id === id) }
              />
            )
          ))
        }
      </div>
    </section>
  );
}

export default Filter;
