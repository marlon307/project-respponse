import type { ImageProps } from 'next/image';
import type { ICardProduct } from '../../types/typeCardProduct';

export type IPropsHome = {
  categorys: Array<{
    ctgID: number;
    imgCategory: ImageProps['src'];
    categoryName: string;
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
};
