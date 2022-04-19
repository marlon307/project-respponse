interface TypesObjecListFilter {
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
