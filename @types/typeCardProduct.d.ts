export interface ICardProduct {
  pageFilter: {
    categoryName: string;
  };
  products: Array<{
    id: number;
    category_name: string;
    title: string;
    color_list: Array<{
      id: number;
      color_name: string;
      color: string;
      discount: number;
      price: number;
      url_image: string;
    }>;
  }>;
}
