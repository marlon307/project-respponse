interface TypesObjecListFilter {
  id: number;
  branch: string;
  colorName: string;
  color: string;
  size: string;
  tecid: string;
  model: string;
  categoryId: string;
}

export interface StateSearchType {
  textSearch: string;
  listFilter: Array<any>;
}
