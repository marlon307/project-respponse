interface PropsColorList {
  id: number;
  color_name: string;
  color: string;
  discount: number;
  price: number;
  url_image: string;
}

interface PropsProduct {
  id: number;
  category_name: string;
  title: string;
  color_list: PropsColorList[];
}

export interface ICardProduct {
  pageFilter: {
    categoryName: string;
  };
  products: PropsProduct[];
}

interface ColorListCategorys extends PropsColorList {
  sizes: string[]
}

export interface PropsCardProductCategory extends PropsProduct {
  name_gender: string
  color_list: ColorListCategorys[]
}
