// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

interface IObjectKeys {
  [key: string]: string | number;
}

interface TypesObjecListFilter extends IObjectKeys {
  id: number;
  branch: string;
  colorName: string;
  key: string;
  name: string;
  color: string;
  size: string;
  tecid: string;
  model: string;
  categoryId: string;
}

export interface StateSearchType {
  textSearch: string;
  listFilter: Array<TypesObjecListFilter>;
}
