export interface TypeAddBagInfos {
  id: number;
  type: string;
  title: string;
  quantity: number;
  identifyBag: string;
  mainImg: any;
  colorName: string;
  color: string;
  size: string;
}

export interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: number;
  itemEditBag: TypeAddBagInfos;
  checkout: {
    adderessSelected: {
      name: string;
      road: string;
      district: string;
      number: string;
      uf: string;
      city: string;
      zipcode: string;
    };
    shipping: {
      shippingCompany: string;
      valueShipping: number;
    };
    formatPay: {
      formatPayment: string;
      division: number;
    };
    cupomAplicate: {
      code: string;
      descountCupom: number;
    };
  }
}
