interface ITAddress {
  id?: number;
  name_delivery?: string;
  city?: string;
  district?: string;
  number_home?: string;
  state?: string;
  street?: string;
  zipcode?: string;
}

interface IListAddress {
  listAddress: Array<ITAddress>
}
