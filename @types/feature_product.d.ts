interface IColor {
  id: number;
  color: string;
  color_name: string;
}

interface ICategory {
  id: number;
  category_name: string;
  sub_title: string;
  url_image: URL;
  color: string;
}

interface ISize {
  id: number;
  size: string;
}

interface IGender {
  id: number;
  gender: string;
  gender_name: string;
}
