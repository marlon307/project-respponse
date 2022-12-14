import type { ImageProps } from 'next/image';
import type { ICardProduct } from '../../types/typeCardProduct';

export interface IPropsHome {
  categorys: Array<{
    id: number;
    url_image: ImageProps['src'];
    category_name: string;
    color: string,
    path: string
  }>
  slides: Array<{
    id: number;
    srcImg: ImageProps['src'];
    alt: string;
    priority: ImageProps['priority'],
    background: string;
  }>
  list_product: ICardProduct['products']
  mockPromotions
}
