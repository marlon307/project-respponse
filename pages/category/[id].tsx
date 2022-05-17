import React, { useCallback } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import BarFilter from '../../components/Filter/BarFilter';
import ItemList from '../../components/Filter/ItemList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ADD_FILTER_LIST } from '../../redux/actions';
import api from '../../service/api';
import type { ICardProduct } from '../../types/typeCardProduct';
import style from './style.module.scss';

function CategoryId({ products }: ICardProduct) {
  const { listFilter } = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();

  const removeListFilter = useCallback(({ target }: any) => {
    const { id } = target;
    const formatId = id.replace('list', '');

    dispatch(ADD_FILTER_LIST({ id: formatId }));
  }, []);

  return (
    <div className={ style.category }>
      <div className={ style.filter }>
        <BarFilter />
        <div className={ style.listfilter }>
          { listFilter.map((item) => (
            <ItemList
              id={ `list${item.id}` }
              name={ item.key }
              key={ item.id }
              value={ item.name }
              color={ item.color }
              execFunction={ removeListFilter }
            />
          )) }
        </div>
      </div>
      <div className={ style.categorycont }>
        {
          products.map((object) => (
            <CardProduct
              key={ object.id }
              objectProduct={ object }
            />
          ))
        }
      </div>
    </div>
  );
}

export default CategoryId;

type RequestCategoryType = {
  path: string
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await api.get('/categorys');
  const pgProps = await data.categorys.find(({ path }: RequestCategoryType) => path === params.id);
  return {
    props: {
      pageFilter: pgProps,
      products: data.products,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/categorys');

  const paths = data.categorys.map(({ path }: RequestCategoryType) => ({
    params: { id: path },
  }));

  return {
    paths,
    fallback: false,
  };
};
