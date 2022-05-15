import React, { useCallback } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { categorys } from '../../service/mockCategory';
import { mockminObjectCards2 } from '../../service/mockCards';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import BarFilter from '../../components/Filter/BarFilter';
import ItemList from '../../components/Filter/ItemList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ADD_FILTER_LIST } from '../../redux/actions';
import style from './style.module.scss';

function CategoryId() {
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
          mockminObjectCards2.map((object) => (
            <CardProduct key={ object.id } id={ object.id } />
          ))
        }
      </div>
    </div>
  );
}

export default CategoryId;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const pgProps = await categorys.find(({ path }) => path === params.id);
  return {
    props: { pgProps },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await categorys
    .map(({ path }) => ({
      params: { id: path },
    }));

  return {
    paths,
    fallback: false,
  };
};
