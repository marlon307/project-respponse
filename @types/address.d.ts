interface ITAddress {
  id: number;
  namedest: string;
  city: string;
  district: string;
  number: string;
  state: string;
  street: string;
  zipcode: string;
  // [key: string]: string;
}

interface IListAddress {
  listAddress: Array<ITAddress>
}
