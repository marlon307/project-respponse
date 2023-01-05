import React, { useCallback } from 'react';
import ItemList from './ItemList';
import mockItensFilter from '../../service/mockCtg';
import type { PropsItemFilter } from '../../app/category/search';
import style from './style.module.scss';

type TFilter = {
  setListFilter: (props: (p: PropsItemFilter[]) => void | any) => void;
  listChecked: PropsItemFilter[];
};

function Filter({ listChecked, setListFilter }: TFilter) {
  const addListFilter = useCallback(({ target }: any) => {
    const {
      id, name, value, dataset,
    } = target;
    if (!listChecked.some((item) => item.id === id)) {
      setListFilter!((crrState) => [{
        id, name: value, key: name, color: dataset.color,
      }, ...crrState]);
    } else {
      setListFilter((crrState) => crrState.filter((objId) => objId.id !== id));
    }
  }, [listChecked]);

  return (
    <section className={ style.optionsfilter }>
      <h1>Filtro</h1>
      <h2>Cores</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({
            id, key, name, color,
          }) => (
            key === 'color' ? (
              <ItemList
                id={ `${id}${key}` }
                name={ key }
                key={ name }
                value={ name }
                color={ color }
                onClick={ addListFilter }
                defaultChecked={ listChecked.some((item) => item.id === `${id}${key}`) }
              />
            ) : null
          ))
        }
      </div>
      <h2>Categoria</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'ctg' ? (
              <ItemList
                id={ `${id}${key}` }
                onClick={ addListFilter }
                name={ key }
                key={ name }
                value={ name }
                defaultChecked={ listChecked.some((item) => item.id === `${id}${key}`) }
              />
            ) : null
          ))
        }
      </div>
      <h2>Tamanho</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'size' ? (
              <ItemList
                id={ `${id}${key}` }
                name={ key }
                key={ name }
                value={ name }
                onClick={ addListFilter }
                defaultChecked={ listChecked.some((item) => item.id === `${id}${key}`) }
              />
            ) : null
          ))
        }
      </div>
      <h2>Marca</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'branch' ? (
              <ItemList
                id={ `${id}${key}` }
                name={ key }
                key={ name }
                value={ name }
                onClick={ addListFilter }
                defaultChecked={ listChecked.some((item) => item.id === `${id}${key}`) }
              />
            ) : null
          ))
        }
      </div>
      <h2>Genero</h2>
      <div className={ style.block }>
        <ItemList
          id="gen36"
          name="gen"
          value="Criança"
          onClick={ addListFilter }
          defaultChecked={ listChecked.some((item) => item.id === 'gen36') }
        />
        <ItemList
          id="gen37"
          name="gen"
          value="Femenino"
          onClick={ addListFilter }
          defaultChecked={ listChecked.some((item) => item.id === 'gen37') }
        />
        <ItemList
          id="gen38"
          name="gen"
          value="Masculino"
          onClick={ addListFilter }
          defaultChecked={ listChecked.some((item) => item.id === 'gen38') }
        />
      </div>
      <h2>Modelo</h2>
      <div className={ style.block }>
        {
          mockItensFilter.map(({ id, key, name }) => (
            key === 'model' ? (
              <ItemList
                id={ `${id}${key}` }
                name={ key }
                key={ name }
                value={ name }
                onClick={ addListFilter }
                defaultChecked={ listChecked.some((item) => item.id === `${id}${key}`) }
              />
            ) : null
          ))
        }
      </div>
    </section>
  );
}

export default Filter;
