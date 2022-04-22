import type { ImageProps } from 'next/image';

export interface ICardCategory {
  ctgID: number;
  imgCategory: ImageProps['src'];
  categoryName: string;
  color: string,
  path: string
}

export interface ILoadSlide {
  id: number;
  srcImg: ImageProps['src'];
  alt: string;
  priority: ImageProps['priority'],
}

export type IPropsHome = {
  categorys
  slides
};
