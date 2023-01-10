interface ITAddress {
  city: string;
  complement: string;
  district: string;
  id: number;
  name_delivery: string;
  number_home: string;
  state: string;
  street: string;
  zipcode: string;
}

interface IListAddress {
  listAddress: Array<ITAddress>
}
