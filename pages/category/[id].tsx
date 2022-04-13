import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import mockCategory from '../../service/mockCategory';
import { mockminObjectCards2 } from '../../service/mockCards';
import { CardProduct } from '../../components/Cards/CardProduct';
import style from './style.module.scss';
import BarFilter from '../../components/Filter/BarFilter';
import {
  FBranch, FColor, FModel, FSize, FTissue,
} from '../../components/Filter';
import { useAppSelector } from '../../redux/hooks';

function CategoryId() {
  const { listFilter } = useAppSelector(({ search }) => search);

  return (
    <div className={ style.category }>

      <div className={ style.filter }>
        <BarFilter />
        <div className={ style.listfilter }>
          { listFilter.map((item) => {
            if (item.branch) return <FBranch key={ item.branch } branch={ item.branch } />;
            if (item.color) {
              return (
                <FColor
                  key={ item.colorName }
                  cName={ item.colorName }
                  color={ item.color }
                />
              );
            }

            if (item.size) return <FSize key={ item.size } size={ item.size } />;
            if (item.tecid) return <FTissue key={ item.tecid } tecid={ item.tecid } />;
            if (item.model) return <FModel key={ item.model } model={ item.model } />;
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
