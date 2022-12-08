import type { ImageProps } from 'next/image';

export type TObjectProduct = {
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
  details: Object;
  specification: Object;
  list_options: Array<{
    idc: string;
    colorName: string;
    color: string;
    size: Object;
    imgs: Array<Object>;
  }>
};

export interface ColorSelected {
  color: string;
  colorName: string;
  option: number;
  index: number;
}

export interface PBtnAddBag {
  array: TypeEditBagInfos[];
  // sizeSelected: string;
  infoTitelAndType: {
    title: string;
    ctgName: string
  }
}

export type TObjectUserBag = {
  user: {
    bagItems: Array<{
      id: number;
      color: string;
      size: string;
      quantity: number;
    }>
  }
};
