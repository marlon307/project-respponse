export type TObjectProduct = {
  id: number;
  title: string;
  type: string;
  price: number;
  descrtion: string;
  branch: string;
  gender: string;
  mainImg: Object;
  discount: number;
  oldPrice: number;
  details: Object;
  specification: Object;
  options: Array<{
    idc: string;
    colorName: string;
    color: string;
    size: Object;
    imgs: Array<Object>;
  }>
};

export type PBtnAddBag = {
  productId: TObjectProduct;
  colorSelected: {
    color: string;
    colorName: string;
  };
  sizeSelected: string;
};

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
