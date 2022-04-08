import type { TDetail, TSpecification } from './components/Cards/CardDetail/types';

export type TypeProduct = {
  pgProps: {
    id: Number;
    title: string;
    type: string;
    price: Number;
    descrtion: string;
    branch: string;
    gender: string;
    mainImg: Object;
    discount: Number;
    oldPrice: Number;
    details: TDetail;
    specification: TSpecification;
    options: Array<{
      idc: string;
      colorName: string;
      color: string;
      size: Object;
      imgs: Array<Object>;
    }>
  };
};
