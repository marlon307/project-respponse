import type { ImageProps } from 'next/image';
import type { TDetail } from './components/Cards/CardDetail/types';
import type { ICardProduct } from '../../@types/typeCardProduct';

interface TypeProduct {
  id: number;
  title: string;
  category_name: string;
  descrtion: string;
  branch: string;
  gender: string;
  url_image: Object<ImageProps['src']>;
  details: TDetail;
  specifications: string;
  list_options: Array<{
    idc: string;
    color_name: string;
    color: string;
    price: number;
    oldPrice: number;
    discount: number;
    product_option: number;
    sizes: {
      [key: string]: number
    };
    images: Array<{
      imgid: number;
      url_image: ImageProps['src'];
    }>;
  }>
}

interface SimilarProduct {
  similar: ICardProduct['products']
}
