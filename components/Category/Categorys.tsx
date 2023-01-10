import React from 'react';
import useCategorys from 'hooks/useCategorys';
import CardProduct from '../Cards/CardProduct/CardProduct';
import type { PropsItemFilter } from '../../app/category/search';

interface Props {
  category_id: string;
  filterConfig: PropsItemFilter[]
}

function Categorys({ category_id, filterConfig }: Props) {
  const { props } = useCategorys(category_id);

  const filerListProducts = filterConfig.length
    ? props.filter(
      (product) => filterConfig.some(
        (cfg) => cfg.name === product.category_name
          || product.color_list.some((propLi) => propLi.color === cfg.color
            || propLi.sizes.includes(cfg.name))
          || cfg.name === product.name_gender,
      ),
    )
    : props;

  return (
    <>
      { filerListProducts.map((object) => (
        <CardProduct
          key={ object.id }
          objectProduct={ object }
        />
      )) }
    </>
  );
}

export default Categorys;
