export interface ICardProduct {
  pageFilter: {
    categoryName: string;
  };
  products: Array<{
    id: number;
    type: string;
    title: string;
    mainImg: string
    price: number;
    options: Array<{
      colorName: string;
      color: string;
    }>;
    discount: number;
    oldPrice: number;
  }>;
}
