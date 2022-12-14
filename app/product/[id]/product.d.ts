import type { ImageProps } from 'next/image';
import type { TDetail } from './components/Cards/CardDetail/types';
import type { ICardProduct } from '../../../@types/typeCardProduct';

interface IListImages {
  imgid: number;
  url_image: ImageProps['src'];
}
interface IOptions {
  idc: string;
  index?: number;
  colorName: string;
  color: string;
  price: number;
  discount: number;
  option_id: number;
  sizes: {
    [key: string]: number
  };
  images: IListImages[];
}

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
  list_options: IOptions[]
}

interface SimilarProduct {
  similar: ICardProduct['products']
}

interface Props {
  params: { id: number };
}
