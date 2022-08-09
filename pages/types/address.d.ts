interface ITAddress {
  id: number;
  namedest: string,
  zipcode: string,
  street: string,
  district: string,
  number: string,
  state: string,
  city: string,
  [key: string]: string,
}

interface IListAddress {
  listAddress: Array<ITAddress>
}
