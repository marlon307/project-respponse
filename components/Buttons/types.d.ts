export type TObjectProduct = {
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
  details: Object;
  specification: Object;
  options: Array<{
    idc: string;
    colorName: string;
    color: string;
    size: Object;
    imgs: Array<Object>;
  }>
}

export type PBtnAddBag = {
  productId: TObjectProduct;
  colorSelected: {
    color: string;
  };
  sizeSelected: string;
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
}
