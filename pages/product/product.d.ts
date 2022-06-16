import type { ImageProps } from 'next/image';
import type { TDetail, TSpecification } from './components/Cards/CardDetail/types';
import type { ICardProduct } from '../../types/typeCardProduct';

export type TypeProduct = {
  product: {
    id: number;
    title: string;
    type: string;
    price: number;
    descrtion: string;
    branch: string;
    gender: string;
    mainImg: Object<ImageProps['src']>;
    discount: number;
    oldPrice: number;
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
  similar: ICardProduct['products']
};
