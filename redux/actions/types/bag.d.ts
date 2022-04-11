export interface TypeEditBagInfos {
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

export interface TypeAddBagInfos extends TypeEditBagInfos {
  id: number;
  discount: number;
  oldPrice: number;
  price: number;
}

export interface TShipping {
  shippingCompany: string;
  valueShipping: number;
}

export interface StateBagType {
  bagItems: Array<TypeAddBagInfos>;
  valueBag: number;
  itemEditBag: TypeEditBagInfos;
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
    shipping: Shipping,
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
