import type { ImageProps } from 'next/image';
import type { TDetail } from './components/Cards/CardDetail/types';
import type { ICardProduct } from '../../@types/typeCardProduct';

export type TypeProduct = {
  product: {
    id: number;
    title: string;
    category_name: string;
    descrtion: string;
    branch: string;
    gender: string;
    mainImg: Object<ImageProps['src']>;
    details: TDetail;
    specifications: string;
    list_options: Array<{
      idc: string;
      colorName: string;
      color: string;
      price: number;
      discount: number;
      sizes: Object;
      images: Array<{
        imgid: Number;
        urlImg: ImageProps['src'];
      }>;
    }>
  };
  similar: ICardProduct['products']
};
