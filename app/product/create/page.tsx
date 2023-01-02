import React from 'react';
import CreateProduct from '../../../components/ComponentCreateProduct/CreateProduct';
import { api2 } from '../../../service/api';

type Props = {
  list: {
    list_ctg: Array<ICategory>;
    list_colors: Array<IColor>;
    list_sizes: Array<ISize>;
    list_gender: Array<IGender>;
  }
};

async function getPageCretProduct(): Promise<Props> {
  const { data } = await api2.get('/product/list_options')
    .catch((error) => ({ data: error.message }));

  return {
    list: data.option_list,
  };
}

async function ProductId() {
  const { list } = await getPageCretProduct();
  return <CreateProduct propsCreateProduct={ list } />;
}

export default ProductId;
