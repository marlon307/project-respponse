import React from 'react';
import { CardProduct } from '../../components/Cards/CardProduct';
import { BarFilter } from '../../components/Filter';
import { mockminObjectCards } from '../../service/mockCards';
import mockCategory from '../../service/mockCategory';
import style from './style.module.scss';

function categoryId() {
  return (
    <div className={ style.category }>
      <BarFilter />
      <div className={ style.categorycont }>
        {
          mockminObjectCards.map((object) => (
            <CardProduct key={ object.id } id={ object.id } />
          ))
        }
      </div>
    </div>
  );
}

export default categoryId;

export async function getStaticProps({ params }: any) {
  const category = await params.id;

  return {
    props: { category },
  };
}

export async function getStaticPaths() {
  const paths = await mockCategory
    .map(({ path }) => ({ params: { id: path } }));

  return {
    paths,
    fallback: false,
  };
}
