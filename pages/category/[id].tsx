import React, { useCallback } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import mockCategory from '../../service/mockCategory';
import { mockminObjectCards2 } from '../../service/mockCards';
import { CardProduct } from '../../components/Cards/CardProduct';
import BarFilter from '../../components/Filter/BarFilter';
import {
  FBranch, FColor, FCtg, FGen, FModel, FSize, FTissue,
} from '../../components/Filter';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ADD_FILTER_LIST } from '../../redux/actions';
import style from './style.module.scss';

function CategoryId() {
  const { listFilter } = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();

  const removeListFilter = useCallback(({ target }: any) => {
    const { name, value } = target;
    dispatch(ADD_FILTER_LIST({ [name]: value }));
  }, []);

  return (
    <div className={ style.category }>
      <div className={ style.filter }>
        <BarFilter />
        <div className={ style.listfilter }>
          { listFilter.map((item) => {
            if (item.color) {
              return (
                <FColor
                  key={ item.colorName }
                  cName={ item.colorName }
                  color={ item.color }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.ctg) {
              return (
                <FCtg
                  key={ item.ctg }
                  ctg={ item.ctg }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.size) {
              return (
                <FSize
                  key={ item.size }
                  size={ item.size }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.tecid) {
              return (
                <FTissue
                  key={ item.tecid }
                  tecid={ item.tecid }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.branch) {
              return (
                <FBranch
                  key={ item.branch }
                  branch={ item.branch }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.model) {
              return (
                <FModel
                  key={ item.model }
                  model={ item.model }
                  execFunction={ removeListFilter }
                />
              );
            }
            if (item.gen) {
              return (
                <FGen
                  key={ item.gen }
                  gen={ item.gen }
                  execFunction={ removeListFilter }
                />
              );
            }
            return null;
          }) }
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
  const pgProps = await mockCategory.find(({ path }) => path === params.id);
  return {
    props: { pgProps },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await mockCategory
    .map(({ path }) => ({
      params: { id: path },
    }));

  return {
    paths,
    fallback: false,
  };
};
